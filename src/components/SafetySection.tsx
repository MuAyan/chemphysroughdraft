import { Shield, AlertTriangle } from 'lucide-react';

export default function SafetySection() {
  return (
    <section id="safety" className="min-h-screen py-32 bg-gradient-to-b from-blue-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 fade-in-section">
          <div className="inline-block p-4 bg-red-100 rounded-2xl mb-6">
            <Shield className="w-12 h-12 text-red-600" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Safety Systems
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How physics and chemistry work together to keep you alive
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="fade-in-section bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-10 shadow-2xl text-white">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-xl">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-4xl font-bold">The Physics Side</h3>
            </div>

            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <p className="font-bold text-2xl mb-4">Momentum and Impulse</p>
                <p className="mb-4 leading-relaxed">
                  When a crash happens, everything comes down to <strong>momentum</strong> and <strong>impulse</strong>.
                  The car is moving, then suddenly it has to stop. Physics describes this using:
                </p>

                <div className="bg-white/20 p-4 rounded-xl font-mono text-sm mb-4">
                  <div>Impulse = Δp = FΔt</div>
                  <div className="mt-2">Δp = m(v<sub>f</sub> - v<sub>i</sub>)</div>
                </div>

                <p className="text-sm mb-3">
                  In a crash, the change in momentum is basically fixed by how fast and heavy the car was.
                  The only thing engineers can really control is the <strong>time</strong> over which the car stops.
                </p>

                <div className="bg-blue-900/50 p-4 rounded-xl text-sm space-y-2">
                  <p className="font-semibold">What this means in real life:</p>
                  <p className="ml-4">• Stop faster → much bigger force (bad)</p>
                  <p className="ml-4">• Stop slower → smaller force (good)</p>
                  <p className="mt-3 bg-white/20 p-3 rounded">
                    So basically, <strong>safety systems try to stretch out the crash in time</strong> to make it less violent.
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <p className="font-bold text-2xl mb-4">Crumple Zones</p>
                <p className="mb-4 leading-relaxed text-sm">
                  <strong>Crumple zones</strong> are parts of the car that are meant to get destroyed in a crash — on purpose.
                </p>

                <div className="space-y-3 text-sm">
                  <div className="bg-blue-900/50 p-4 rounded-xl">
                    <p className="font-semibold mb-2">1. They slow the stop</p>
                    <p>
                      The front of the car collapses over a short distance, which makes the car stop over a longer
                      time instead of instantly. That directly reduces the force on the people inside.
                    </p>
                  </div>

                  <div className="bg-blue-900/50 p-4 rounded-xl">
                    <p className="font-semibold mb-2">2. They absorb energy</p>
                    <p>
                      The car’s kinetic energy gets used up bending and breaking metal instead of being sent into your body.
                    </p>
                  </div>

                  <div className="bg-blue-900/50 p-4 rounded-xl">
                    <p className="font-semibold mb-2">3. They spread the force out</p>
                    <p>
                      Stopping over half a meter is way better than stopping over five centimeters. Same momentum change,
                      way less force.
                    </p>
                  </div>
                </div>

                <p className="text-xs mt-4 bg-white/20 p-3 rounded">
                  The passenger area stays stiff and strong — only the front and back are meant to sacrifice themselves.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <p className="font-bold text-2xl mb-4">Seatbelts</p>
                <p className="mb-4 text-sm leading-relaxed">
                  Seatbelts are simple, but they might be the most important safety feature in the entire car.
                </p>

                <div className="space-y-3 text-sm">
                  <div className="bg-blue-900/50 p-3 rounded-xl">
                    <p className="font-semibold">They spread the force out</p>
                    <p className="text-xs mt-1">
                      Instead of your head hitting the dashboard, the force gets spread across your chest and hips,
                      which are much stronger.
                    </p>
                  </div>

                  <div className="bg-blue-900/50 p-3 rounded-xl">
                    <p className="font-semibold">They stop the “second crash”</p>
                    <p className="text-xs mt-1">
                      Even if the car stops, your body keeps moving because of inertia. Without a belt, you just
                      slam into the inside of the car at full speed.
                    </p>
                  </div>

                  <div className="bg-blue-900/50 p-3 rounded-xl">
                    <p className="font-semibold">They’re smart now</p>
                    <p className="text-xs mt-1">
                      Modern belts tighten instantly, then slightly loosen to avoid breaking your ribs. It’s all about
                      controlling the force and time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="fade-in-section bg-gradient-to-br from-red-600 to-orange-700 rounded-3xl p-10 shadow-2xl text-white">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-xl">
                <AlertTriangle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-4xl font-bold">The Chemistry Side</h3>
            </div>

            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <p className="font-bold text-2xl mb-4">Airbags</p>
                <p className="mb-4 leading-relaxed">
                  The way airbags work is absolutly facinating. They inflate in about the blink of an eye using a chemical reaction.
                </p>

                <div className="bg-red-900/50 p-5 rounded-xl mb-4">
                  <p className="font-semibold mb-3">What happens:</p>
                  <p className="text-sm mb-3">
                    The car triggers a reaction that breaks down sodium azide:
                  </p>

                  <div className="bg-white/20 p-4 rounded-xl font-mono text-sm mb-3">
                    2NaN₃ → 2Na + 3N₂(g)
                  </div>

                  <p className="text-sm">
                    This produces a huge amount of nitrogen gas almost instantly, which fills the airbag.
                  </p>
                </div>

                <div className="bg-orange-900/50 p-4 rounded-xl mt-4">
                  <p className="font-semibold mb-2 text-sm">And then it deflates</p>
                  <p className="text-xs">
                    Small holes let the gas escape so you don’t bounce off it like a wall.
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <p className="font-bold text-2xl mb-4">Materials</p>
                <p className="mb-4 text-sm leading-relaxed">
                  The materials in a car are carefully chosen based on chemistry.
                </p>

                <div className="space-y-3 text-sm">
                  <div className="bg-red-900/50 p-4 rounded-xl">
                    <p className="font-semibold mb-2">Strong metals</p>
                    <p className="text-xs">
                      The passenger cage uses insanely strong steel alloys so it doesn’t collapse even in bad crashes.
                    </p>
                  </div>

                  <div className="bg-red-900/50 p-4 rounded-xl">
                    <p className="font-semibold mb-2">Plastics and fabrics</p>
                    <p className="text-xs">
                      Airbags, seatbelts, and interior parts all use special polymers that are strong, flexible, and reliable.
                    </p>
                  </div>

                  <div className="bg-red-900/50 p-4 rounded-xl">
                    <p className="font-semibold mb-2">Foams</p>
                    <p className="text-xs">
                      The soft parts of the interior are designed to crush and absorb energy instead of sending it into you.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <p className="font-bold text-xl mb-3">Putting it all together</p>
                <p className="text-sm leading-relaxed">
                  Physics tells it what needs to happen, chemistry brings it to life.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="fade-in-section bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-10 shadow-2xl text-white">
          <h3 className="text-3xl font-bold mb-6 text-center">Does this stuff actually work?</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <p className="text-5xl font-bold text-green-400 mb-2">~50%</p>
              <p className="text-sm">Fewer deaths because of seatbelts</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <p className="text-5xl font-bold text-blue-400 mb-2">~30%</p>
              <p className="text-sm">Extra lives saved by airbags</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <p className="text-5xl font-bold text-purple-400 mb-2">~60%</p>
              <p className="text-sm">Injury reduction from crumple zones</p>
            </div>
          </div>
          <p className="text-center mt-6 text-sm text-gray-300">
            This isn’t a marketing gimmick, it's physics and chemistry saving lives.
          </p>
        </div>
      </div>
    </section>
  );
}
