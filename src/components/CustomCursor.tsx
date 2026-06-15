"use client";
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const rafRef = useRef<number>();

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      current.current.x = lerp(current.current.x, pos.current.x, 0.12);
      current.current.y = lerp(current.current.y, pos.current.y, 0.12);
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${current.current.x}px, ${current.current.y}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    const onEnter = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest("a,button,[data-hover]")) setHovered(true);
    };
    const onLeave = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest("a,button,[data-hover]")) setHovered(false);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform"
      style={{ transform: "translate(-100px,-100px)" }}
    >
      <div
        className="rounded-full bg-[#0A0A0A] transition-all duration-200 ease-out"
        style={{
          width: hovered ? "40px" : "8px",
          height: hovered ? "40px" : "8px",
          marginLeft: hovered ? "-20px" : "-4px",
          marginTop: hovered ? "-20px" : "-4px",
          mixBlendMode: hovered ? "difference" : "normal",
          backgroundColor: hovered ? "#ffffff" : "#0A0A0A",
        }}
      />
    </div>
  );
}
