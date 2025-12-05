'use client';

import { useEffect, useRef } from 'react';
import NeuralCanvas from '@/features/main-part/components/NeuralCanvas';

type FabricLine = {
  amplitude: number;
  wavelength: number;
  speed: number;
  phase: number;
  yOffset: number;
  lineWidth: number;
  color: string;
};

const WAVE_COUNT = 15;

const NeuralBackgroundCohesive = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const waves: FabricLine[] = [];

    const initWaves = () => {
      const h = canvas.height;
      const w = canvas.width;

      const gap = 6;
      const totalBandHeight = (WAVE_COUNT - 1) * gap;
      const startY = h / 2 - totalBandHeight / 2;

      waves.length = 0;

      // คงความยาวคลื่นไว้ตามเดิม (ลูปน้อย)
      const sharedWavelength = w * 1.5;

      for (let i = 0; i < WAVE_COUNT; i++) {
        const t = i / (WAVE_COUNT - 1);
        const yOffset = startY + i * gap;

        // [จุดแก้ที่ 1] ปรับ Amplitude
        // ของเดิม: h * 0.2 + Math.sin(...) * 20 -> เส้นบนสุดจะได้แค่ h*0.2 (น้อย)
        // ของใหม่: h * 0.35 (ให้ฐานเยอะขึ้น) + ตัวคูณ sine ที่น้อยลง
        // ผล: เส้นบนสุดจะเหวี่ยงกว้างขึ้น ทำให้วงที่ซ้ายบนดู "เต็ม" ขึ้น
        const baseAmp = h * 0.2 + Math.sin(t * Math.PI) * 20;

        waves.push({
          amplitude: baseAmp,

          wavelength: sharedWavelength,

          speed: 0.004,

          // [จุดแก้ที่ 2] ปรับ Phase เริ่มต้น (เลื่อนยอดคลื่น)
          // ค่าเดิม 25: เป็นจุดที่กราฟกำลังลงหรืออยู่กลางๆ
          // ค่าใหม่ 23.4: เป็นจุดที่ Sin wave ให้ค่าติดลบ (บนจอ Canvas ค่าลบคือขึ้นบน)
          // ทำให้ "ยอดคลื่น" มาโผล่ที่ขอบซ้ายพอดีครับ
          phase: 23.4 + i * 0.2,

          yOffset,
          lineWidth: 1.5 + Math.sin(t * Math.PI) * 1.5,
          color: `rgba(249, 115, 22, ${0.4 + Math.sin(t * Math.PI) * 0.6})`,
        });
      }
    };

    const setCanvasSize = () => {
      const parent = canvas.parentElement;
      const rect = parent?.getBoundingClientRect();
      const width = Math.max(1, Math.floor(rect?.width ?? window.innerWidth));
      const height = Math.max(
        1,
        Math.floor(rect?.height ?? window.innerHeight)
      );

      canvas.width = width;
      canvas.height = height;
      initWaves();
    };

    setCanvasSize();

    const resizeObserver = new ResizeObserver(setCanvasSize);
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }
    window.addEventListener('resize', setCanvasSize);

    let animationFrameId: number;

    const render = () => {
      const w = canvas.width;
      const h = canvas.height;

      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, w, h);

      const time = Date.now() * 0.001;

      waves.forEach((wave, index) => {
        wave.phase += wave.speed;

        ctx.beginPath();
        ctx.lineWidth = wave.lineWidth;
        ctx.strokeStyle = wave.color;

        // [KEY 3] Breathing Effect ที่สัมพันธ์กัน
        // ใช้ตัวคูณ index น้อยๆ (0.05) เพื่อให้ทั้งมัดขยาย/หด พร้อมๆ กันมากขึ้น
        const breathing = 1 + Math.sin(time + index * 0.05) * 0.1;
        const currentAmp = wave.amplitude * breathing;

        for (let x = 0; x <= w; x += 4) {
          // --- Organic Wave Logic (สูตรเดิมที่สวยแล้ว) ---

          // Layer 1: Main
          const layer1 = Math.sin(x / wave.wavelength + wave.phase);

          // Layer 2: Secondary
          const layer2 = Math.sin(
            x / (wave.wavelength * 0.4) + wave.phase * 2.3
          );

          // Layer 3: Micro Jitter
          const layer3 = Math.sin(
            x / (wave.wavelength * 0.15) + wave.phase * 4.1
          );

          // รวมร่าง
          const combinedSignal = layer1 + layer2 * 0.3 + layer3 * 0.1;

          const y = wave.yOffset + combinedSignal * currentAmp;

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.stroke();
      });

      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
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

export default NeuralBackgroundCohesive;
