
import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkGrid from './components/WorkGrid';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Sync ScrollTrigger with Lenis
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    return () => {
      lenis.destroy();
      gsap.ticker.remove(raf);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative bg-brand-dark min-h-screen">
      <Cursor />
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 w-full h-full bg-noise opacity-[0.03]"></div>
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-yellow-500/[0.02] blur-[150px] rounded-full"></div>
      </div>

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <WorkGrid />
        <Services />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
};

export default App;
