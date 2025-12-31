
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 md:pt-6 md:px-6">
      <div className="max-w-[1600px] mx-auto glass rounded-[24px] md:rounded-full px-4 py-3 md:px-8 transition-all duration-300">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group hover-trigger">
            <div className="w-8 h-8 bg-white rounded-sm overflow-hidden flex items-center justify-center p-1">
              <img 
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8bb0d554-8131-4079-a0d6-89e7a16208c0_320w.png" 
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-base md:text-lg font-bold tracking-tight font-display text-white">
              NOOCAP<span className="font-light text-brand-yellow">MEDIA</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-12">
            <a href="#work" className="text-xs font-medium uppercase tracking-widest text-brand-yellow hover:text-white transition-colors hover-trigger">Work</a>
            <a href="#services" className="text-xs font-medium uppercase tracking-widest text-brand-yellow hover:text-white transition-colors hover-trigger">Services</a>
            <a href="#testimonials" className="text-xs font-medium uppercase tracking-widest text-brand-yellow hover:text-white transition-colors hover-trigger">Stories</a>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <button 
              className="hidden sm:block uppercase text-xs font-bold text-black tracking-wider bg-brand-yellow rounded-full px-6 py-2 hover:bg-yellow-200 transition-colors hover-trigger"
              onClick={() => window.open('https://calendly.com/noocapm/new-meeting', '_blank')}
            >
              BOOK A CALL
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-white hover:text-brand-yellow transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/10 flex flex-col gap-4 pb-4">
            <a href="#work" onClick={() => setIsOpen(false)} className="text-sm font-medium uppercase tracking-widest text-brand-yellow text-center py-2">Work</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="text-sm font-medium uppercase tracking-widest text-brand-yellow text-center py-2">Services</a>
            <a href="#testimonials" onClick={() => setIsOpen(false)} className="text-sm font-medium uppercase tracking-widest text-brand-yellow text-center py-2">Stories</a>
            <button 
              className="w-full uppercase text-xs font-bold text-black tracking-wider bg-brand-yellow rounded-full py-3"
              onClick={() => window.open('https://calendly.com/noocapm/new-meeting', '_blank')}
            >
              BOOK A CALL
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
