import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Characters from './components/Characters';
import Wishes from './components/Wishes';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100 selection:bg-rose-500/40 selection:text-white">
      <Hero />
      <Countdown />
      <Characters />
      <Wishes />

      <footer className="relative py-10 bg-slate-950 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-400">
          <p>Made with love for Soad • 11 Nov</p>
          <p className="text-slate-500">Demon Slayer themed surprise with animations</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
