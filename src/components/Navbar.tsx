"use client";
import { useEffect, useState } from "react";
import { useSounds } from "./SoundManager";

const links = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { playTick } = useSounds();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(249,248,246,0.85)] backdrop-blur-[12px] border-b border-[rgba(10,10,10,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="#"
          className="font-mono text-sm font-semibold tracking-wider text-[#0A0A0A] hover:text-[#2563EB] transition-colors"
          onMouseEnter={playTick}
        >
          RA
        </a>
        <div className="flex gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onMouseEnter={playTick}
              className="font-sans text-sm text-[#6B6B6B] hover:text-[#0A0A0A] transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#0A0A0A] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
