import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PartyPopper } from 'lucide-react';

function getTargetDate() {
  const now = new Date();
  const year = now.getMonth() > 10 || (now.getMonth() === 10 && now.getDate() > 11) ? now.getFullYear() + 1 : now.getFullYear();
  // Month is 0-indexed; November is 10
  return new Date(year, 10, 11, 0, 0, 0);
}

function useCountdown(target) {
  const [timeLeft, setTimeLeft] = useState(target.getTime() - Date.now());

  useEffect(() => {
    const i = setInterval(() => setTimeLeft(target.getTime() - Date.now()), 1000);
    return () => clearInterval(i);
  }, [target]);

  const parts = useMemo(() => {
    const clamped = Math.max(0, timeLeft);
    const days = Math.floor(clamped / (1000 * 60 * 60 * 24));
    const hours = Math.floor((clamped / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((clamped / (1000 * 60)) % 60);
    const seconds = Math.floor((clamped / 1000) % 60);
    return { days, hours, minutes, seconds, isBirthday: clamped === 0 };
  }, [timeLeft]);

  return parts;
}

export default function Countdown() {
  const target = useMemo(() => getTargetDate(), []);
  const { days, hours, minutes, seconds } = useCountdown(target);
  const isBirthday = days + hours + minutes + seconds === 0;

  const units = [
    { label: 'Days', value: days },
    { label: 'Hours', value: hours },
    { label: 'Minutes', value: minutes },
    { label: 'Seconds', value: seconds },
  ];

  return (
    <section id="countdown" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.15),transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(244,63,94,0.15),transparent_60%)]" />
      <div className="relative max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center text-3xl md:text-4xl font-bold text-emerald-200"
        >
          Countdown to 11 November
        </motion.h2>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {units.map((u) => (
            <motion.div
              key={u.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-emerald-500/30 p-6 text-center shadow-[0_0_40px_rgba(16,185,129,0.15)]"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-emerald-300 tabular-nums">
                {String(u.value).padStart(2, '0')}
              </div>
              <div className="mt-2 text-sm uppercase tracking-widest text-emerald-200/80">{u.label}</div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {isBirthday && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="mt-12 rounded-2xl border border-rose-400/40 bg-rose-600/20 p-6 text-center"
            >
              <div className="mx-auto inline-flex items-center gap-3 rounded-full bg-black/30 px-4 py-2">
                <PartyPopper className="h-5 w-5 text-rose-300" />
                <span className="text-rose-100">It’s here! Happy Birthday, Soad! 🎉</span>
              </div>

              {/* Simple confetti */}
              <div className="relative h-24 overflow-visible mt-4">
                {[...Array(24)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{
                      y: [0, 120],
                      x: [0, (i % 2 === 0 ? 1 : -1) * (20 + (i % 5) * 10)],
                      rotate: [0, 180 + (i % 5) * 30],
                      opacity: [0.9, 1, 0.9],
                    }}
                    transition={{ duration: 2 + (i % 4), repeat: Infinity, delay: i * 0.05 }}
                    className="absolute left-1/2 h-2 w-2 rounded-sm"
                    style={{
                      backgroundColor: ['#34d399', '#f43f5e', '#f59e0b', '#60a5fa'][i % 4],
                      transform: `translateX(${(i - 12) * 6}px)`,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
