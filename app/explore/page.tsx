'use client';

import React from 'react';
import Link from 'next/link';
import LetterGlitch from '@/app/components/LetterGlitch';
import { EvervaultCard, Icon } from '@/components/ui/evervault-card';

const page = () => {
  const projects = [
    {
      id: 1,
      name: 'Project  1',
      description: 'Description for Project 1. This is a sample description text.',
      image: 'https://cdn.prod.website-files.com/6889e4acaa36a330a3b124f2/68aca7d70e920af4be0d4a0d_Untitled-22.webp',
      githubUrl: 'https://github.com',
      websiteUrl: 'https://example.com',
    },
    {
      id: 2,
      name: 'Project  2',
      description: 'Description for Project 2. This is a sample description text.',
      image: 'https://www.nftgators.com/wp-content/uploads/2024/06/Fhenix.jpg',
      githubUrl: 'https://github.com',
      websiteUrl: 'https://example.com',
    },
    {
      id: 3,
      name: 'Project  3',
      description: 'Description for Project 3. This is a sample description text.',
      image: 'https://cdn.prod.website-files.com/6889e4acaa36a330a3b124f2/6914c5793d1c014c69016d8a_Twitter%20post%20-%20404%20(1).png',
      githubUrl: 'https://github.com',
      websiteUrl: 'https://example.com',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white py-16 px-8 relative overflow-hidden">
      {/* Orange gradient on left end - more intense */}
      <div className="absolute left-0 top-0 w-[77px] md:w-[307px] h-full bg-gradient-to-r from-[#CC4420]/50 to-transparent pointer-events-none z-0"></div>
      {/* Orange gradient on right end - more intense */}
      <div className="absolute right-0 top-0 w-[77px] md:w-[307px] h-full bg-gradient-to-l from-[#CC4420]/50 to-transparent pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 px-4 md:px-8">
        {/* First row with 2 boxes */}
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mb-4 md:mb-8">
          {projects.slice(0, 2).map((project) => (
            <div
              key={project.id}
              className="w-full md:w-[500px] border border-zinc-700 rounded-lg overflow-hidden bg-black relative"
            >
              {/* Border decorations - corners */}
              <div className="absolute top-0 left-0 w-6 h-6 border-l-[3px] border-t-[2px] border-[#CC4420] z-10"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-r-[3px] border-t-[2px] border-[#CC4420] z-10"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-l-[3px] border-b-[2px] border-[#CC4420] z-10"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-r-[3px] border-b-[2px] border-[#CC4420] z-10"></div>
              
              {/* Project name with LetterGlitch */}
              <div className="relative h-[60px] border-b border-zinc-700 overflow-hidden">
                <div className="absolute inset-0">
                  <LetterGlitch
                    glitchColors={['#ffffff', '#f4f4f5', '#e4e4e7', '#d4d4d8', '#a1a1aa', '#71717a', '#CC4420']}
                    glitchSpeed={50}
                    centerVignette={false}
                    outerVignette={false}
                    smooth={true}
                  />
                </div>
              </div>
              
              {/* EvervaultCard section */}
              <div className="w-full aspect-[4/3] bg-black relative overflow-hidden border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-center justify-center p-4">
                <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-white z-20" />
                <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-white z-20" />
                <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-white z-20" />
                <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-white z-20" />
                <EvervaultCard text={project.name} className="w-full h-full" />
              </div>
              
              {/* Description section */}
              <div className="p-4 border-t border-zinc-700 bg-black">
                <p className="text-sm text-zinc-400 font-light">{project.description}</p>
              </div>
              
              {/* GitHub and Website links */}
              <div className="p-4 flex gap-3">
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border border-[#CC4420] rounded px-4 py-2 text-white text-sm font-medium hover:bg-[#CC4420]/10 transition flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  GitHub
                </Link>
                <Link
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border border-[#CC4420] rounded px-4 py-2 text-white text-sm font-medium hover:bg-[#CC4420]/10 transition flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Website
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Second row with 1 box (centered) */}
        <div className="flex justify-center">
          {projects.slice(2, 3).map((project) => (
            <div
              key={project.id}
              className="w-full md:w-[500px] border border-zinc-700 rounded-lg overflow-hidden bg-black relative"
            >
              {/* Border decorations - corners */}
              <div className="absolute top-0 left-0 w-6 h-6 border-l-[3px] border-t-[2px] border-[#CC4420] z-10"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-r-[3px] border-t-[2px] border-[#CC4420] z-10"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-l-[3px] border-b-[2px] border-[#CC4420] z-10"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-r-[3px] border-b-[2px] border-[#CC4420] z-10"></div>
              
              {/* Project name with LetterGlitch */}
              <div className="relative h-[60px] border-b border-zinc-700 overflow-hidden">
                <div className="absolute inset-0">
                  <LetterGlitch
                    glitchColors={['#ffffff', '#f4f4f5', '#e4e4e7', '#d4d4d8', '#a1a1aa', '#71717a', '#CC4420']}
                    glitchSpeed={50}
                    centerVignette={false}
                    outerVignette={false}
                    smooth={true}
                  />
                </div>
              </div>
              
              {/* EvervaultCard section */}
              <div className="w-full aspect-[4/3] bg-black relative overflow-hidden border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-center justify-center p-4">
                <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-white z-20" />
                <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-white z-20" />
                <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-white z-20" />
                <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-white z-20" />
                <EvervaultCard text={project.name} className="w-full h-full" />
              </div>
              
              {/* Description section */}
              <div className="p-4 border-t border-zinc-700 bg-black">
                <p className="text-sm text-zinc-400 font-light">{project.description}</p>
              </div>
              
              {/* GitHub and Website links */}
              <div className="p-4 flex gap-3">
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border border-[#CC4420] rounded px-4 py-2 text-white text-sm font-medium hover:bg-[#CC4420]/10 transition flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  GitHub
                </Link>
                <Link
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border border-[#CC4420] rounded px-4 py-2 text-white text-sm font-medium hover:bg-[#CC4420]/10 transition flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Website
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;