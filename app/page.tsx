import { BookFlipbook } from "@/components/BookFlipbook";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { PhilanthropySection } from "@/components/PhilanthropySection";
import { SeriesSection } from "@/components/SeriesSection";
import { HighlightSection } from "@/components/HighlightSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-brand selection:text-white">
      {/* Abstract background gradient accents */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#1a1a1a] blur-[120px] opacity-60" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[50%] rounded-full bg-[#14100c] blur-[100px] opacity-70" />
      </div>

      <HeroSection />
      
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />
      
      <AboutSection />
      
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />
      
      <HighlightSection />

      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />
      
      <SeriesSection />
      
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />
      
      <section className="py-32 px-6 md:px-12 max-w-6xl mx-auto" id="book">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white font-serif">
            Cosmic <span className="italic text-white/70">Imprints</span>
          </h2>
          <p className="text-white/60 font-sans max-w-2xl mx-auto text-lg">
            A major solo exhibition debuted at The Bombay Art Society in Bandra. Explore the interactive book below.
          </p>
        </div>
        <BookFlipbook />
      </section>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />
      
      <PhilanthropySection />

      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />
      
      <ContactSection />

      <footer className="py-12 border-t border-white/5 mt-32 text-center text-white/40 font-sans text-sm">
        <p>&copy; {new Date().getFullYear()} Kanchan Todi. All rights reserved.</p>
      </footer>
    </main>
  );
}
