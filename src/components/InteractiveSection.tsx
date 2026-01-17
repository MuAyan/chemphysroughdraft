import { useState, useEffect } from 'react';
import { Activity, Droplets } from 'lucide-react';

export default function InteractiveSection() {
  const [speed, setSpeed] = useState(60);
  const [roadCondition, setRoadCondition] = useState<'dry' | 'wet'>('dry');
  const [pistonPosition, setPistonPosition] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const calculateBrakingDistance = (speedKmh: number, condition: 'dry' | 'wet') => {
    const speedMs = speedKmh / 3.6;
    const deceleration = condition === 'dry' ? 7 : 3.5;
    const reactionTime = 1.5;
    const reactionDistance = speedMs * reactionTime;
    const brakingDistance = (speedMs * speedMs) / (2 * deceleration);
    return {
      total: (reactionDistance + brakingDistance).toFixed(1),
      reaction: reactionDistance.toFixed(1),
      braking: brakingDistance.toFixed(1)
    };
  };

  const distances = calculateBrakingDistance(speed, roadCondition);

  useEffect(() => {
    let animationFrame: number;
    let startTime: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      const position = ((elapsed % 2000) / 2000) * 100;

      if (position < 25) {
        setPistonPosition(position * 4);
      } else if (position < 50) {
        setPistonPosition(100);
      } else if (position < 75) {
        setPistonPosition(100 - ((position - 50) * 4));
      } else {
        setPistonPosition(0);
      }

      if (isAnimating) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    if (isAnimating) {
      animationFrame = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isAnimating]);

  return (
    <section id="interactive" className="min-h-screen py-32 bg-gradient-to-b from-gray-100 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 fade-in-section">
          <div className="inline-block p-4 bg-green-100 rounded-2xl mb-6">
            <Activity className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Interactive Demonstrations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the physics and chemistry principles in action
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="fade-in-section bg-white rounded-3xl p-8 shadow-2xl border border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Activity className="w-8 h-8 text-blue-600" />
              </div>
              Braking Distance Calculator
            </h3>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-lg font-semibold text-gray-700">Speed</label>
                  <span className="text-3xl font-bold text-blue-600">{speed} km/h</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="140"
                  step="10"
                  value={speed}
                  onChange={(e) => setSpeed(Number(e.target.value))}
                  className="w-full h-3 bg-blue-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>20 km/h</span>
                  <span>140 km/h</span>
                </div>
              </div>

              <div>
                <label className="text-lg font-semibold text-gray-700 mb-3 block">Road Condition</label>
                <div className="flex gap-4">
                  <button
                    onClick={() => setRoadCondition('dry')}
                    className={`flex-1 py-4 px-6 rounded-xl font-semibold transition-all ${
                      roadCondition === 'dry'
                        ? 'bg-yellow-500 text-white shadow-lg scale-105'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    ☀️ Dry Road
                  </button>
                  <button
                    onClick={() => setRoadCondition('wet')}
                    className={`flex-1 py-4 px-6 rounded-xl font-semibold transition-all ${
                      roadCondition === 'wet'
                        ? 'bg-blue-500 text-white shadow-lg scale-105'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <Droplets className="inline w-5 h-5 mr-1" />
                    Wet Road
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-2xl border-2 border-red-200">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Total Stopping Distance</h4>
                <p className="text-5xl font-bold text-red-600 mb-4">{distances.total}m</p>

                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="font-semibold text-gray-700">Reaction Distance:</span>
                    <span className="text-xl font-bold text-blue-600">{distances.reaction}m</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="font-semibold text-gray-700">Braking Distance:</span>
                    <span className="text-xl font-bold text-orange-600">{distances.braking}m</span>
                  </div>
                </div>

                <div className="mt-4 text-sm text-gray-600 bg-white p-3 rounded-lg">
                  <p className="font-semibold mb-1">Formula Used:</p>
                  <p className="font-mono text-xs">d = v₀t + v²/(2a)</p>
                  <p className="text-xs mt-2">
                    {roadCondition === 'dry'
                      ? 'Dry road: ~0.7 friction coefficient, 7 m/s² deceleration'
                      : 'Wet road: ~0.35 friction coefficient, 3.5 m/s² deceleration'}
                  </p>
                </div>
              </div>

              <div className="relative h-24 bg-gray-200 rounded-xl overflow-hidden">
                <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 to-yellow-400"
                     style={{ width: `${(parseFloat(distances.reaction) / parseFloat(distances.total)) * 100}%` }}>
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
                    Reaction
                  </span>
                </div>
                <div className="absolute top-0 h-full bg-gradient-to-r from-orange-400 to-red-500"
                     style={{
                       left: `${(parseFloat(distances.reaction) / parseFloat(distances.total)) * 100}%`,
                       width: `${(parseFloat(distances.braking) / parseFloat(distances.total)) * 100}%`
                     }}>
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
                    Braking
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="fade-in-section bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl text-white">
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <div className="p-2 bg-orange-500/20 backdrop-blur-sm rounded-lg">
                <Activity className="w-8 h-8 text-orange-400" />
              </div>
              Piston Animation
            </h3>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Watch how combustion gases push the piston down in the cylinder, converting chemical energy
              into mechanical motion. This demonstrates the principles of gas expansion and pressure.
            </p>

            <div className="bg-slate-700/50 backdrop-blur-sm p-8 rounded-2xl mb-6 border border-slate-600">
              <div className="relative">
                <div className="flex items-end justify-center gap-8">
                  <div className="relative">
                    <div className="w-32 h-64 bg-gradient-to-b from-slate-600 to-slate-700 rounded-t-3xl border-4 border-slate-500 overflow-hidden relative">
                      <div
                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-orange-500 via-red-500 to-yellow-400 transition-all duration-100"
                        style={{ height: `${pistonPosition}%` }}
                      >
                        <div className="absolute inset-0 opacity-50 animate-pulse">
                          {isAnimating && (
                            <>
                              <div className="absolute w-2 h-2 bg-white rounded-full animate-ping" style={{ top: '20%', left: '30%' }} />
                              <div className="absolute w-2 h-2 bg-white rounded-full animate-ping" style={{ top: '40%', left: '60%', animationDelay: '0.2s' }} />
                              <div className="absolute w-2 h-2 bg-white rounded-full animate-ping" style={{ top: '30%', left: '45%', animationDelay: '0.4s' }} />
                            </>
                          )}
                        </div>
                      </div>

                      <div
                        className="absolute left-0 right-0 bg-gradient-to-b from-slate-400 to-slate-500 border-t-4 border-slate-600 transition-all duration-100"
                        style={{
                          bottom: `${pistonPosition}%`,
                          height: '40px'
                        }}
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-xs font-bold">PISTON</div>
                        </div>
                      </div>
                    </div>

                    <div className="text-center mt-3">
                      <div className="text-sm font-semibold text-gray-400">Cylinder</div>
                    </div>
                  </div>

                  <div className="text-left space-y-2 max-w-xs">
                    <div className="bg-orange-500/20 backdrop-blur-sm p-3 rounded-lg border border-orange-500/30">
                      <p className="text-xs font-semibold text-orange-300 mb-1">Combustion Gases</p>
                      <p className="text-xs text-gray-300">Hot gases expand, creating pressure</p>
                    </div>
                    <div className="bg-blue-500/20 backdrop-blur-sm p-3 rounded-lg border border-blue-500/30">
                      <p className="text-xs font-semibold text-blue-300 mb-1">Piston Movement</p>
                      <p className="text-xs text-gray-300">Pressure pushes piston down</p>
                    </div>
                    <div className="bg-green-500/20 backdrop-blur-sm p-3 rounded-lg border border-green-500/30">
                      <p className="text-xs font-semibold text-green-300 mb-1">4-Stroke Cycle</p>
                      <p className="text-xs text-gray-300">Intake → Compression → Power → Exhaust</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                onClick={() => setIsAnimating(!isAnimating)}
                className={`px-8 py-4 rounded-xl font-bold text-lg transition-all ${
                  isAnimating
                    ? 'bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/50'
                    : 'bg-green-500 hover:bg-green-600 shadow-lg shadow-green-500/50'
                }`}
              >
                {isAnimating ? '⏸️ Pause Animation' : '▶️ Start Animation'}
              </button>
            </div>

            <div className="mt-6 bg-slate-700/30 backdrop-blur-sm p-5 rounded-xl border border-slate-600">
              <p className="text-sm font-semibold mb-2 text-yellow-300">Physics in Action:</p>
              <ul className="text-xs space-y-1 text-gray-300">
                <li>• <strong>PV = nRT:</strong> Gas pressure increases with temperature</li>
                <li>• <strong>Force = Pressure × Area:</strong> High pressure creates large force on piston</li>
                <li>• <strong>Work = Force × Distance:</strong> Piston motion does work to turn crankshaft</li>
                <li>• <strong>Energy Conversion:</strong> Chemical → Thermal → Mechanical</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="fade-in-section bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-10 shadow-2xl text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Understanding Through Interaction</h3>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            These interactive demonstrations show how the abstract concepts from physics and chemistry
            directly apply to real-world driving situations. The braking distance calculator reveals the
            critical importance of speed and road conditions, while the piston animation visualizes the
            energy transformations that power every journey.
          </p>
          <div className="mt-8 inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
            <p className="text-sm font-semibold">Science in Motion: Theory Meets Practice</p>
          </div>
        </div>
      </div>
    </section>
  );
}
