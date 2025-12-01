'use client';

import { useEffect, useRef } from 'react';
import NeuralCanvas from '@/features/main-part/components/neural-canvas';

// โครงสร้างข้อมูลของ "เส้นคลื่น" 1 เส้น
type Wave = {
  amplitude: number; // ความสูงของคลื่น (ขยับขึ้นลงมากแค่ไหน)
  wavelength: number; // ความถี่ของคลื่น (ช่วงห่างระหว่างยอดคลื่น)
  speed: number; // ความเร็วที่ phase ขยับ → ส่งผลให้คลื่นเคลื่อนที่
  phase: number; // ระยะเลื่อนเริ่มต้นของคลื่น (offset ในแกน x)
  yOffset: number; // ตำแหน่งแกน y กลางของคลื่น (ฐานของคลื่น)
  lineWidth: number; // ความหนาเส้น
  color: string; // สีของเส้น (ใช้ rgba ให้มีความโปร่ง)
};

const NeuralBackgroundContainer = () => {
  // ref เอาไว้รับ <canvas> element จาก DOM
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // ดึง canvas จาก ref
    const canvas = canvasRef.current;
    if (!canvas) return;

    // ขอ 2D context สำหรับวาดรูปบน canvas
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // เก็บ config ของแต่ละเส้นคลื่น
    const waves: Wave[] = [];

    // ฟังก์ชันปรับขนาด canvas ให้เต็มหน้าต่าง
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // เรียกครั้งแรกตอน mount
    resize();
    // เวลาหน้าจอเปลี่ยนขนาด → ปรับขนาด canvas ตาม
    window.addEventListener('resize', resize);

    // จุดอ้างอิงแกน y (เอาไว้เป็นฐานของคลื่นชุดนี้)
    const baseY = canvas.height * 0.55;

    // กำหนดคลื่นหลาย ๆ เส้นซ้อนกัน โดยแต่ละเส้นมี amplitude / wavelength / สี / yOffset ต่างกัน
    waves.push(
      {
        amplitude: 26,
        wavelength: 280,
        speed: 0.012,
        phase: 0,
        yOffset: baseY,
        lineWidth: 2,
        color: 'rgba(249,115,22,0.95)', // เส้นหลักสีส้ม core
      },
      {
        amplitude: 22,
        wavelength: 230,
        speed: 0.01,
        phase: 1.2,
        yOffset: baseY + 20,
        lineWidth: 1.6,
        color: 'rgba(251,146,60,0.9)', // ส้มอ่อนขึ้นเล็กน้อย
      },
      {
        amplitude: 20,
        wavelength: 210,
        speed: 0.009,
        phase: 2.4,
        yOffset: baseY - 18,
        lineWidth: 1.4,
        color: 'rgba(255,177,66,0.8)',
      },
      {
        amplitude: 18,
        wavelength: 260,
        speed: 0.007,
        phase: 3.4,
        yOffset: baseY + 40,
        lineWidth: 1.2,
        color: 'rgba(249,115,22,0.45)',
      },
      {
        amplitude: 18,
        wavelength: 260,
        speed: 0.008,
        phase: 4.1,
        yOffset: baseY - 40,
        lineWidth: 1.2,
        color: 'rgba(249,115,22,0.35)',
      }
    );

    // เก็บ id ของ animation frame เพื่อใช้ cancel ตอน cleanup
    let animationFrameId: number;

    // ฟังก์ชันวาดในแต่ละเฟรม
    const render = () => {
      const w = canvas.width;
      const h = canvas.height;

      // ----- วาดพื้นหลังเป็น gradient มืด ๆ -----
      const gradient = ctx.createLinearGradient(0, 0, 0, h);
      gradient.addColorStop(0, '#020617'); // ด้านบน
      gradient.addColorStop(0.5, '#111827'); // กลาง
      gradient.addColorStop(1, '#1f2933'); // ล่าง
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      // ----- วาดเส้นคลื่นแต่ละเส้น -----
      waves.forEach((wave) => {
        // ขยับ phase ไปทีละนิด → ทำให้คลื่นเลื่อน
        wave.phase += wave.speed;

        ctx.beginPath();
        ctx.lineWidth = wave.lineWidth;
        ctx.strokeStyle = wave.color;

        // วาดจาก x = 0 → x = width ทีละ 4px เพื่อไม่ให้ loop หนาเกิน
        for (let x = 0; x <= w; x += 4) {
          // สูตร y ของ sine wave:
          // y = ฐาน + sin(ตำแหน่งตามแกน x + phase) * amplitude
          const y =
            wave.yOffset +
            Math.sin(x / wave.wavelength + wave.phase) * wave.amplitude;

          // จุดแรกใช้ moveTo, จุดถัดไปใช้ lineTo เพื่อต่อเส้นให้เป็นคลื่น
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        // วาดเส้นลงจริงบน canvas
        ctx.stroke();
      });

      // ขอวาดเฟรมถัดไป (loop animation)
      animationFrameId = window.requestAnimationFrame(render);
    };

    // เริ่มวาดครั้งแรก
    render();

    // cleanup ตอน component unmount
    return () => {
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <NeuralCanvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 block"
      aria-hidden
    />
  );
};

export default NeuralBackgroundContainer;
