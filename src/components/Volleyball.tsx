"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

function CountUp({ target, inView }: { target: number; inView: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start: number;
    const duration = 1200;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return <span>{value}</span>;
}

export default function Volleyball() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-15% 0px" });

  return (
    <section id="beyond" className="py-24 px-6 bg-[#F9F8F6]" ref={sectionRef}>
      <div className="max-w-[1100px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="font-mono text-[10px] tracking-[0.2em] text-[#6B6B6B] uppercase mb-16"
        >
          Beyond the code
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: stat */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col"
          >
            <div className="relative inline-block">
              <span
                className="font-sans font-bold text-[#0A0A0A] leading-none select-none"
                style={{ fontSize: "clamp(80px, 15vw, 120px)" }}
              >
                <CountUp target={3} inView={inView} />×
              </span>
            </div>

            <p className="font-sans font-semibold text-[18px] text-[#0A0A0A] mt-4">
              Brazilian National Champion
            </p>
            <p className="font-sans text-sm text-[#6B6B6B] mt-1 tracking-wide">
              Beach Volleyball · Youth Categories
            </p>
          </motion.div>

          {/* Right: paragraph */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <p className="font-sans text-[17px] leading-[1.8] text-[#6B6B6B]">
              Competitive sport teaches you things no classroom can. Three national
              championship titles in beach volleyball showed me how to perform under
              pressure, stay consistent when it matters most, and trust your
              teammates with decisions you can&apos;t make alone.
            </p>
            <p className="font-sans text-[17px] leading-[1.8] text-[#6B6B6B] mt-4">
              Those same principles (discipline, resilience, communication) are
              exactly what I bring to every production system I touch.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
