'use client';

import React from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <nav className={`border-b bg-[#0A0A0A] ${
      isLight 
        ? 'bg-[#FAFAFA] border-gray-300' 
        : 'bg-[#0A0A0A] border-gray-500'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            href="/" 
            className={`text-2xl font-bold ${
              isLight ? 'text-[#011623]' : 'text-white'
            }`}
          >
            (fhenix<span className={`text-3xl font-bold ${
              isLight ? 'text-[#03D9DC]' : 'text-[#FF7A4D]'
            }`}>*</span>)-starters
          </Link>
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link 
              href="/explore" 
              className={`hover:text-zinc-400 transition ${
                isLight ? 'text-[#011623]' : 'text-white'
              }`}
            >
              Explore
            </Link>
          </div>
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

