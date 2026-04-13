import React, { useRef, useEffect } from 'react';
import logoSrc from '../../../assets/an_logo/A&N_logo.png';
import styles from './DitheredLogo.module.css';

const GRID = 1;           // pixels between sample points
const DOT_R = 0.75;       // dot radius in px
const SPRING = 0.06;      // spring strength pulling dot toward target
const DAMPING = 0.88;     // velocity damping per frame (lower = more sluggish)
const RIPPLE_SPEED = 6;   // px per frame the ring expands
const RIPPLE_MAX_R = 700; // radius at which a ripple dies
const RIPPLE_FORCE = 55;  // max displacement from a ripple
const RIPPLE_WIDTH = 14;  // half-width of the ring's influence band
const RIPPLE_MAX_COUNT = 30; // hard cap on concurrent ripples

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

interface Ripple { x: number; y: number; radius: number; }

interface AnimState {
  dots: Dot[];
  ripples: Ripple[];
  animId: number | null;
  rect: DOMRect | null;
  wake: (() => void) | null;
}

export default function DitheredLogo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<AnimState>({
    dots: [],
    ripples: [],
    animId: null,
    rect: null,
    wake: null,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    const W = canvas.width;
    const H = canvas.height;
    const s = stateRef.current;
    let mounted = true;

    s.rect = canvas.getBoundingClientRect();
    const ro = new ResizeObserver(() => {
      s.rect = canvas.getBoundingClientRect();
    });
    ro.observe(canvas);

    function getCanvasPos(clientX: number, clientY: number) {
      const rect = s.rect!;
      const scaleX = canvas!.width / rect.width;
      const scaleY = canvas!.height / rect.height;
      return {
        x: (clientX - rect.left) * scaleX,
        y: (clientY - rect.top) * scaleY,
      };
    }

    function spawnRipple(x: number, y: number) {
      if (s.ripples.length >= RIPPLE_MAX_COUNT) return;
      s.ripples.push({ x, y, radius: 0 });
      s.wake?.();
    }

    function handleTouchStart(e: TouchEvent) {
      e.preventDefault();
      if (!s.rect) return;
      const { x, y } = getCanvasPos(e.touches[0].clientX, e.touches[0].clientY);
      spawnRipple(x, y);
    }

    canvas.addEventListener('touchstart', handleTouchStart, { passive: false });

    const img = new Image();

    img.onload = () => {
      if (!mounted) return;

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
          if (brightness > threshold * 0.5) {
            dots.push({ bx: x, by: y, cx: x, cy: y, vx: 0, vy: 0 });
          }
        }
      }
      s.dots = dots;

      let idleFrames = 0;
      const IDLE_GRACE = 150; // ~2.5s at 60fps — long enough for dots to settle

      function frame() {
        // Idle when no live ripples → start grace countdown, then sleep
        if (s.ripples.length === 0) {
          idleFrames++;
        } else {
          idleFrames = 0;
        }
        if (idleFrames > IDLE_GRACE) {
          s.animId = null;
          return;
        }

        // Advance ripples, cull dead ones in-place
        let live = 0;
        for (let ri = 0; ri < s.ripples.length; ri++) {
          s.ripples[ri].radius += RIPPLE_SPEED;
          if (s.ripples[ri].radius < RIPPLE_MAX_R) {
            s.ripples[live++] = s.ripples[ri];
          }
        }
        s.ripples.length = live;

        ctx.clearRect(0, 0, W, H);
        ctx.fillStyle = 'rgba(247, 242, 233, 0.85)';

        ctx.beginPath();
        const rLen = s.ripples.length;
        for (const dot of s.dots) {
          let tx = dot.bx;
          let ty = dot.by;

          for (let ri = 0; ri < rLen; ri++) {
            const r = s.ripples[ri];
            const rdx = dot.bx - r.x;
            const rdy = dot.by - r.y;
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

      s.wake = () => {
        idleFrames = 0;
        if (s.animId === null) {
          s.animId = requestAnimationFrame(frame);
        }
      };

      // Seed an opening ripple from a random dot so the logo introduces itself
      const seed = dots[(Math.random() * dots.length) | 0];
      spawnRipple(seed.bx, seed.by);
    };

    img.src = logoSrc;

    return () => {
      mounted = false;
      if (s.animId) cancelAnimationFrame(s.animId);
      ro.disconnect();
      canvas.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

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
    s.wake?.();
  }

  return (
    <canvas
      ref={canvasRef}
      width={500}
      height={500}
      className={styles.canvas}
      onClick={onClick}
    />
  );
}
