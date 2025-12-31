
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const headingRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    // Text Reveal Animation
    headingRefs.current.forEach((el, i) => {
      if (el) {
        gsap.to(el, {
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.5 + i * 0.1
        });
      }
    });

    // Canvas Streams Animation
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width: number, height: number;
    let streams: any[] = [];
    const gap = 40;

    class Stream {
      x: number;
      y: number;
      speed: number;
      length: number;
      opacity: number;

      constructor(x: number) {
        this.x = x;
        this.y = Math.random() * window.innerHeight;
        this.speed = Math.random() * 2 + 0.5;
        this.length = Math.random() * 100 + 50;
        this.opacity = Math.random() * 0.3 + 0.05;
      }

      update() {
        this.y -= this.speed;
        if (this.y + this.length < 0) {
          this.y = height + Math.random() * 100;
          this.speed = Math.random() * 2 + 0.5;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.strokeStyle = `rgba(255, 255, 255, 0.03)`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(this.x, 0);
        ctx.lineTo(this.x, height);
        ctx.stroke();

        const gradient = ctx.createLinearGradient(this.x, this.y, this.x, this.y + this.length);
        gradient.addColorStop(0, `rgba(255, 255, 255, 0)`);
        gradient.addColorStop(0.5, `rgba(255, 255, 255, ${this.opacity})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(this.x - 1, this.y, 3, this.length);
      }
    }

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      streams = [];
      for (let x = gap / 2; x < width; x += gap) {
        streams.push(new Stream(x));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      streams.forEach(s => {
        s.update();
        s.draw(ctx);
      });
      requestAnimationFrame(animate);
    };

    window.addEventListener('resize', init);
    init();
    animate();

    return () => window.removeEventListener('resize', init);
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden px-6">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-40 pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/80 pointer-events-none" />

      <div className="relative z-10 text-center max-w-[1400px]">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 md:mb-12 hover-trigger">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
          <span className="text-[10px] uppercase font-medium tracking-[0.2em] text-yellow-300">Global AI Agency</span>
        </div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-[7.5rem] font-medium tracking-tighter leading-[0.95] mb-8 md:mb-12 mix-blend-difference text-white">
          {/* Fix: Wrapped ref assignments in curly braces to ensure the callback returns void. */}
          <span className="mask-text"><span ref={(el) => { headingRefs.current[0] = el; }}>AI</span></span>
          <span className="mask-text"><span ref={(el) => { headingRefs.current[1] = el; }} className="text-brand-yellow">SYSTEM</span></span>
          <span className="mask-text"><span ref={(el) => { headingRefs.current[2] = el; }}>ENGINEERED</span></span>
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl mx-auto mt-8 md:mt-12 border-t border-white/10 pt-8 animate-fade-up">
          <p className="text-sm text-yellow-400 text-center md:text-left max-w-xs mb-8 md:mb-0">
            We automate content, workflows, and decision-making so your business scales without adding headcount.
          </p>
          <div className="flex gap-12">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold font-display">150+</div>
              <div className="text-[10px] uppercase tracking-widest text-brand-yellow/60">Videos Engineered</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold font-display">10M+</div>
              <div className="text-[10px] uppercase tracking-widest text-brand-yellow/60">Views Generated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
