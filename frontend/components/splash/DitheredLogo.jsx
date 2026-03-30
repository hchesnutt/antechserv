import React, { useRef, useEffect } from 'react';
import logoSrc from '../../../assets/an_logo/A&N_logo.png';
import styles from './DitheredLogo.module.css';

const GRID = 1;           // pixels between sample points
const DOT_R = 0.6;        // dot radius in px
const REPEL_R = 40;       // mouse repulsion radius in canvas px
const REPEL_FORCE = 55;   // max dot displacement in px
const SPRING = 0.08;      // spring strength pulling dot toward target
const DAMPING = 0.72;     // velocity damping per frame (lower = more sluggish)
const RIPPLE_SPEED = 5;   // px per frame the ring expands
const RIPPLE_MAX_R = 300; // radius at which a ripple dies
const RIPPLE_FORCE = 40;  // max displacement from a ripple
const RIPPLE_WIDTH = 18;  // half-width of the ring's influence band
const RIPPLE_MAX_COUNT = 20; // hard cap on concurrent ripples

// 4x4 Bayer ordered dither matrix, normalized 0–1
const BAYER = [
  [ 0,  8,  2, 10],
  [12,  4, 14,  6],
  [ 3, 11,  1,  9],
  [15,  7, 13,  5],
].map(row => row.map(v => v / 16));

export default function DitheredLogo() {
  const canvasRef = useRef(null);
  const stateRef = useRef({
    dots: [],
    mouse: { x: -9999, y: -9999 },
    prevMouse: { x: -9999, y: -9999 },
    cursorVel: { x: 0, y: 0 },
    ripples: [],
    animId: null,
    rect: null,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
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

    const img = new Image();

    img.onload = () => {
      if (!mounted) return;

      // Draw image onto offscreen canvas to sample pixel data
      const off = document.createElement('canvas');
      off.width = W;
      off.height = H;
      const octx = off.getContext('2d');
      octx.drawImage(img, 0, 0, W, H);
      const { data } = octx.getImageData(0, 0, W, H);

      const dots = [];
      for (let y = 0; y < H; y += GRID) {
        for (let x = 0; x < W; x += GRID) {
          const i = (y * W + x) * 4;
          const brightness = (data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114) / 255;
          const threshold = BAYER[(y / GRID | 0) % 4][(x / GRID | 0) % 4];
          // Inverted dither: bright pixels become dots, dark/bg areas stay empty
          if (brightness > threshold) {
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
          const dist = Math.hypot(dx, dy);

          let tx = dot.bx;
          let ty = dot.by;

          if (dist < REPEL_R && dist > 0) {
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
    };
  }, []);

  function onMouseMove(e) {
    const { rect } = stateRef.current;
    if (!rect) return;
    const scaleX = canvasRef.current.width / rect.width;
    const scaleY = canvasRef.current.height / rect.height;
    stateRef.current.mouse = {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  }

  function onMouseLeave() {
    stateRef.current.mouse = { x: -9999, y: -9999 };
  }

  function onClick(e) {
    const s = stateRef.current;
    if (s.ripples.length >= RIPPLE_MAX_COUNT) return;
    const { rect } = s;
    if (!rect) return;
    const scaleX = canvasRef.current.width / rect.width;
    const scaleY = canvasRef.current.height / rect.height;
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
