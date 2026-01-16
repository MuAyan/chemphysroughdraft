import { Beaker, Flame, Wind, Droplets, Atom } from 'lucide-react';

export default function ChemistrySection() {
  return (
    <section id="chemistry" className="min-h-screen py-32 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 fade-in-section">
          <div className="inline-block p-4 bg-orange-100 rounded-2xl mb-6">
            <Beaker className="w-12 h-12 text-orange-600" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Chemistry of Cars
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How fuel, air, and materials all work together to make a car run
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Combustion */}
          <div className="fade-in-section bg-white rounded-3xl p-8 shadow-xl border border-orange-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-red-100 rounded-xl">
                <Flame className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Chemical Reactions</h3>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg font-semibold text-gray-900">Combustion in the Engine</p>
              <p>
                Cars get their energy from burning fuel. This is called <strong>combustion</strong>.
                When gasoline reacts with oxygen, it releases energy in the form of heat, which is what
                makes the engine work.
              </p>

              <div className="bg-red-50 p-4 rounded-xl border-l-4 border-red-500 font-mono text-sm">
                2C₈H₁₈ + 25O₂ → 16CO₂ + 18H₂O + Energy
              </div>

              <p>
                This reaction happens many times every minute inside the engine. Each time it happens,
                the hot gases push a piston down, and this helps turn the wheels.
              </p>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Breaking chemical bonds needs energy</li>
                <li>Making new bonds releases energy</li>
                <li>More energy is released than used, so the engine gets power</li>
                <li>The inside of the engine gets extremely hot</li>
              </ul>
            </div>
          </div>

          {/* Stoichiometry */}
          <div className="fade-in-section bg-white rounded-3xl p-8 shadow-xl border border-orange-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Atom className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Stoichiometry</h3>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg font-semibold text-gray-900">Getting the Air–Fuel Ratio Right</p>
              <p>
                For fuel to burn properly, it needs the right amount of air. In most cars, the ideal
                ratio is about <strong>14.7 parts air to 1 part fuel</strong>.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl space-y-3">
                <p><strong>Too much fuel:</strong> Some fuel doesn’t burn and is wasted.</p>
                <p><strong>Too much air:</strong> The engine can lose power and run hotter.</p>
                <p><strong>Right amount:</strong> The fuel burns properly and the engine works efficiently.</p>
              </div>

              <p>
                Modern cars use sensors and computers to keep adjusting this ratio while you drive so
                the engine always runs as well as possible.
              </p>
            </div>
          </div>

          {/* Gases */}
          <div className="fade-in-section bg-white rounded-3xl p-8 shadow-xl border border-orange-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-purple-100 rounded-xl">
                <Wind className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Gases and Pressure</h3>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg font-semibold text-gray-900">How Heat Turns into Force</p>
              <p>
                When fuel burns, it creates very hot gases. These gases expand and push against the
                piston inside the engine.
              </p>

              <div className="bg-purple-50 p-4 rounded-xl text-sm font-mono">
                PV = nRT
              </div>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The temperature increases a lot</li>
                <li>The gas particles move faster</li>
                <li>Pressure builds up inside the cylinder</li>
                <li>This pressure pushes the piston down</li>
              </ul>

              <p>
                This is how heat energy from burning fuel turns into motion that moves the car.
              </p>
            </div>
          </div>

          {/* Materials */}
          <div className="fade-in-section bg-white rounded-3xl p-8 shadow-xl border border-orange-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-green-100 rounded-xl">
                <Droplets className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Properties of Materials</h3>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg font-semibold text-gray-900">Why the Right Materials Matter</p>
              <p>
                Gasoline evaporates easily, which is important because fuel has to mix with air before
                it can burn properly.
              </p>

              <div className="bg-green-50 p-4 rounded-xl">
                <p className="font-semibold mb-2">Why engines use different metals:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>Aluminum:</strong> Light and good at getting rid of heat</li>
                  <li><strong>Steel:</strong> Very strong and used in parts that take a lot of force</li>
                  <li><strong>Cast iron:</strong> Wears slowly and handles heat well</li>
                </ul>
              </div>

              <p>
                Different materials are chosen based on strength, weight, and how they handle heat.
              </p>
            </div>
          </div>
        </div>

        {/* Coolant */}
        <div className="fade-in-section bg-gradient-to-br from-cyan-600 to-blue-700 rounded-3xl p-10 shadow-2xl text-white">
          <h3 className="text-4xl font-bold mb-6">Coolant and Antifreeze</h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-lg">
                Engine coolant is a mix of water and antifreeze. This mixture helps stop the engine from
                freezing in winter and overheating in summer.
              </p>

              <div className="bg-white/10 p-5 rounded-xl">
                <p className="font-bold mb-3">Why mix them?</p>
                <p>• It lowers the freezing point so the engine doesn’t crack</p>
                <p>• It raises the boiling point so the coolant doesn’t boil</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white/10 p-5 rounded-xl">
                <p className="font-bold mb-3">Getting the mix right:</p>
                <p>• Too much water = not enough protection</p>
                <p>• Too much antifreeze = worse cooling</p>
                <p>• About 50/50 = works best</p>
              </div>

              <p className="text-sm">
                Coolant also has chemicals in it that stop rust and protect the engine over time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
