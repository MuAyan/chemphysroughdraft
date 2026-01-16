import { Car, Beaker, Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Car className="w-6 h-6" />
              <span className="font-bold text-xl">The Science Behind Cars</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              This site explains how physics and chemistry are actually used in cars,
              from how engines work to how braking and safety systems are designed.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Beaker className="w-5 h-5" />
              Chemistry Topics
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• Combustion and chemical reactions</li>
              <li>• Air-fuel ratios and stoichiometry</li>
              <li>• Gas laws and how pressure works</li>
              <li>• Materials used in cars</li>
              <li>• Coolants and other fluids</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Physics Topics
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• Motion and kinematics</li>
              <li>• Forces and Newton’s laws</li>
              <li>• Momentum and collisions</li>
              <li>• Electric motors</li>
              <li>• Sound and light in cars</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="text-gray-400 text-sm mb-2">
            Grade 11 Physics and Chemistry Final Project
          </p>
          <p className="text-gray-500 text-xs">
            This website was made to show how the stuff we learn in class actually applies to real life. 
            Brought to you by Ayan Atif
          </p>
        </div>
      </div>
    </footer>
  );
}
