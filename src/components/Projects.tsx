"use client";
import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useSounds } from "./SoundManager";

const projects = [
  {
    title: "UserHub · Auth Platform",
    description:
      "Full-featured user management platform with JWT authentication, protected routes, and a sleek dark UI.",
    tags: ["React", "TypeScript", "React Query", "Zod", "Axios"],
    github: "https://github.com/rafaelandrade-dev/auth-login-project",
    live: "https://auth-login-project.vercel.app/login",
    image: "/proj-userhub.png",
    color: "#1E1E2E",
  },
  {
    title: "Brazilian Fintech Dashboard",
    description:
      "High-performance financial dashboard for B3. Live quotes via Brapi API, real-time sparkline charts, and a Snowball projection engine.",
    tags: ["React", "Recharts", "Tailwind", "Brapi API"],
    github: "https://github.com/rafaelandrade-dev/finance-dashboard-br",
    live: "https://finance-dashboard-br.vercel.app",
    image: "/proj-finance.png",
    color: "#0F2027",
  },
  {
    title: "RPG Initiative Manager",
    description:
      "Combat tracker for tabletop RPGs with a virtual dice roller, initiative queue, and a medieval-themed UI.",
    tags: ["React", "JavaScript", "CSS Modules"],
    github: "https://github.com/rafaelandrade-dev/rpg-initiative-manager",
    live: "https://rpg-initiative-manager.vercel.app",
    image: "/proj-rpg.png",
    color: "#1A0A2E",
  },
];

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: (typeof projects)[0];
  index: number;
  inView: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, visible: false });
  const { playWhoosh } = useSounds();

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setSpotlight({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      visible: true,
    });
  }, []);

  const onMouseLeave = useCallback(() => {
    setSpotlight((s) => ({ ...s, visible: false }));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onMouseEnter={playWhoosh}
      className="relative group rounded-2xl border border-[rgba(10,10,10,0.08)] bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(10,10,10,0.15)] hover:shadow-[0_8px_32px_rgba(10,10,10,0.08)]"
      style={{ cursor: "none" }}
    >
      {/* Spotlight */}
      {spotlight.visible && (
        <div
          className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(200px circle at ${spotlight.x}px ${spotlight.y}px, rgba(37,99,235,0.06), transparent 70%)`,
          }}
        />
      )}

      {/* Preview image */}
      <div
        className="relative h-48 overflow-hidden"
        style={{ background: project.color }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />

        {/* Links */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200 z-10">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.197 22 16.442 22 12.017 22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>

      <div className="p-5 relative z-10">
        <h3 className="font-sans font-semibold text-[15px] text-[#0A0A0A] mb-2">
          {project.title}
        </h3>
        <p className="font-sans text-sm text-[#6B6B6B] leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] tracking-wide text-[#6B6B6B] bg-[#F9F8F6] border border-[rgba(10,10,10,0.08)] px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-10% 0px" });

  return (
    <section id="projects" className="py-24 px-6" ref={sectionRef}>
      <div className="max-w-[1100px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="font-mono text-[10px] tracking-[0.2em] text-[#6B6B6B] uppercase mb-12"
        >
          Projects
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
