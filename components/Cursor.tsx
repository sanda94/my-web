
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isView, setIsView] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out"
      });
    };

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('.hover-trigger')) setIsHovered(true);
      if (target.closest('.view-trigger')) setIsView(true);
    };

    const handleHoverEnd = () => {
      setIsHovered(false);
      setIsView(false);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', handleHoverStart);
    window.addEventListener('mouseout', handleHoverEnd);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleHoverStart);
      window.removeEventListener('mouseout', handleHoverEnd);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 w-5 h-5 border border-white/50 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference transition-[width,height,background-color] duration-300 flex items-center justify-center overflow-hidden
        ${isHovered ? 'w-12 h-12 bg-white !mix-blend-exclusion border-transparent' : ''}
        ${isView ? 'w-20 h-20 bg-white/10 backdrop-blur-md border-white/20' : ''}
      `}
    >
      {isView && (
        <span className="text-[10px] font-bold text-white tracking-widest">VIEW</span>
      )}
    </div>
  );
};

export default Cursor;
