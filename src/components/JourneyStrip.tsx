"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const MILESTONES = [
  {
    pct: 0.10,
    label: "2022 · B.S. Computer Science",
    sub: "UNIPÊ · enrolled at 16, expected graduation Nov 2026",
  },
  {
    pct: 0.30,
    label: "Feb 2023 · First Internship",
    sub: "Gráfica JB · Laravel & jQuery, first production codebase",
  },
  {
    pct: 0.55,
    label: "Feb 2024 · Hired Full-Time",
    sub: "ServiceNet · machine control systems at scale",
  },
  {
    pct: 0.78,
    label: "2024 · Key Milestone",
    sub: "Zero critical incidents · mentoring interns",
  },
  {
    pct: 0.93,
    label: "Now · Web Developer",
    sub: "Worldwide solutions · graduating before 20",
  },
];

function StickFigure({ cycle }: { cycle: number }) {
  const legAngle = Math.sin(cycle * Math.PI * 2) * 30;
  const armAngle = -legAngle * 0.55;

  const cx = 16;
  const headR = 6;
  // pad top so head never clips
  const headY = headR + 2;
  const neckY = headY + headR;
  const hipY = neckY + 18;
  const footY = hipY + 22;
  const totalH = footY + 4;

  const lFootX = cx + Math.sin((legAngle * Math.PI) / 180) * 20;
  const lKneeX = cx + Math.sin((legAngle * Math.PI) / 180) * 10;
  const lKneeY = hipY + 11;
  const rFootX = cx - Math.sin((legAngle * Math.PI) / 180) * 20;
  const rKneeX = cx - Math.sin((legAngle * Math.PI) / 180) * 10;
  const rKneeY = hipY + 11;

  const shoulderY = neckY + 4;
  const lHandX = cx + Math.sin((armAngle * Math.PI) / 180) * 13 - 7;
  const lHandY = shoulderY + 12;
  const rHandX = cx - Math.sin((armAngle * Math.PI) / 180) * 13 + 7;
  const rHandY = shoulderY + 12;

  return (
    <svg
      width="32"
      height={totalH}
      viewBox={`0 0 32 ${totalH}`}
      fill="none"
      style={{ overflow: "visible" }}
    >
      <circle cx={cx} cy={headY} r={headR} stroke="#0A0A0A" strokeWidth="2" />
      <line x1={cx} y1={neckY} x2={cx} y2={hipY} stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" />
      <line x1={cx} y1={shoulderY} x2={lHandX} y2={lHandY} stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" />
      <line x1={cx} y1={shoulderY} x2={rHandX} y2={rHandY} stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" />
      <line x1={cx} y1={hipY} x2={lKneeX} y2={lKneeY} stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" />
      <line x1={lKneeX} y1={lKneeY} x2={lFootX} y2={footY} stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" />
      <line x1={cx} y1={hipY} x2={rKneeX} y2={rKneeY} stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" />
      <line x1={rKneeX} y1={rKneeY} x2={rFootX} y2={footY} stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function JourneyStrip() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1200);
  // time-based walk cycle — always animates regardless of scroll speed
  const [cycle, setCycle] = useState(0);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const onResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", onResize);

    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(1, scrolled / total));
      setProgress(p);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // rAF loop for walk animation — 1 full cycle per 0.6 s
    const tick = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      setCycle(((ts - startRef.current) / 600) % 1);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const xPos = progress * (windowWidth - 80);
  const sunY = 20 - progress * 10;

  return (
    <div ref={containerRef} className="relative" style={{ height: "420vh" }}>
      <div className="sticky top-0 h-screen flex flex-col justify-end overflow-hidden bg-[#F9F8F6]">
        {/* Sky gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(to bottom, rgba(37,99,235,${0.03 + progress * 0.04}) 0%, transparent 60%)`,
          }}
        />

        {/* Sun */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#FCD34D] opacity-30 blur-sm transition-none"
          style={{ top: `${sunY}%` }}
        />

        {/* Horizon line */}
        <div className="absolute bottom-20 left-0 right-0 h-px bg-[rgba(10,10,10,0.06)]" />

        {/* Milestone flags */}
        {MILESTONES.map((m) => {
          const flagX = m.pct * windowWidth;
          const visible = progress >= m.pct - 0.04;
          return (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 14 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute bottom-24 flex flex-col items-center gap-1"
              style={{ left: flagX, transform: "translateX(-50%)" }}
            >
              <div className="flex flex-col items-center gap-0.5 max-w-[180px]">
                <div className="bg-[#0A0A0A] text-[#F9F8F6] text-[10px] font-mono tracking-wide px-2.5 py-1 rounded whitespace-nowrap">
                  {m.label}
                </div>
                <div className="text-[9px] font-sans text-[#6B6B6B] text-center leading-tight">
                  {m.sub}
                </div>
              </div>
              <div className="w-px h-5 bg-[#0A0A0A] opacity-30" />
            </motion.div>
          );
        })}

        {/* Walking stick figure */}
        <div
          className="absolute transition-none pointer-events-none"
          style={{ left: xPos, bottom: "46px", transform: "translateX(-16px)" }}
        >
          <StickFigure cycle={cycle} />
        </div>

        {/* Ground */}
        <div className="absolute bottom-16 left-0 right-0 h-0.5 bg-[#0A0A0A] opacity-10" />

        {/* Label */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.2em] text-[#6B6B6B] uppercase">
          professional journey
        </div>
      </div>
    </div>
  );
}
