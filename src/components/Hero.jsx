import { motion } from 'framer-motion';
import { Sword, Sparkles } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const glowRef = useRef(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;
    let raf;
    const animate = () => {
      const t = Date.now() / 1200;
      const x = Math.sin(t) * 4;
      const y = Math.cos(t * 1.2) * 4;
      el.style.transform = `translate(${x}px, ${y}px)`;
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="relative min-h-[90vh] overflow-hidden flex items-center justify-center bg-gradient-to-br from-slate-900 via-rose-900/60 to-emerald-900/70">
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div
          className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-rose-500/20 blur-3xl"
          animate={{ y: [0, -30, 0], x: [0, -15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      <div className="relative z-10 max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose-500/40 bg-black/30 px-4 py-2 text-rose-200 shadow-[0_0_30px_rgba(244,63,94,0.25)]"
        >
          <Sparkles className="h-4 w-4 text-rose-300" />
          <span className="text-sm tracking-wide">Demon Slayer Birthday Surprise</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.9 }}
          className="font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight bg-gradient-to-r from-emerald-300 via-rose-300 to-amber-200 bg-clip-text text-transparent"
        >
          Happy Birthday, Soad!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="mt-4 text-base sm:text-lg text-emerald-100/90"
        >
          May your day be filled with courage like Tanjiro, kindness like Nezuko, and
          thunderous joy like Zenitsu. 11 November is your day — let the celebration begin!
        </motion.p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, type: 'spring', stiffness: 100, damping: 14 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <a href="#countdown" className="group relative inline-flex items-center gap-2 rounded-xl border border-emerald-400/50 bg-emerald-600/20 px-5 py-3 text-emerald-100 hover:bg-emerald-600/30 transition">
            <span>Enter the surprise</span>
            <Sword className="h-5 w-5 transition-transform group-hover:rotate-12" />
          </a>
          <a href="#wishes" className="rounded-xl bg-rose-500/80 hover:bg-rose-500 text-white px-5 py-3 transition">
            Leave a wish
          </a>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute right-6 bottom-6 hidden sm:block">
        <div ref={glowRef} className="relative">
          <div className="absolute -inset-3 rounded-xl bg-rose-500/20 blur-xl" />
          <div className="relative flex items-center gap-2 rounded-xl border border-rose-400/40 bg-black/30 px-3 py-2 text-rose-100">
            <Sword className="h-5 w-5 text-rose-300" />
            <span className="text-sm">Breathing Style: Celebration</span>
          </div>
        </div>
      </div>
    </section>
  );
}
