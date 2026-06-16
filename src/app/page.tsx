"use client";
import CustomCursor from "@/components/CustomCursor";
import { SoundProvider, MuteButton } from "@/components/SoundManager";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import JourneyStrip from "@/components/JourneyStrip";
import Work from "@/components/Work";
import Projects from "@/components/Projects";
import Volleyball from "@/components/Volleyball";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <SoundProvider>
      <div className="hidden md:block"><CustomCursor /></div>
      <MuteButton />
      <Navbar />
      <main>
        <Hero />
        <div className="hidden md:block"><JourneyStrip /></div>
        <About />
        <Work />
        <Projects />
        <Volleyball />
        <Contact />
      </main>
    </SoundProvider>
  );
}
