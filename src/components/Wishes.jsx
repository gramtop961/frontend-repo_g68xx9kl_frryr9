import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

const starter = [
  "Wishing you strength like the Water Breathing first form — calm and unstoppable.",
  "May your year sparkle brighter than Nezuko’s pink glow!",
  "Charge forward like Zenitsu’s thunder — boldly and brilliantly.",
  "Another level unlocked! Keep slaying your goals, Soad."
];

export default function Wishes() {
  const [wishes, setWishes] = useState(starter);
  const [text, setText] = useState('');

  const addWish = () => {
    const t = text.trim();
    if (!t) return;
    setWishes((w) => [t, ...w]);
    setText('');
  };

  return (
    <section id="wishes" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-0 opacity-60" aria-hidden>
        <div className="h-full w-full bg-[radial-gradient(circle_at_20%_10%,rgba(244,63,94,0.15),transparent_40%),radial-gradient(circle_at_80%_90%,rgba(16,185,129,0.15),transparent_40%)]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center text-3xl md:text-4xl font-bold text-rose-200"
        >
          Leave a birthday wish for Soad
        </motion.h2>

        <div className="mt-8 grid md:grid-cols-[1fr_auto] gap-3">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addWish()}
            placeholder="Type your wish here..."
            className="w-full rounded-xl bg-slate-800/60 border border-rose-400/30 px-4 py-3 text-slate-100 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-rose-400/50"
          />
          <button
            onClick={addWish}
            className="rounded-xl bg-rose-600/80 hover:bg-rose-600 text-white px-5 py-3 transition"
          >
            Send wish
          </button>
        </div>

        <ul className="mt-8 grid sm:grid-cols-2 gap-4">
          <AnimatePresence>
            {wishes.map((w, i) => (
              <motion.li
                key={w + i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                className="relative rounded-2xl border border-emerald-400/30 bg-slate-800/60 p-4 text-slate-100"
              >
                <div className="absolute -top-3 -left-3 inline-flex items-center gap-1 rounded-full bg-black/40 px-3 py-1 text-emerald-200 text-xs border border-emerald-400/30">
                  <Heart className="h-3.5 w-3.5 text-rose-300" />
                  Wish
                </div>
                {w}
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </section>
  );
}
