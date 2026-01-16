import { ChevronDown, Car, Atom, Zap } from 'lucide-react';

export default function Hero() {
  const scrollToNext = () => {
    const element = document.getElementById('chemistry');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 animate-float">
          <Atom className="w-32 h-32 text-white" />
        </div>
        <div className="absolute bottom-40 right-20 animate-float-delayed">
          <Zap className="w-24 h-24 text-white" />
        </div>
        <div className="absolute top-1/2 left-1/4 animate-float">
          <Car className="w-40 h-40 text-white" />
        </div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-8 inline-block">
          <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <Car className="w-16 h-16 text-white" />
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
          The Science Behind Cars
        </h1>

        <p className="text-2xl md:text-3xl text-blue-200 mb-8 font-light">
          How physics and chemistry actually make cars work
        </p>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
            We use cars every day, but most people never really think about what’s going on inside them.
            A car isn’t just a machine, it’s a scientific masterpiece with physics and chemistry working together the whole time.
          </p>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            In this project, I’m going to show how fuel turns into motion, why forces matter when you turn or stop,
            and how safety systems are designed to protect the rider.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <span className="text-white font-semibold">Grade 11 Physics</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <span className="text-white font-semibold">Grade 11 Chemistry</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <span className="text-white font-semibold">Final Project</span>
          </div>
        </div>

        <button
          onClick={scrollToNext}
          className="animate-bounce inline-flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors"
        >
          <span className="text-sm uppercase tracking-wide">Scroll</span>
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
