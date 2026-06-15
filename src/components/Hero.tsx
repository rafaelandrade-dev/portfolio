"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useSounds } from "./SoundManager";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$";
const TARGET = "Rafael Andrade";

function ScrambleText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState(text);
  const iterRef = useRef(0);

  useEffect(() => {
    iterRef.current = 0;
    const interval = setInterval(() => {
      iterRef.current += 0.5;
      setDisplayed(
        text.split("").map((char, i) => {
          if (i < iterRef.current) return char;
          if (char === " ") return " ";
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        }).join("")
      );
      if (iterRef.current >= text.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [text]);

  return <span suppressHydrationWarning>{displayed}</span>;
}

function MagneticIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const { playTick } = useSounds();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 60) {
        const factor = (60 - dist) / 60;
        el.style.transform = `translate(${dx * factor * 0.4}px, ${dy * factor * 0.4}px)`;
      } else {
        el.style.transform = "";
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onMouseEnter={playTick}
      className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[rgba(10,10,10,0.12)] hover:border-[#0A0A0A] transition-all duration-200 text-[#6B6B6B] hover:text-[#0A0A0A]"
      style={{ transition: "transform 0.15s ease, border-color 0.2s, color 0.2s" }}
    >
      {children}
    </a>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 px-6">
      <div className="max-w-[1100px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <motion.div
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6"
        >
          <motion.p
            custom={0}
            variants={fadeUp}
            className="font-mono text-xs tracking-[0.2em] text-[#6B6B6B] uppercase"
          >
            Frontend Engineer
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            className="font-sans text-[clamp(48px,8vw,72px)] font-bold leading-[1.0] tracking-[-0.03em] text-[#0A0A0A]"
          >
            <ScrambleText text={TARGET} />
          </motion.h1>

          {/* Data rows */}
          <motion.div custom={2} variants={fadeUp} className="flex flex-col gap-3 mt-2">
            {[
              ["LOCATION", "João Pessoa, Brazil"],
              ["CURRENTLY", "ServiceNet Tecnologia"],
              ["STATUS", "Available for new opportunities →"],
            ].map(([label, value]) => (
              <div key={label} className="flex items-baseline gap-4">
                <span className="font-mono text-[10px] tracking-[0.15em] text-[#6B6B6B] uppercase w-28 shrink-0">
                  {label}
                </span>
                <span className="font-sans text-sm text-[#0A0A0A]">{value}</span>
              </div>
            ))}
          </motion.div>

          {/* Social icons */}
          <motion.div custom={3} variants={fadeUp} className="flex gap-3 mt-2">
            <MagneticIcon href="https://github.com/rafaelandrade-dev" label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.197 22 16.442 22 12.017 22 6.484 17.522 2 12 2z" />
              </svg>
            </MagneticIcon>
            <MagneticIcon href="https://www.linkedin.com/in/rafael-andradedev1/" label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </MagneticIcon>
            <MagneticIcon href="mailto:andraderafael037@gmail.com" label="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </MagneticIcon>
          </motion.div>
        </motion.div>

        {/* Right — photo placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 60, rotate: 3 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-96 md:w-80 md:h-[420px]">
            <div className="breathe w-full h-full rounded-2xl overflow-hidden bg-[#1a3a6b] border border-[rgba(10,10,10,0.08)]">
              <Image
                src="/foto.jpg"
                alt="Rafael Andrade"
                fill
                sizes="(max-width: 768px) 288px, 320px"
                className="object-cover object-center"
                priority
              />
            </div>
            {/* Decorative dot grid */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 grid grid-cols-4 gap-1.5 opacity-30">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-1 h-1 rounded-full bg-[#0A0A0A]" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
