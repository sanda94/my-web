
import React, { useRef } from 'react';
import { Volume2, VolumeX, Eye, Clock } from 'lucide-react';
import { VideoCardProps } from '../types';

const VideoCard: React.FC<VideoCardProps> = ({ src, title, views, duration, tag, color, poster }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = React.useState(true);

  const handleMouseEnter = () => {
    videoRef.current?.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    videoRef.current?.pause();
    if (videoRef.current) videoRef.current.currentTime = 0;
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  const colorClasses = {
    yellow: 'hover:shadow-[0_0_40px_-10px_rgba(234,179,8,0.3)] hover:border-yellow-500/50',
    blue: 'hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)] hover:border-blue-500/50',
    purple: 'hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.3)] hover:border-purple-500/50'
  };

  const badgeColors = {
    yellow: 'bg-yellow-500',
    blue: 'bg-blue-500',
    purple: 'bg-purple-500'
  };

  return (
    <div 
      className={`group relative aspect-[9/16] rounded-2xl overflow-hidden bg-brand-gray border border-white/10 transition-all duration-500 hover:-translate-y-2 cursor-none view-trigger ${colorClasses[color]}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted={isMuted}
        loop
        playsInline
        className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />

      {/* Controls */}
      <div className="absolute top-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
        <button 
          onClick={toggleMute}
          className="p-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-black/60 transition-all pointer-events-auto"
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      </div>

      <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
        <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${badgeColors[color]}`} />
        <span className="text-[10px] font-mono font-medium text-white/90 tracking-wider uppercase">{tag}</span>
      </div>

      <div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-display font-medium text-white">{title}</h3>
          <div className="h-[1px] w-full bg-white/10 group-hover:bg-white/20 transition-colors" />
          <div className="flex justify-between items-center text-[11px] text-white/50 font-mono">
            <span className="flex items-center gap-1.5"><Clock size={10} /> {duration}</span>
            <span className="flex items-center gap-1.5"><Eye size={10} /> {views} Views</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const WorkGrid: React.FC = () => {
  const projects: VideoCardProps[] = [
    {
      src: "https://pub-21eb86ee9a1c403b9a6b04eaab4c3966.r2.dev/Hook%202%20CTA%201.mp4",
      title: "Viral Performance Cuts",
      views: "1.2M",
      duration: "0:42s",
      tag: "Conversion",
      color: "yellow"
    },
    {
      src: "https://pub-21eb86ee9a1c403b9a6b04eaab4c3966.r2.dev/REPLIT%202nd%20video.mp4",
      title: "Developer Workflows",
      views: "850K",
      duration: "0:15s",
      tag: "Education",
      color: "blue",
      poster: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/Screenshot%202025-12-25%20at%204.43.41%E2%80%AFAM.png"
    },
    {
      src: "https://pub-21eb86ee9a1c403b9a6b04eaab4c3966.r2.dev/AQOziJ--1xHV_dUDZ-djLXQQU5z5_FK-z-4ZuPaE3NUgSWv_pxH7cVJuozuxw1UMBhjNSKWRH3DNmIFZMrqgX5BxS2hAm55jfpmIghU.mp4",
      title: "Founder Narrative",
      views: "2.4M",
      duration: "1:00m",
      tag: "Storytelling",
      color: "purple"
    }
  ];

  return (
    <section id="work" className="py-20 md:py-32 px-4 md:px-6 bg-brand-dark border-t border-white/5 relative">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-3xl md:text-6xl font-display font-medium mb-6">Generated Outputs</h2>
            <p className="text-lg text-brand-yellow/80 max-w-lg">
              AI-generated assets that maintain brand consistency while scaling production 100x.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-white/40 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Live Generation Feed
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <VideoCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkGrid;
