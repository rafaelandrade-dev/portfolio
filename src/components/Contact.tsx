"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useSounds } from "./SoundManager";

const EMAIL = "andraderafael037@gmail.com";

export default function Contact() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-15% 0px" });
  const [hovered, setHovered] = useState(false);
  const { playPop } = useSounds();

  return (
    <section id="contact" className="py-32 px-6" ref={sectionRef}>
      <div className="max-w-[680px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8"
        >
          <h2
            className="font-sans font-bold text-[#0A0A0A] leading-[1.1] tracking-[-0.03em]"
            style={{ fontSize: "clamp(36px, 6vw, 56px)" }}
          >
            Let's build something.
          </h2>

          <div className="flex flex-col gap-2">
            <a
              href={`mailto:${EMAIL}`}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onClick={playPop}
              className="relative inline-block font-sans text-xl font-medium text-[#0A0A0A] group w-fit"
            >
              {EMAIL}
              <svg
                className="absolute -bottom-1 left-0 w-full"
                height="2"
                viewBox={`0 0 ${EMAIL.length * 10} 2`}
                preserveAspectRatio="none"
              >
                <motion.line
                  x1="0"
                  y1="1"
                  x2={EMAIL.length * 10}
                  y2="1"
                  stroke="#2563EB"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: hovered ? 1 : 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                />
              </svg>
            </a>

            <p className="font-mono text-[11px] tracking-[0.15em] text-[#6B6B6B] uppercase mt-2">
              Available for remote · João Pessoa, Brazil
            </p>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="max-w-[680px] mx-auto mt-32 pt-8 border-t border-[rgba(10,10,10,0.08)]">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] text-[#6B6B6B]">
            © 2026 Rafael Andrade
          </span>
          <span className="font-mono text-[11px] text-[#6B6B6B]">
            Built with Next.js + Framer Motion
          </span>
        </div>
      </div>
    </section>
  );
}
