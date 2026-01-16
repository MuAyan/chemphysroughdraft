import { useState, useEffect } from 'react';
import { Car } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl">
          <Car className={`w-6 h-6 ${scrolled ? 'text-blue-600' : 'text-white'}`} />
          <span className={`${scrolled ? 'text-gray-900' : 'text-white'}`}>
            The Science Behind Cars
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['home', 'chemistry', 'physics', 'safety', 'interactive', 'conclusion', 'sources'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`capitalize font-medium transition-colors hover:text-blue-600 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {section === 'sources' ? 'Sources' : section}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
