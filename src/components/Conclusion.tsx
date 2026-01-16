import { Lightbulb } from 'lucide-react';

export default function Conclusion() {
  return (
    <section id="conclusion" className="min-h-screen py-32 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-in-section">
          <div className="inline-block p-4 bg-yellow-100 rounded-2xl mb-6">
            <Lightbulb className="w-12 h-12 text-yellow-600" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Conclusion: Why Science Matters in Cars
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            When you look closely, cars are just physics and chemistry working together in real life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="fade-in-section bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20 text-white">
            <h3 className="text-3xl font-bold mb-6">How Physics and Chemistry Work Together</h3>
            <div className="space-y-6">
              <div>
                <p className="text-lg font-semibold text-yellow-300 mb-3">Chemistry Turns Fuel into Energy</p>
                <p className="leading-relaxed text-gray-200">
                  Cars work because fuel stores chemical energy. When the fuel burns inside the engine,
                  a chemical reaction releases that energy as heat. This happens over and over again while
                  the engine is running and is what keeps the car moving.
                </p>
              </div>

              <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                <p className="font-semibold text-cyan-300 mb-2">What happens in simple steps:</p>
                <div className="text-sm space-y-1 text-gray-200">
                  <p>1. Air and fuel mix together</p>
                  <p>2. A spark ignites the mixture</p>
                  <p>3. The fuel burns and releases energy</p>
                  <p>4. Hot gases expand and push the piston</p>
                </div>
              </div>

              <div>
                <p className="text-lg font-semibold text-yellow-300 mb-3">Physics Turns Energy into Motion</p>
                <p className="leading-relaxed text-gray-200">
                  After the fuel releases energy, physics takes over. The expanding gas pushes the piston,
                  which turns the crankshaft, which turns the wheels. Forces, motion, and friction are all
                  involved every time the car speeds up, slows down, or turns.
                </p>
              </div>

              <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                <p className="font-semibold text-cyan-300 mb-2">In simple terms:</p>
                <div className="text-sm space-y-1 text-gray-200">
                  <p>1. Gas pressure pushes the piston</p>
                  <p>2. The piston turns the crankshaft</p>
                  <p>3. The wheels start rotating</p>
                  <p>4. Friction with the road moves the car forward</p>
                </div>
              </div>
            </div>
          </div>

          <div className="fade-in-section bg-gradient-to-br from-green-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-10 border border-green-400/30 text-white">
            <h3 className="text-3xl font-bold mb-6">Why This Is Important in Real Life</h3>
            <div className="space-y-6">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <p className="text-xl font-bold text-green-300 mb-3">Safety</p>
                <p className="text-gray-200 leading-relaxed">
                  Things like seatbelts, airbags, and crumple zones exist because engineers understand
                  physics. They use ideas like momentum and forces to reduce injuries during crashes.
                </p>
              </div>

              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <p className="text-xl font-bold text-blue-300 mb-3">Efficiency</p>
                <p className="text-gray-200 leading-relaxed">
                  Chemistry and physics help make engines use less fuel. By improving how fuel burns and
                  how energy is transferred, modern cars can go farther using less gas.
                </p>
              </div>

              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <p className="text-xl font-bold text-purple-300 mb-3">Environment</p>
                <p className="text-gray-200 leading-relaxed">
                  Chemistry is used to reduce harmful exhaust gases using things like catalytic converters.
                  Electric cars also use physics to run without burning fuel at all.
                </p>
              </div>

              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <p className="text-xl font-bold text-yellow-300 mb-3">New Technology</p>
                <p className="text-gray-200 leading-relaxed">
                  Better materials, better designs, and even self-driving cars all exist because people
                  keep finding better ways to use physics and chemistry.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="fade-in-section bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-12 shadow-2xl text-white text-center">
          <h3 className="text-4xl font-bold mb-6">The Bigger Picture</h3>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg leading-relaxed">
              Learning about the science behind cars is really just learning how science is used in real life.
              Cars are something we see every day, but they are full of ideas from physics and chemistry.
            </p>

            <p className="text-lg leading-relaxed">
              From energy being released in the engine, to forces acting on the car, to materials being chosen
              for safety, everything depends on these subjects working together.
            </p>

            <div className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl border border-white/30">
              <p className="text-2xl font-bold mb-4">Looking to the Future</p>
              <p className="text-lg leading-relaxed">
                Future cars, like electric or self-driving cars, will still depend on physics and chemistry.
                Learning this stuff now helps understand how those technologies work and how they can be improved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
