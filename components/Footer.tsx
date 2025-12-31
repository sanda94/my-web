
import React from 'react';
import { ArrowRight, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden bg-[#050509] border-t border-white/5 pt-24 pb-12">
      {/* Background Glow */}
      <div className="absolute -top-[150px] left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] bg-white/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-6">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-8 h-8 bg-white rounded-sm overflow-hidden p-1">
                <img 
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8bb0d554-8131-4079-a0d6-89e7a16208c0_320w.png" 
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-lg font-bold tracking-tight font-display text-white">NOOCAP<span className="font-light text-brand-yellow">MEDIA</span></span>
            </a>
            <p className="text-sm leading-relaxed text-brand-yellow/60">
              Engineering the digital nervous system for global brands. Operations in London, New York, and Tokyo.
            </p>
          </div>

          {/* Links */}
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-white">Explore</h4>
              <ul className="space-y-4 text-sm text-brand-yellow/60">
                <li><a href="#" className="hover:text-white transition-colors">Work</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Process</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-white">Company</h4>
              <ul className="space-y-4 text-sm text-brand-yellow/60">
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">News</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-white">Socials</h4>
              <div className="flex gap-4">
                <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-brand-yellow/60 hover:text-white hover:border-white transition-colors"><Twitter size={14} /></a>
                <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-brand-yellow/60 hover:text-white hover:border-white transition-colors"><Linkedin size={14} /></a>
                <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-brand-yellow/60 hover:text-white hover:border-white transition-colors"><Instagram size={14} /></a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-white">Stay Updated</h4>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:border-brand-yellow transition-colors"
              />
              <button className="absolute right-2 top-2 p-1.5 rounded bg-brand-yellow text-black hover:bg-yellow-200 transition-colors">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[10px] uppercase text-brand-yellow/40 tracking-[0.2em]">
            © 2025 NOOCAPMEDIA Agency. Engineered for Scale.
          </div>
          <div className="flex gap-6 text-[10px] uppercase tracking-widest text-brand-yellow/40">
            <a href="#" className="hover:text-brand-yellow transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-yellow transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
