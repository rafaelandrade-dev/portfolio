"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const entries = [
  {
    date: "2024 · Present",
    role: "Web Developer",
    company: "ServiceNet Tecnologia",
    description:
      "Maintain a machine control system in production. Part of the first team to go months without a single critical incident on a widely-used system.",
    highlight: true,
  },
  {
    date: "2023 – 2024",
    role: "Web Developer Intern",
    company: "ServiceNet Tecnologia",
    description:
      "Interned on the same team before being hired full-time. Contributed to internal software projects under mentorship while delivering features across the stack.",
    highlight: false,
  },
  {
    date: "Feb – Apr 2023",
    role: "Web Developer Intern",
    company: "Gráfica JB",
    description:
      "Built web features with Laravel + jQuery in a production codebase with minimal oversight.",
    highlight: false,
  },
];

function DrawLine({ inView }: { inView: boolean }) {
  return (
    <svg
      className="absolute left-[105px] top-0 bottom-0 w-px"
      style={{ height: "100%" }}
      overflow="visible"
    >
      <motion.line
        x1="0" y1="0" x2="0" y2="100%"
        stroke="#D1D0CE"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
    </svg>
  );
}

function HighlightOval({ inView }: { inView: boolean }) {
  return (
    <svg
      className="absolute -inset-2 pointer-events-none"
      viewBox="0 0 220 48"
      fill="none"
      preserveAspectRatio="none"
    >
      <motion.ellipse
        cx="110" cy="24" rx="108" ry="22"
        stroke="#16A34A"
        strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 1.0, delay: 0.5, ease: "easeInOut" }}
      />
    </svg>
  );
}

export default function Work() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-10% 0px" });

  return (
    <section id="work" className="py-24 px-6" ref={sectionRef}>
      <div className="max-w-[680px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="font-mono text-[10px] tracking-[0.2em] text-[#6B6B6B] uppercase mb-12"
        >
          Work
        </motion.p>

        <div className="relative">
          <DrawLine inView={inView} />

          <div className="flex flex-col gap-12">
            {entries.map((entry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className="flex gap-8"
              >
                {/* Date */}
                <div className="w-24 shrink-0 pt-0.5">
                  <span className="font-mono text-[11px] text-[#6B6B6B] leading-tight whitespace-nowrap">
                    {entry.date}
                  </span>
                </div>

                {/* Dot on line */}
                <div className="w-3 shrink-0 flex flex-col items-center pt-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#0A0A0A] ring-2 ring-[#F9F8F6]" />
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  <div className="relative inline-flex flex-wrap items-baseline gap-1.5 mb-2">
                    <span className="font-sans font-semibold text-[15px] text-[#0A0A0A]">
                      {entry.role}
                    </span>
                    <span className="font-sans text-[15px] text-[#6B6B6B]">·</span>
                    <div className="relative">
                      <span className="font-sans text-[15px] text-[#0A0A0A]">
                        {entry.company}
                      </span>
                      {entry.highlight && <HighlightOval inView={inView} />}
                    </div>
                  </div>
                  <p className="font-sans text-sm text-[#6B6B6B] leading-relaxed max-w-[400px]">
                    {entry.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
