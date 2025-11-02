import { motion } from 'framer-motion';
import { Flame, Zap, Feather, Shield, Wind, Waves } from 'lucide-react';

const characters = [
  {
    name: 'Tanjiro Kamado',
    color: 'from-emerald-500/20 to-emerald-900/40',
    accent: 'text-emerald-300',
    icon: Waves,
    line: 'Water Breathing • Flow with kindness and strength',
  },
  {
    name: 'Nezuko Kamado',
    color: 'from-rose-500/20 to-rose-900/40',
    accent: 'text-rose-300',
    icon: Feather,
    line: 'Grace and resilience • A gentle protector',
  },
  {
    name: 'Zenitsu Agatsuma',
    color: 'from-amber-400/20 to-amber-900/40',
    accent: 'text-amber-300',
    icon: Zap,
    line: 'Thunder Breathing • Strike with courage',
  },
  {
    name: 'Inosuke Hashibira',
    color: 'from-sky-500/20 to-sky-900/40',
    accent: 'text-sky-300',
    icon: Shield,
    line: 'Wild heart • Unstoppable and bold',
  },
  {
    name: 'Giyu Tomioka',
    color: 'from-cyan-400/20 to-cyan-900/40',
    accent: 'text-cyan-300',
    icon: Waves,
    line: 'Calm waters • Silent resolve',
  },
  {
    name: 'Kyojuro Rengoku',
    color: 'from-orange-500/20 to-red-900/40',
    accent: 'text-orange-300',
    icon: Flame,
    line: 'Flame Breathing • Burn bright and true',
  },
];

export default function Characters() {
  return (
    <section className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 opacity-70" aria-hidden>
        <div className="h-full w-full bg-[radial-gradient(circle_at_10%_20%,rgba(99,102,241,0.12),transparent_40%),radial-gradient(circle_at_90%_80%,rgba(16,185,129,0.12),transparent_40%)]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-200 via-rose-200 to-amber-200 bg-clip-text text-transparent"
        >
          The Slayer Squad wishes you power, Soad
        </motion.h2>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {characters.map((c, idx) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${c.color} p-5`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
                </div>
                <div className="relative flex items-start gap-3">
                  <div className={`rounded-xl bg-black/30 p-3 border border-white/10 ${c.accent}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-100 text-lg">{c.name}</div>
                    <div className="text-sm text-slate-300/90">{c.line}</div>
                  </div>
                </div>
                <motion.div
                  aria-hidden
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25 }}
                  className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-white/10 blur-2xl"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
