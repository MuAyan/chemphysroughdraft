import { Zap, Gauge, Activity, Waves } from 'lucide-react';

export default function PhysicsSection() {
  return (
    <section id="physics" className="min-h-screen py-32 bg-gradient-to-b from-orange-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 fade-in-section">
          <div className="inline-block p-4 bg-blue-100 rounded-2xl mb-6">
            <Zap className="w-12 h-12 text-blue-600" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Physics of Cars
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How energy turns into motion, and why cars move, stop, and don’t kill us instantly
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="fade-in-section bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow border border-blue-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Gauge className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Motion & Stopping</h3>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg font-semibold text-gray-900">How fast you’re moving matters a lot</p>
              <p>
                This part of physics just describes <strong>how things move</strong>, not why. In cars, it’s
                mostly about speed, acceleration, and how long it takes to stop.
              </p>

              <div className="bg-blue-50 p-5 rounded-xl space-y-4">
                <div>
                  <p className="font-bold text-blue-900 mb-2">The main equations:</p>
                  <div className="space-y-2 font-mono text-sm bg-white p-3 rounded border-l-4 border-blue-500">
                    <div><strong>Velocity:</strong> v = Δd / Δt</div>
                    <div><strong>Acceleration:</strong> a = Δv / Δt</div>
                    <div><strong>Position:</strong> d = v₀t + ½at²</div>
                    <div><strong>Final speed:</strong> v² = v₀² + 2ad</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 p-5 rounded-xl border-l-4 border-red-500">
                <p className="font-bold text-red-900 mb-3">Stopping distance gets crazy fast</p>
                <p className="text-sm mb-3">
                  The distance needed to stop doesn’t increase normally with speed — it goes with <strong>speed squared</strong>.
                  So going “just a bit faster” is actually a huge deal.
                </p>

                <div className="bg-white p-4 rounded-lg space-y-2 text-sm">
                  <div className="flex justify-between items-center py-1 border-b">
                    <span className="font-semibold">30 km/h:</span>
                    <span>~6 m</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b">
                    <span className="font-semibold">60 km/h:</span>
                    <span>~24 m (4× longer)</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b">
                    <span className="font-semibold">90 km/h:</span>
                    <span>~54 m (9× longer)</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="font-semibold">120 km/h:</span>
                    <span>~96 m (16× longer)</span>
                  </div>
                </div>

                <p className="text-xs mt-3 text-gray-600">
                  Doubling your speed means you need about <strong>4× more distance</strong> to stop.
                </p>
              </div>

              <p className="text-sm bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-500">
                This is exactly why speed limits exist, especially near schools and neighborhoods.
              </p>
            </div>
          </div>

          <div className="fade-in-section bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow border border-blue-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-green-100 rounded-xl">
                <Activity className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Forces</h3>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg font-semibold text-gray-900">Why things move (or don’t)</p>
              <p>
                This is where Newton comes in. Basically, everything you do in a car follows his three laws.
              </p>

              <div className="space-y-4">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border-l-4 border-green-500">
                  <p className="font-bold text-green-900 mb-2">Inertia</p>
                  <p className="text-sm">
                    When the car stops, your body wants to keep going. That’s inertia. Seatbelts exist
                    to stop you from continuing forward into the dashboard.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-xl border-l-4 border-blue-500">
                  <p className="font-bold text-blue-900 mb-2">F = ma</p>
                  <p className="text-sm">
                    More force means more acceleration. More mass means you need more force.
                    This explains engines, braking, and why heavy cars feel slower.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-xl border-l-4 border-purple-500">
                  <p className="font-bold text-purple-900 mb-2">Action and reaction</p>
                  <p className="text-sm">
                    Your tires push the road backward, and the road pushes the car forward. No grip = no movement.
                  </p>
                </div>

                <div className="bg-red-50 p-5 rounded-xl">
                  <p className="font-bold text-red-900 mb-2">Friction is everything</p>
                  <p className="text-sm">
                    Friction is what lets you speed up, slow down, and turn. Rain or ice ruins that,
                    which is why wet roads are avoided.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="fade-in-section bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow border border-blue-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-yellow-100 rounded-xl">
                <Zap className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Electric Cars</h3>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg font-semibold text-gray-900">How EVs actually move</p>
              <p>
                Instead of explosions, electric cars use magnets and electricity to spin the wheels.
              </p>

              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-5 rounded-xl border-l-4 border-yellow-500">
                <p className="font-bold text-gray-900 mb-3">The simple version:</p>
                <div className="space-y-3 text-sm">
                  <p>Electricity makes magnetic fields.</p>
                  <p>Magnetic fields create forces.</p>
                  <p>Those forces spin the motor.</p>
                </div>
              </div>

              <div className="bg-green-50 p-5 rounded-xl">
                <p className="font-bold text-green-900 mb-2">Why EVs are so good:</p>
                <ul className="text-sm space-y-2">
                  <li>• Instant acceleration</li>
                  <li>• Way more efficient</li>
                  <li>• Can recharge while braking</li>
                  <li>• Fewer parts to break</li>
                </ul>
              </div>

              <p className="text-xs bg-blue-50 p-3 rounded">
                Energy goes: Battery → Electricity → Magnetism → Motion
              </p>
            </div>
          </div>

          <div className="fade-in-section bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow border border-blue-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-pink-100 rounded-xl">
                <Waves className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Sound & Light</h3>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg font-semibold text-gray-900">How cars see and communicate</p>
              <p>
                Cars use waves all the time — for sound, lights, sensors, and warnings.
              </p>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-pink-50 to-red-50 p-5 rounded-xl border-l-4 border-pink-500">
                  <p className="font-bold text-pink-900 mb-3">Sound</p>
                  <p className="text-sm">
                    Engines, horns, and sirens are all vibrations moving through air. Higher RPM = higher pitch.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-5 rounded-xl border-l-4 border-yellow-500">
                  <p className="font-bold text-yellow-900 mb-3">Light</p>
                  <p className="text-sm">
                    Headlights, brake lights, and signals are all just light waves. Mirrors work by reflection.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-xl">
                <p className="font-bold text-blue-900 mb-2 text-sm">Waves are described by:</p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-white p-2 rounded">Frequency</div>
                  <div className="bg-white p-2 rounded">Wavelength</div>
                  <div className="bg-white p-2 rounded">Amplitude</div>
                  <div className="bg-white p-2 rounded">Intensity</div>
                </div>
                <p className="text-xs mt-2 font-mono bg-white p-2 rounded">
                  v = f × λ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
