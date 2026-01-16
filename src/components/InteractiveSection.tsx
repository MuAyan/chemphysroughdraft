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
            Try It Yourself
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These tools let you actually see how the physics and chemistry behind cars work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="fade-in-section bg-white rounded-3xl p-8 shadow-2xl border border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Activity className="w-8 h-8 text-blue-600" />
              </div>
              Braking Distance Simulator
            </h3>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-lg font-semibold text-gray-700">Car Speed</label>
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
                <label className="text-lg font-semibold text-gray-700 mb-3 block">Road Conditions</label>
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
                <h4 className="text-xl font-bold text-gray-900 mb-4">How Long It Takes to Stop</h4>
                <p className="text-5xl font-bold text-red-600 mb-4">{distances.total} m</p>

                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="font-semibold text-gray-700">Thinking Distance:</span>
                    <span className="text-xl font-bold text-blue-600">{distances.reaction} m</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="font-semibold text-gray-700">Braking Distance:</span>
                    <span className="text-xl font-bold text-orange-600">{distances.braking} m</span>
                  </div>
                </div>

                <div className="mt-4 text-sm text-gray-600 bg-white p-3 rounded-lg">
                  <p className="font-semibold mb-1">Formula Used:</p>
                  <p className="font-mono text-xs">d = v₀t + v² / (2a)</p>
                  <p className="text-xs mt-2">
                    {roadCondition === 'dry'
                      ? 'Dry road has more friction, so the car slows down faster.'
                      : 'Wet road has less friction, so it takes longer to stop.'}
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
              How an Engine Piston Moves
            </h3>

            <p className="text-gray-300 mb-6 leading-relaxed">
              This shows what happens inside an engine cylinder. When fuel burns, hot gases expand and push
              the piston down. That motion is what eventually turns the wheels of the car.
            </p>

            <div className="flex justify-center">
              <button
                onClick={() => setIsAnimating(!isAnimating)}
                className={`px-8 py-4 rounded-xl font-bold text-lg transition-all ${
                  isAnimating
                    ? 'bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/50'
                    : 'bg-green-500 hover:bg-green-600 shadow-lg shadow-green-500/50'
                }`}
              >
                {isAnimating ? '⏸️ Pause' : '▶️ Start'}
              </button>
            </div>

            <div className="mt-6 bg-slate-700/30 backdrop-blur-sm p-5 rounded-xl border border-slate-600">
              <p className="text-sm font-semibold mb-2 text-yellow-300">What’s happening here:</p>
              <ul className="text-xs space-y-1 text-gray-300">
                <li>• Burning fuel makes hot gas that expands</li>
                <li>• Expanding gas creates pressure</li>
                <li>• Pressure pushes the piston down</li>
                <li>• This turns chemical energy into motion</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="fade-in-section bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-10 shadow-2xl text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Why This Matters</h3>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            These simulations show that the stuff we learn in class actually explains how cars work in real life.
            Speed, friction, pressure, and energy aren’t just formulas — they decide how fast a car stops and
            how the engine even moves the car in the first place.
          </p>
          <div className="mt-8 inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
            <p className="text-sm font-semibold">Real physics. Real chemistry. Real cars.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
