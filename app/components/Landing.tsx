'use client';

import React from 'react';
import Link from 'next/link';
import { useTheme } from '../contexts/ThemeContext';

const HeroLanding: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    // Background color: #0A0A0A with orange gradient on ends
    <section 
      className={`min-h-screen flex items-center justify-center p-8 relative overflow-hidden ${
        isLight ? 'bg-white text-[#011623]' : 'bg-[#0A0A0A] text-gray-100'
      }`}
    >
      {/* Orange gradient on left end - more intense (only in dark theme) */}
      {!isLight && (
        <div className="absolute left-0 top-0 w-[77px] md:w-[307px] h-full bg-gradient-to-r from-[#CC4420]/50 to-transparent pointer-events-none"></div>
      )}
      {/* Orange gradient on right end - more intense (only in dark theme) */}
      {!isLight && (
        <div className="absolute right-0 top-0 w-[77px] md:w-[307px] h-full bg-gradient-to-l from-[#CC4420]/50 to-transparent pointer-events-none"></div>
      )}
      
      <div className="max-w-6xl mx-auto text-center z-10 relative">
        {/* --- Branding & Headline --- */}
        <div className="inline-block mb-2">
          <span className={`text-xs font-mono tracking-widest border px-3 py-1.5 rounded mb-4 ${
            isLight 
              ? 'text-[#011623] border-[#03D9DC]' 
              : 'text-white border-[#CC4420]'
          }`}>
            FHENIX LIVE DAPPS
          </span>
        </div>
        
        <h1 className={`text-6xl md:text-8xl font-semibold font-serif mb-6 leading-tight ${
          isLight ? 'text-[#011623]' : 'text-white'
        }`}>
          Explore <span className={`px-2 ${
            isLight 
              ? 'bg-[#03D9DC] text-[#011623]' 
              : 'bg-[#CC4420] text-white'
          }`}>Fhenix*</span>.
          <br /> 
          Launch <span className={`px-2 ${
            isLight 
            ? 'bg-[#03D9DC] text-[#011623]' 
              : 'bg-[#CC4420] text-white'
          }`}>Faster</span>.
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-10">
          Discover real-world applications built on Fhenix. Explore live dapps showcasing privacy-preserving computation and encrypted data processing.
        </p>
        
        {/* --- CTAs --- */}
        <div className="flex justify-center space-x-4">
          
          <Link href="/explore">
            <button className={`relative w-32 h-12 border rounded-sm font-semibold text-lg transition duration-300 ease-in-out flex items-center justify-center ${
              isLight 
                ? 'border-[#03D9DC] text-[#011623] hover:bg-[#03D9DC]/10' 
                : 'border-zinc-700 text-white hover:bg-[#CC4420]/10'
            }`}>
              {/* Border decorations - corners */}
              <div className={`absolute top-0 left-0 w-2 h-2 border-l-[3px] border-t-[2px] z-10 ${
                isLight ? 'border-[#03D9DC]' : 'border-[#CC4420]'
              }`}></div>
              <div className={`absolute top-0 right-0 w-2 h-2 border-r-[3px] border-t-[2px] z-10 ${
                isLight ? 'border-[#03D9DC]' : 'border-[#CC4420]'
              }`}></div>
              <div className={`absolute bottom-0 left-0 w-2 h-2 border-l-[3px] border-b-[2px] z-10 ${
                isLight ? 'border-[#03D9DC]' : 'border-[#CC4420]'
              }`}></div>
              <div className={`absolute bottom-0 right-0 w-2 h-2 border-r-[3px] border-b-[2px] z-10 ${
                isLight ? 'border-[#03D9DC]' : 'border-[#CC4420]'
              }`}></div>
              <span>Explore ↗</span>
            </button>
          </Link>
        </div>
      </div>
      {/* More intense background glow effects (only in dark theme) */}
      {!isLight && (
        <>
          <div className="absolute w-96 h-96 bg-[#CC4420]/30 rounded-full blur-3xl opacity-60 bottom-10 left-10 animate-pulse pointer-events-none"></div>
          <div className="absolute w-96 h-96 bg-[#CC4420]/25 rounded-full blur-3xl opacity-50 top-10 right-10 animate-pulse pointer-events-none"></div>
        </>
      )}
    </section>
  );
};

export default HeroLanding;

