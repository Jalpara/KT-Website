"use client";

import { motion } from "motion/react";
import Link from "next/link";

export function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Typographic Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="z-10 mt-24 lg:mt-0"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-white/30" />
            <span className="uppercase tracking-[0.2em] text-xs font-semibold text-white/50">Abstract Expressionist</span>
          </div>
          
          <h1 className="text-7xl md:text-8xl lg:text-[110px] leading-[0.85] font-light mb-8 tracking-tighter text-white/90">
            Kanchan <br />
            <span className="font-serif italic opacity-80 pl-8 md:pl-16 relative">
              <span className="absolute -left-6 md:-left-4 top-1/2 -translate-y-1/2 w-4 md:w-12 h-px bg-white/20"></span>
              Todi
            </span>
          </h1>

          <p className="text-white/60 font-sans text-lg max-w-md leading-relaxed mb-10">
            Exploring the profound connection between art, spiritual consciousness, and emotional healing through cosmic energy and textures.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/paintings" className="rounded-full border border-white/20 px-8 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300">
              Discover Paintings
            </Link>
            <button onClick={scrollToAbout} className="group flex items-center gap-3 text-sm uppercase tracking-widest text-white/60 hover:text-white transition-colors duration-300">
              <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-colors">
                ↓
              </span>
              Scroll
            </button>
          </div>
        </motion.div>

        {/* Visual Element / Portrait Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[60vh] lg:h-[80vh] w-full"
        >
          {/* User mentioned "KT Front Picture". They will need to upload this to /public/kt-portrait.jpg */}
          <div className="absolute inset-0 rounded-tl-full rounded-tr-full border border-white/10 overflow-hidden bg-[#0A0A0A] flex items-center justify-center">
            {/* We'll use a placeholder structure here with a sophisticated gradient. The user can override the img src. */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80 z-10" />
            <img 
              src="/kt-portrait.jpg" 
              alt="Kanchan Todi Portrait"
              className="object-cover w-full h-full opacity-60 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              onError={(e) => {
                // Fallback if image not uploaded yet
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-white/20 font-sans text-sm tracking-widest text-center px-4 -z-10">
              [Please upload &apos;kt-portrait.jpg&apos; to the public folder]
            </div>
          </div>
          
          {/* Floating accent - Logo Placeholder */}
          <div className="absolute -bottom-8 -left-8 md:bottom-24 md:-left-16 w-32 h-32 rounded-full border border-white/20 bg-black/50 backdrop-blur-md flex items-center justify-center overflow-hidden z-20">
             <img 
              src="/coin-logo.png" 
              alt="Kanchan Todi Logo"
               className="object-cover w-full h-full"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <span className="absolute inset-x-0 text-center text-xs text-white/30 uppercase tracking-widest px-2 -z-10">Logo </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
