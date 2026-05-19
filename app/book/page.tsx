import { BookFlipbook } from "@/components/BookFlipbook";
import Link from "next/link";

export default function BookPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-24 pb-32">
       <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <Link href="/" className="text-white/50 hover:text-white uppercase tracking-widest text-xs inline-flex items-center gap-2 transition-colors">
          <span className="opacity-50">←</span> Back to Home
        </Link>
      </div>

      <section className="py-12 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-6">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white font-serif">
            Cosmic <span className="italic text-white/70">Imprints</span>
          </h1>
          <p className="text-white/60 font-sans max-w-3xl mx-auto text-lg leading-relaxed">
            A Canvas of Spiritual Reflections. Her book debuted alongside a major solo exhibition of the same name at The Bombay Art Society in Bandra. Explore the interactive collector&apos;s edition below.
          </p>
        </div>
        
        <BookFlipbook />
        
        <div className="mt-24 pt-16 border-t border-white/10 max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-serif text-white mb-6">About the Publication</h3>
            <p className="text-white/60 font-sans leading-relaxed">
                Cosmic Imprints documents Kanchan Todi&apos;s profound journey through abstract expressionism. It features high-resolution captures of her pivotal series—Womb Journey, Sacred Feminine, and Soul Evolution—accompanied by deeply evocative poetry and insights from curators and spiritual writers.
            </p>
        </div>
      </section>
    </main>
  );
}
