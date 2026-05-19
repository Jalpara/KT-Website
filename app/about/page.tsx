import { AboutSection } from "@/components/AboutSection";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-24 pb-32">
       <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <Link href="/" className="text-white/50 hover:text-white uppercase tracking-widest text-xs inline-flex items-center gap-2 transition-colors">
          <span className="opacity-50">←</span> Back to Home
        </Link>
      </div>

      <AboutSection />
      
      {/* Additional Content for SEO and depth */}
      <section className="px-6 md:px-12 max-w-4xl mx-auto mt-12 pt-16 border-t border-white/10">
        <h3 className="text-3xl md:text-4xl font-serif font-light text-white mb-8">The <span className="italic text-white/70">Journey</span></h3>
        
        <div className="space-y-8 text-white/60 font-sans text-lg leading-relaxed">
          <p>
            Kanchan Todi is a self-taught artist whose connection to painting began in childhood. Early on, she searched for ways to express her inner experiences, yet often set aside her initial works, perceiving them as incomprehensible at the time. Through years of dedication and exploration, she uncovered her unique voice, which now shines powerfully through her current series.
          </p>
          <p>
            Unbound by formal training, Todi enjoys the freedom to explore her emotions and inner world through art. This freedom allows her to channel her spiritual journey directly onto the canvas, transforming her energy into visual forms. Her inspiration arises from a deep inner dialogue, translating emotions and impressions that originate within rather than from external influences.
          </p>
          
          <blockquote className="border-l-[3px] border-brand/50 pl-6 my-12 py-2">
            <p className="font-serif italic text-2xl text-white/80 leading-snug">
               &quot;Colour is the key. The eye is the hammer. The soul is the piano with its many chords.&quot;
            </p>
          </blockquote>
          
          <p>
            Spirituality is a recurring theme in her work, guiding her artistic journey. This spiritual essence is evident in her paintings, which radiate waves of mental and emotional energy. Her approach is refreshingly untraditional — rather than adhering to conventional rules of composition or depicting familiar shapes, her work exudes expressive, colourful moods that reflect her spiritual experiences and creative impulses. Each painting becomes a journey to visualize the colours of her mental and spiritual energy.
          </p>
        </div>
      </section>
    </main>
  );
}
