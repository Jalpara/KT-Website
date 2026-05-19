import Link from "next/link";
import { artworksData } from "@/lib/data";

export default function PaintingsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-24 pb-32 px-6 md:px-12 max-w-7xl mx-auto selection:bg-brand selection:text-white">
      <Link href="/" className="text-white/50 hover:text-white uppercase tracking-widest text-xs mb-12 inline-flex items-center gap-2 transition-colors">
        <span className="opacity-50">←</span> Back to Home
      </Link>
      
      <div className="max-w-3xl mb-24">
        <h1 className="text-5xl md:text-7xl font-light font-serif mb-6">Discover <span className="italic text-white/70">Paintings</span></h1>
        <p className="text-white/60 font-sans text-lg max-w-2xl leading-relaxed">
          A collection of Kanchan Todi&apos;s contemporary abstract expressionist works, exploring cosmic energy, textures, and deep emotional transformation.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {artworksData.map((art) => (
          <Link href={`/paintings/${art.slug}`} key={art.slug} className="group flex flex-col">
            <div className="aspect-[3/4] bg-[#0A0A0A] border border-white/10 rounded-2xl mb-6 overflow-hidden relative transition-colors duration-500 group-hover:border-white/30">
               <div className={`absolute inset-0 bg-gradient-to-tr ${art.color} opacity-20 group-hover:scale-110 transition-transform duration-700 blur-xl`} />
               <div className="absolute inset-0 flex items-center justify-center font-serif text-white/20 tracking-widest px-8 text-center text-sm">
                 [Artwork Image Placeholder]
               </div>
            </div>
            <h3 className="text-xl font-serif text-white/90 group-hover:text-white transition-colors">{art.title}</h3>
            <p className="font-sans text-white/50 text-sm mt-2">{art.seriesTitle} <span className="opacity-50 mx-1">|</span> {art.medium}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
