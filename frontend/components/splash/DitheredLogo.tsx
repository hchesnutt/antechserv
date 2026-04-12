import React, { useRef, useEffect } from 'react';
import logoSrc from '../../../assets/an_logo/A&N_logo.png';
import styles from './DitheredLogo.module.css';

const GRID = 2;           // pixels between sample points
const DOT_R = 1.2;        // dot radius in px
const REPEL_R = 33;       // mouse repulsion radius in canvas px
const REPEL_FORCE = 58;   // max dot displacement in px
const SPRING = 0.06;      // spring strength pulling dot toward target
const DAMPING = 0.88;     // velocity damping per frame (lower = more sluggish)
const RIPPLE_SPEED = 6;   // px per frame the ring expands
const RIPPLE_MAX_R = 700; // radius at which a ripple dies
const RIPPLE_FORCE = 55;  // max displacement from a ripple
const RIPPLE_WIDTH = 14;  // half-width of the ring's influence band
const RIPPLE_MAX_COUNT = 30; // hard cap on concurrent ripples
const RIPPLE_MOVE_DIST = 99999; // disabled — motion ripples off, click-only

// 4x4 Bayer ordered dither matrix, normalized 0–1
const BAYER = [
  [ 0,  8,  2, 10],
  [12,  4, 14,  6],
  [ 3, 11,  1,  9],
  [15,  7, 13,  5],
].map(row => row.map(v => v / 16));

interface Dot {
  bx: number; by: number;
  cx: number; cy: number;
  vx: number; vy: number;
}

interface Vec2 { x: number; y: number; }

interface Ripple { x: number; y: number; radius: number; }

interface AnimState {
  dots: Dot[];
  mouse: Vec2;
  prevMouse: Vec2;
  cursorVel: Vec2;
  ripples: Ripple[];
  lastRipplePos: Vec2;
  animId: number | null;
  rect: DOMRect | null;
}

export default function DitheredLogo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<AnimState>({
    dots: [],
    mouse: { x: -9999, y: -9999 },
    prevMouse: { x: -9999, y: -9999 },
    cursorVel: { x: 0, y: 0 },
    ripples: [],
    lastRipplePos: { x: -9999, y: -9999 },
    animId: null,
    rect: null,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    const W = canvas.width;
    const H = canvas.height;
    const s = stateRef.current;
    let mounted = true;

    // Cache bounding rect to avoid layout thrashing on every mouse event
    s.rect = canvas.getBoundingClientRect();
    const ro = new ResizeObserver(() => {
      s.rect = canvas.getBoundingClientRect();
    });
    ro.observe(canvas);

    // Touch support — use imperative addEventListener so we can pass { passive: false }
    function getCanvasPos(clientX: number, clientY: number) {
      const rect = s.rect!;
      const scaleX = canvas!.width / rect.width;
      const scaleY = canvas!.height / rect.height;
      return {
        x: (clientX - rect.left) * scaleX,
        y: (clientY - rect.top) * scaleY,
      };
    }

    function handleTouchStart(e: TouchEvent) {
      e.preventDefault();
      if (!s.rect) return;
      const { x: mx, y: my } = getCanvasPos(e.touches[0].clientX, e.touches[0].clientY);
      s.mouse = { x: mx, y: my };
      if (s.ripples.length < RIPPLE_MAX_COUNT) {
        s.ripples.push({ x: mx, y: my, radius: 0 });
        s.lastRipplePos = { x: mx, y: my };
      }
    }

    function handleTouchMove(e: TouchEvent) {
      e.preventDefault();
      if (!s.rect) return;
      const { x: mx, y: my } = getCanvasPos(e.touches[0].clientX, e.touches[0].clientY);
      s.mouse = { x: mx, y: my };
      const dx = mx - s.lastRipplePos.x;
      const dy = my - s.lastRipplePos.y;
      if (Math.hypot(dx, dy) >= RIPPLE_MOVE_DIST && s.ripples.length < RIPPLE_MAX_COUNT) {
        s.ripples.push({ x: mx, y: my, radius: 0 });
        s.lastRipplePos = { x: mx, y: my };
      }
    }

    function handleTouchEnd() {
      s.mouse = { x: -9999, y: -9999 };
      s.lastRipplePos = { x: -9999, y: -9999 };
    }

    canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    canvas.addEventListener('touchend', handleTouchEnd);

    const img = new Image();

    img.onload = () => {
      if (!mounted) return;

      // Draw image onto offscreen canvas to sample pixel data
      const off = document.createElement('canvas');
      off.width = W;
      off.height = H;
      const octx = off.getContext('2d')!;
      octx.drawImage(img, 0, 0, W, H);
      const { data } = octx.getImageData(0, 0, W, H);

      const dots = [];
      for (let y = 0; y < H; y += GRID) {
        for (let x = 0; x < W; x += GRID) {
          const i = (y * W + x) * 4;
          const brightness = (data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114) / 255;
          const threshold = BAYER[(y / GRID | 0) % 4][(x / GRID | 0) % 4];
          // Inverted dither: bright pixels become dots, dark/bg areas stay empty
          if (brightness > threshold * 0.7) {
            dots.push({ bx: x, by: y, cx: x, cy: y, vx: 0, vy: 0 });
          }
        }
      }
      s.dots = dots;

      function frame() {
        const mx = s.mouse.x;
        const my = s.mouse.y;

        // Smooth cursor velocity
        s.cursorVel.x = s.cursorVel.x * 0.75 + (mx - s.prevMouse.x) * 0.25;
        s.cursorVel.y = s.cursorVel.y * 0.75 + (my - s.prevMouse.y) * 0.25;
        s.prevMouse.x = mx;
        s.prevMouse.y = my;

        const speed = Math.hypot(s.cursorVel.x, s.cursorVel.y);
        // Normalized cursor direction (zero when cursor is still)
        const cdx = speed > 0.5 ? s.cursorVel.x / speed : 0;
        const cdy = speed > 0.5 ? s.cursorVel.y / speed : 0;
        // How strongly to apply the teardrop effect (ramps up with speed, caps at 1)
        const tearStrength = Math.min(speed / 2, 1);

        // Advance ripples, cull dead ones in-place to avoid per-frame allocation
        let live = 0;
        for (let ri = 0; ri < s.ripples.length; ri++) {
          s.ripples[ri].radius += RIPPLE_SPEED;
          if (s.ripples[ri].radius < RIPPLE_MAX_R) {
            s.ripples[live++] = s.ripples[ri];
          }
        }
        s.ripples.length = live;

        ctx.clearRect(0, 0, W, H);
        ctx.fillStyle = 'rgba(247, 242, 233, 0.85)';  // editorial cream/paper white

        // Batch all dots into a single path — one fill() call instead of one per dot
        ctx.beginPath();
        const rLen = s.ripples.length;
        for (const dot of s.dots) {
          // Mouse repulsion target
          const dx = dot.bx - mx;
          const dy = dot.by - my;
          const dist2 = dx * dx + dy * dy;

          let tx = dot.bx;
          let ty = dot.by;

          if (dist2 < REPEL_R * REPEL_R && dist2 > 0) {
            const dist = Math.sqrt(dist2);
            const t = 1 - dist / REPEL_R;
            // alignment: +1 = dot is ahead of cursor, -1 = dot is behind
            const alignment = (dx * cdx + dy * cdy) / dist;
            // Ahead → less force (pointed tip), behind → more force (wide arc)
            const dirFactor = 1 - alignment * 0.7 * tearStrength;
            const force = t * t * REPEL_FORCE * Math.max(0.05, dirFactor);
            tx += (dx / dist) * force;
            ty += (dy / dist) * force;
          }

          // Ripple displacement — each active ring nudges nearby dots outward
          for (let ri = 0; ri < rLen; ri++) {
            const r = s.ripples[ri];
            const rdx = dot.bx - r.x;
            const rdy = dot.by - r.y;
            // Cheap AABB pre-check — skip sqrt for dots clearly outside the ring band
            const outerR = r.radius + RIPPLE_WIDTH;
            if (Math.abs(rdx) > outerR || Math.abs(rdy) > outerR) continue;
            const rdist = Math.hypot(rdx, rdy);
            const delta = rdist - r.radius;
            if (rdist > 0 && Math.abs(delta) < RIPPLE_WIDTH) {
              const falloff = 1 - Math.abs(delta) / RIPPLE_WIDTH;
              const decay = 1 - r.radius / RIPPLE_MAX_R;
              const force = falloff * falloff * decay * RIPPLE_FORCE;
              tx += (rdx / rdist) * force;
              ty += (rdy / rdist) * force;
            }
          }

          // Spring toward target, damp velocity
          dot.vx = (dot.vx + (tx - dot.cx) * SPRING) * DAMPING;
          dot.vy = (dot.vy + (ty - dot.cy) * SPRING) * DAMPING;
          dot.cx += dot.vx;
          dot.cy += dot.vy;

          ctx.moveTo(dot.cx + DOT_R, dot.cy);
          ctx.arc(dot.cx, dot.cy, DOT_R, 0, Math.PI * 2);
        }
        ctx.fill();

        s.animId = requestAnimationFrame(frame);
      }

      s.animId = requestAnimationFrame(frame);
    };

    img.src = logoSrc;

    return () => {
      mounted = false;
      if (s.animId) cancelAnimationFrame(s.animId);
      ro.disconnect();
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  function onMouseMove(e: React.MouseEvent<HTMLCanvasElement>) {
    const s = stateRef.current;
    if (!s.rect) return;
    const scaleX = canvasRef.current!.width / s.rect.width;
    const scaleY = canvasRef.current!.height / s.rect.height;
    const mx = (e.clientX - s.rect.left) * scaleX;
    const my = (e.clientY - s.rect.top) * scaleY;
    s.mouse = { x: mx, y: my };

    // Spawn a ripple every RIPPLE_MOVE_DIST px of cursor travel
    const dx = mx - s.lastRipplePos.x;
    const dy = my - s.lastRipplePos.y;
    if (Math.hypot(dx, dy) >= RIPPLE_MOVE_DIST && s.ripples.length < RIPPLE_MAX_COUNT) {
      s.ripples.push({ x: mx, y: my, radius: 0 });
      s.lastRipplePos = { x: mx, y: my };
    }
  }

  function onMouseLeave() {
    stateRef.current.mouse = { x: -9999, y: -9999 };
    stateRef.current.lastRipplePos = { x: -9999, y: -9999 };
  }

  function onClick(e: React.MouseEvent<HTMLCanvasElement>) {
    const s = stateRef.current;
    if (s.ripples.length >= RIPPLE_MAX_COUNT) return;
    const { rect } = s;
    if (!rect) return;
    const scaleX = canvasRef.current!.width / rect.width;
    const scaleY = canvasRef.current!.height / rect.height;
    s.ripples.push({
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
      radius: 0,
    });
  }

  return (
    <canvas
      ref={canvasRef}
      width={480}
      height={480}
      className={styles.canvas}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    />
  );
}
