"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const sentences = [
  {
    text: "I'm Rafael, a 19-year-old Frontend Engineer based in João Pessoa, Brazil.",
    annotation: null,
  },
  {
    text: "I started coding at 16 and I'm on track to be graduating before turning 20,",
    annotation: { text: "started at 16 :)", rotate: -4, offsetX: "calc(100% + 8px)", offsetY: "-28px" },
  },
  {
    text: "which means I've spent a good chunk of my teenage years shipping real software.",
    annotation: null,
  },
  {
    text: "Right now I maintain a machine control system in production at ServiceNet Tecnologia, where we've gone months without a single critical incident.",
    annotation: null,
  },
  {
    text: "Three national championship titles in beach volleyball taught me what it really means to perform under pressure and trust your teammates,",
    annotation: { text: "3x national champion 🏐", rotate: 3, offsetX: "calc(100% + 10px)", offsetY: "-20px" },
  },
  {
    text: "skills that translate directly into building production software.",
    annotation: null,
  },
];

function Sentence({
  text,
  annotation,
  index,
}: {
  text: string;
  annotation: { text: string; rotate: number; offsetX: string; offsetY: string } | null;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
      className="relative inline"
    >
      {text}{" "}
      {annotation && (
        <span
          className="absolute font-hand text-[#16A34A] text-lg whitespace-nowrap pointer-events-none"
          style={{
            left: annotation.offsetX,
            top: annotation.offsetY,
            transform: `rotate(${annotation.rotate}deg)`,
          }}
        >
          {annotation.text}
        </span>
      )}
    </motion.span>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-[680px] mx-auto">
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="font-mono text-[10px] tracking-[0.2em] text-[#6B6B6B] uppercase mb-8"
        >
          About
        </motion.p>

        <p className="font-sans text-[17px] leading-[1.75] text-[#0A0A0A]">
          {sentences.map((s, i) => (
            <Sentence key={i} {...s} index={i} />
          ))}
        </p>
      </div>
    </section>
  );
}
