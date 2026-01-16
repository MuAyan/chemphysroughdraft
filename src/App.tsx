import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ChemistrySection from './components/ChemistrySection';
import PhysicsSection from './components/PhysicsSection';
import SafetySection from './components/SafetySection';
import InteractiveSection from './components/InteractiveSection';
import Conclusion from './components/Conclusion';
import Sources from './components/Sources';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in-section').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <ChemistrySection />
      <PhysicsSection />
      <SafetySection />
      <InteractiveSection />
      <Conclusion />
      <Sources />
      <Footer />
    </div>
  );
}

export default App;
