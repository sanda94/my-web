
import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { TestimonialProps } from '../types';

const TestimonialCard: React.FC<TestimonialProps> = ({ videoSrc, poster, avatar, name, role, offset }) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = React.useState(true);

  return (
    <div 
      className={`group relative rounded-2xl overflow-hidden aspect-[9/16] border border-white/10 bg-brand-gray transition-transform duration-500 hover:-translate-y-2 cursor-none view-trigger
        ${offset ? 'md:-mt-12' : ''}
      `}
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => {
        videoRef.current?.pause();
        if (videoRef.current) videoRef.current.currentTime = 0;
      }}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        poster={poster}
        muted={isMuted}
        loop
        playsInline
        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
      />
      
      <button 
        className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all hover:scale-110 pointer-events-auto"
        onClick={(e) => { e.stopPropagation(); setIsMuted(!isMuted); }}
      >
        {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
      </button>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20">
        <div className="flex items-center gap-4 border-t border-white/10 pt-4">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20">
            <img src={avatar} alt={name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
          </div>
          <div>
            <div className="text-sm font-medium text-white">{name}</div>
            <div className="text-[10px] uppercase tracking-wider text-brand-yellow">{role}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const stories: TestimonialProps[] = [
    {
      videoSrc: "https://cdn.coverr.co/videos/coverr-people-working-in-office-4566/1080p.mp4",
      poster: "https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=800&q=80",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
      name: "Brad Gains",
      role: "Global Creator"
    },
    {
      videoSrc: "https://pub-21eb86ee9a1c403b9a6b04eaab4c3966.r2.dev/Chris%20Testimonial%20.mp4",
      poster: "https://images.unsplash.com/photo-1522071823991-b9671f9d7f1f?w=800&q=80",
      avatar: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7ca4f769-07d3-4430-bcc9-32949b6c22a5_320w.jpg",
      name: "Chris Cordero",
      role: "Performance Marketer",
      offset: true
    },
    {
      videoSrc: "https://cdn.coverr.co/videos/coverr-woman-working-on-her-laptop-328/1080p.mp4",
      poster: "https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=800&q=80",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&q=80",
      name: "David K.",
      role: "CEO, Orbit Inc."
    }
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 px-4 md:px-6 bg-brand-dark border-t border-white/10 relative">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-7xl font-display font-medium mb-6 tracking-tight">Client Stories</h2>
          <p className="uppercase text-xs text-brand-yellow tracking-[0.3em] font-medium">Results Driven Automation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((s, i) => (
            <TestimonialCard key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
