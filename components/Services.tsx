
import React, { useRef, useEffect } from 'react';
import { Cpu, FileText, Video, Globe, Smartphone, Sparkles, Share2 } from 'lucide-react';
import { ServiceCardProps } from '../types';

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, visual }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card || window.matchMedia("(hover: none)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      if (innerRef.current) {
        innerRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
    };

    const handleMouseLeave = () => {
      if (innerRef.current) {
        innerRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
      }
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={cardRef} className="perspective-1000 group h-auto min-h-[400px] md:h-[450px] w-full cursor-none hover-trigger">
      <div 
        ref={innerRef}
        className="relative w-full h-full border border-white/10 rounded-2xl p-6 md:p-10 flex flex-col justify-between shadow-2xl overflow-hidden bg-brand-gray bg-noise transition-transform duration-500 preserve-3d"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
        
        <div className="relative z-10 w-full mb-6 transform translate-z-10">
          {visual}
        </div>

        <div className="relative z-10 transform translate-z-20">
          <h3 className="text-2xl md:text-3xl font-medium font-display mb-2 tracking-tight">{title}</h3>
          <p className="text-brand-yellow/70 text-sm md:text-base leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-[#050509] border-t border-white/5 pt-16 md:pt-40 px-4 md:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Sticky Header */}
          <div className="lg:sticky lg:top-32 h-fit mb-12 lg:mb-0">
            <h2 className="text-4xl md:text-6xl font-medium font-display mb-8 leading-tight">
              Our <br />Expertise
            </h2>
            <p className="text-lg text-brand-yellow/80 max-w-md mb-12">
              We engineer AI-driven systems that automate execution, reduce dependency on people, and scale operations with precision.
            </p>
            <ul className="space-y-4">
              {['Content System Architecture', 'AI Repurposing Engines', 'Distribution Automation'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-brand-yellow font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Scrolling Cards */}
          <div className="flex flex-col gap-12 pb-16 md:pb-32">
            <ServiceCard 
              title="Content System Architecture"
              description="We design the end-to-end AI architecture that converts raw content into structured, repeatable, and scalable media workflows."
              visual={
                <div className="w-full h-48 md:h-64 rounded-xl border border-white/10 bg-brand-dark/50 backdrop-blur-sm overflow-hidden flex items-center justify-center p-8 relative">
                  <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '20px 20px'}} />
                  <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col gap-8">
                      <div className="p-2 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-400"><FileText size={20} /></div>
                      <div className="p-2 bg-purple-500/10 border border-purple-500/30 rounded-lg text-purple-400"><Video size={20} /></div>
                    </div>
                    <div className="relative">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-brand-yellow/20 to-brand-dark border border-brand-yellow/40 flex items-center justify-center animate-pulse">
                        <Cpu className="text-brand-yellow" size={24} />
                      </div>
                    </div>
                    <div className="flex flex-col gap-8">
                      <div className="p-2 bg-white/5 border border-white/10 rounded-full text-white/40"><Globe size={20} /></div>
                      <div className="p-2 bg-white/5 border border-white/10 rounded-full text-white/40"><Smartphone size={20} /></div>
                    </div>
                  </div>
                </div>
              }
            />
            <ServiceCard 
              title="AI Repurposing Engine"
              description="A modular AI system that creates short-form videos, carousels, posts, and captions automatically from long-form sources."
              visual={
                <div className="w-full h-48 md:h-64 rounded-xl border border-white/10 bg-brand-dark/50 backdrop-blur-sm overflow-hidden p-6 font-mono text-[10px]">
                   <div className="flex justify-between items-center mb-6 text-white/30 border-b border-white/5 pb-2">
                     <span>engine.py</span>
                     <div className="flex gap-1.5">
                       <div className="w-2 h-2 rounded-full bg-red-500/20 border border-red-500/50" />
                       <div className="w-2 h-2 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                       <div className="w-2 h-2 rounded-full bg-green-500/20 border border-green-500/50" />
                     </div>
                   </div>
                   <div className="flex flex-col gap-4">
                     <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-brand-yellow/10 flex items-center justify-center text-brand-yellow animate-pulse">
                          <Sparkles size={14} />
                        </div>
                        <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-brand-yellow w-3/4" />
                        </div>
                        <span className="text-brand-yellow">PROCESSING</span>
                     </div>
                     <div className="p-3 bg-white/5 border border-white/10 rounded-lg text-white/40">
                        &gt; Initializing neural repurposing...<br />
                        &gt; Found 12 engagement-rich hooks<br />
                        &gt; Generating vertical edits...
                     </div>
                   </div>
                </div>
              }
            />
            <ServiceCard 
              title="Distribution & Publishing"
              description="Automated scheduling and multi-platform publishing that ensures your content reaches the right audience at peak times."
              visual={
                <div className="w-full h-48 md:h-64 rounded-xl border border-white/10 bg-brand-dark/50 backdrop-blur-sm overflow-hidden flex items-center justify-center relative">
                   <div className="absolute inset-0 flex items-center justify-center opacity-10">
                     <div className="w-64 h-64 border border-white rounded-full animate-ping" />
                     <div className="w-48 h-48 border border-white rounded-full absolute" />
                   </div>
                   <div className="grid grid-cols-2 gap-12 relative z-10">
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center justify-center text-green-400">
                          <Share2 size={24} />
                        </div>
                        <span className="text-[10px] text-white/40 tracking-widest uppercase">Global Publish</span>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                         <div className="text-2xl font-bold font-display text-white">12.4M</div>
                         <span className="text-[10px] text-brand-yellow/60 tracking-widest uppercase">Reach Sync</span>
                      </div>
                   </div>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
