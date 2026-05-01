"use client";

import React, { useEffect, useRef } from "react";

interface ElectricBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function ElectricBadge({ children, className = "" }: ElectricBadgeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // Use non-null assertion after the guard check above so TS is happy inside closures
    const ctx = canvas.getContext("2d")!;
    if (!ctx) return;

    const rect = container.getBoundingClientRect();
    canvas.width = rect.width + 48;
    canvas.height = rect.height + 48;

    const W = canvas.width;
    const H = canvas.height;
    const cx = W / 2;
    const cy = H / 2;
    const rx = Math.max(0.1, (W - 24) / 2);
    const ry = Math.max(0.1, (H - 24) / 2);

    interface Spark {
      life: number;
      maxLife: number;
      vx: number;
      vy: number;
      x: number;
      y: number;
      size: number;
      hue: number;
    }

    let sparks: Spark[] = [];
    let frame = 0;
    let animId: number;

    function ellipsePoint(angle: number) {
      return {
        x: cx + rx * Math.cos(angle),
        y: cy + ry * Math.sin(angle),
      };
    }

    function spawnSpark() {
      const angle = Math.random() * Math.PI * 2;
      const pt = ellipsePoint(angle);
      const tangentX = -Math.sin(angle);
      const tangentY = Math.cos(angle);
      const normalX = Math.cos(angle);
      const normalY = Math.sin(angle);
      const speed = 0.4 + Math.random() * 1.2;
      const dir = Math.random() > 0.5 ? 1 : -1;
      sparks.push({
        life: 0,
        maxLife: 18 + Math.random() * 25,
        vx: tangentX * speed * dir + normalX * (Math.random() - 0.5) * 1.2,
        vy: tangentY * speed * dir + normalY * (Math.random() - 0.5) * 1.2,
        x: pt.x,
        y: pt.y,
        size: 1 + Math.random() * 1.8,
        hue: 265 + Math.random() * 55,
      });
    }

    function drawPulse() {
      const scale = 1 + 0.05 * Math.sin(frame * 0.05);
      const alpha = 0.12 + 0.08 * Math.sin(frame * 0.05);
      ctx.beginPath();
      ctx.ellipse(cx, cy, rx * scale, ry * scale, 0, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(139,92,246,${alpha})`;
      ctx.lineWidth = 5;
      ctx.shadowBlur = 18;
      ctx.shadowColor = "rgba(139,92,246,0.5)";
      ctx.stroke();
      ctx.shadowBlur = 0;
    }

    function drawBaseRing() {
      ctx.beginPath();
      ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(139,92,246,0.2)";
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    function drawElectricArc(startAngle: number, sweep: number, color: string, lineWidth: number) {
      const steps = 24;
      ctx.beginPath();
      for (let i = 0; i <= steps; i++) {
        const a = startAngle + (sweep * i) / steps;
        const jitter = (Math.random() - 0.5) * 2.5;
        const pt = {
          x: cx + (rx + jitter) * Math.cos(a),
          y: cy + (ry + jitter) * Math.sin(a),
        };
        i === 0 ? ctx.moveTo(pt.x, pt.y) : ctx.lineTo(pt.x, pt.y);
      }
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
      ctx.shadowBlur = 10;
      ctx.shadowColor = "rgba(139,92,246,0.9)";
      ctx.stroke();
      ctx.shadowBlur = 0;
    }

    function drawArcs() {
      drawBaseRing();
      const t = frame;
      drawElectricArc((t * 0.018) % (Math.PI * 2), 0.7, "rgba(167,139,250,0.95)", 2);
      drawElectricArc((t * 0.025 + Math.PI) % (Math.PI * 2), 0.4, "rgba(216,180,254,0.75)", 1.2);
      drawElectricArc((t * 0.013 + 1.2) % (Math.PI * 2), 0.22, "rgba(255,255,255,0.9)", 1.5);
    }

    function drawSparks() {
      sparks = sparks.filter((s) => s.life < s.maxLife);
      for (const s of sparks) {
        const progress = s.life / s.maxLife;
        const alpha = 1 - progress;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * (1 - progress * 0.5), 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${s.hue},100%,80%,${alpha})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = `hsla(${s.hue},100%,70%,${alpha})`;
        ctx.fill();
        ctx.shadowBlur = 0;
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.035;
        s.life++;
      }
    }

    function loop() {
      ctx.clearRect(0, 0, W, H);
      drawPulse();
      drawArcs();
      if (frame % 4 === 0) spawnSpark();
      if (frame % 9 === 0) spawnSpark();
      drawSparks();
      frame++;
      animId = requestAnimationFrame(loop);
    }

    loop();

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative inline-flex items-center ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="absolute pointer-events-none"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 0 }}
      />
      <span
        className="relative z-10 font-label-caps text-label-caps text-purple bg-[rgba(91,44,107,0.06)] px-3 py-1 rounded-full uppercase tracking-widest"
        style={{ boxShadow: "0 0 0 1px rgba(139,92,246,0.28), 0 0 10px rgba(139,92,246,0.12)" }}
      >
        {children}
      </span>
    </div>
  );
}
