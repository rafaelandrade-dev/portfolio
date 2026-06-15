"use client";
import { createContext, useContext, useRef, useState, useCallback } from "react";

type SoundContextType = {
  muted: boolean;
  toggle: () => void;
  playTick: () => void;
  playWhoosh: () => void;
  playPop: () => void;
};

const SoundContext = createContext<SoundContextType>({
  muted: false,
  toggle: () => {},
  playTick: () => {},
  playWhoosh: () => {},
  playPop: () => {},
});

export function useSounds() {
  return useContext(SoundContext);
}

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [muted, setMuted] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);

  const getCtx = useCallback(() => {
    if (!ctxRef.current) {
      ctxRef.current = new (window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext)();
    }
    return ctxRef.current;
  }, []);

  const playTick = useCallback(() => {
    if (muted) return;
    try {
      const ctx = getCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.03);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.03);
    } catch {}
  }, [muted, getCtx]);

  const playWhoosh = useCallback(() => {
    if (muted) return;
    try {
      const ctx = getCtx();
      const bufferSize = ctx.sampleRate * 0.08;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
      const source = ctx.createBufferSource();
      source.buffer = buffer;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.03, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
      const filter = ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.value = 1200;
      source.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      source.start(ctx.currentTime);
    } catch {}
  }, [muted, getCtx]);

  const playPop = useCallback(() => {
    if (muted) return;
    try {
      const ctx = getCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.1);
    } catch {}
  }, [muted, getCtx]);

  return (
    <SoundContext.Provider value={{ muted, toggle: () => setMuted(m => !m), playTick, playWhoosh, playPop }}>
      {children}
    </SoundContext.Provider>
  );
}

export function MuteButton() {
  const { muted, toggle } = useSounds();
  return (
    <button
      onClick={toggle}
      className="fixed top-5 right-5 z-[100] w-9 h-9 rounded-full flex items-center justify-center text-sm border border-[rgba(10,10,10,0.1)] bg-[rgba(249,248,246,0.8)] backdrop-blur-sm transition-opacity hover:opacity-70"
      aria-label={muted ? "Unmute" : "Mute"}
    >
      {muted ? "🔇" : "🔊"}
    </button>
  );
}
