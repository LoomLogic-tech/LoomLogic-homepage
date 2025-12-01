"use client";

import { useEffect, useRef } from "react";
import NeuralCanvas from "@/features/main-part/components/neural-canvas";

type Wave = {
  amplitude: number;
  wavelength: number;
  speed: number;
  phase: number;
  yOffset: number;
  lineWidth: number;
  color: string;
};

const yOffsets = [0, 20, -18, 40, -40];

const NeuralBackgroundContainer = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const waves: Wave[] = [];

    const setCanvasSize = () => {
      const parent = canvas.parentElement;
      const rect = parent?.getBoundingClientRect();

      const width = Math.max(1, Math.floor(rect?.width ?? window.innerWidth));
      const height = Math.max(1, Math.floor(rect?.height ?? window.innerHeight));

      canvas.width = width;
      canvas.height = height;

      if (waves.length) {
        const baseY = height * 0.55;
        waves.forEach((wave, index) => {
          wave.yOffset = baseY + (yOffsets[index] ?? 0);
        });
      }
    };

    setCanvasSize();

    const baseY = canvas.height * 0.55;

    waves.push(
      {
        amplitude: 26,
        wavelength: 280,
        speed: 0.012,
        phase: 0,
        yOffset: baseY,
        lineWidth: 2,
        color: "rgba(249,115,22,0.95)",
      },
      {
        amplitude: 22,
        wavelength: 230,
        speed: 0.01,
        phase: 1.2,
        yOffset: baseY + 20,
        lineWidth: 1.6,
        color: "rgba(251,146,60,0.9)",
      },
      {
        amplitude: 20,
        wavelength: 210,
        speed: 0.009,
        phase: 2.4,
        yOffset: baseY - 18,
        lineWidth: 1.4,
        color: "rgba(255,177,66,0.8)",
      },
      {
        amplitude: 18,
        wavelength: 260,
        speed: 0.007,
        phase: 3.4,
        yOffset: baseY + 40,
        lineWidth: 1.2,
        color: "rgba(249,115,22,0.45)",
      },
      {
        amplitude: 18,
        wavelength: 260,
        speed: 0.008,
        phase: 4.1,
        yOffset: baseY - 40,
        lineWidth: 1.2,
        color: "rgba(249,115,22,0.35)",
      }
    );

    const resizeObserver = new ResizeObserver(setCanvasSize);
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }
    window.addEventListener("resize", setCanvasSize);

    let animationFrameId: number;

    const render = () => {
      const w = canvas.width;
      const h = canvas.height;

      const gradient = ctx.createLinearGradient(0, 0, 0, h);
      gradient.addColorStop(0, "#020617");
      gradient.addColorStop(0.5, "#111827");
      gradient.addColorStop(1, "#1f2933");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      waves.forEach((wave) => {
        wave.phase += wave.speed;

        ctx.beginPath();
        ctx.lineWidth = wave.lineWidth;
        ctx.strokeStyle = wave.color;

        for (let x = 0; x <= w; x += 4) {
          const y =
            wave.yOffset +
            Math.sin(x / wave.wavelength + wave.phase) * wave.amplitude;

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.stroke();
      });

      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      resizeObserver.disconnect();
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <NeuralCanvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 -z-20 block"
      aria-hidden
    />
  );
};

export default NeuralBackgroundContainer;
