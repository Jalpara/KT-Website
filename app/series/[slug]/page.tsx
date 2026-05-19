import Link from "next/link";
import { seriesData, artworksData } from "@/lib/data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return seriesData.map((s) => ({ slug: s.slug }));
}

export default async function SeriesPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const series = seriesData.find(s => s.slug === slug);
  if (!series) notFound();
  
  const artworks = artworksData.filter(a => a.series === slug);

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-24 pb-32 px-6 md:px-12 max-w-7xl mx-auto selection:bg-brand selection:text-white">
      <Link href="/" className="text-white/50 hover:text-white uppercase tracking-widest text-xs mb-12 inline-flex items-center gap-2 transition-colors">
        <span className="opacity-50">←</span> Back to Home
      </Link>
      
      <div className="max-w-4xl mb-24 lg:mb-32">
        <div className="uppercase tracking-[0.2em] text-brand text-sm font-semibold mb-6">Series Collection</div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light font-serif mb-10">{series.title}</h1>
        <p className="text-white/70 font-sans text-xl leading-relaxed md:leading-loose">
          {series.fullDesc}
        </p>
      </div>
      
      <div className="flex items-center gap-6 mb-12 pt-12 border-t border-white/5">
        <h2 className="text-sm uppercase tracking-widest text-white/60 font-medium">Artworks in this series</h2>
        <div className="h-px bg-white/10 flex-grow" />
        <span className="text-white/40 font-serif italic text-lg">{artworks.length} Pieces</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {artworks.map((art) => (
          <Link href={`/paintings/${art.slug}`} key={art.slug} className="group flex flex-col">
            <div className="aspect-[3/4] bg-[#0A0A0A] border border-white/10 rounded-2xl mb-6 overflow-hidden relative transition-colors duration-500 group-hover:border-white/30">
               <div className={`absolute inset-0 bg-gradient-to-tr ${art.color} opacity-20 group-hover:scale-110 transition-transform duration-700 blur-xl`} />
               <div className="absolute inset-0 flex items-center justify-center font-serif text-white/20 tracking-widest px-8 text-center text-sm">
                 [Artwork Image]
               </div>
            </div>
            <h3 className="text-xl font-serif text-white/90 group-hover:text-white transition-colors">{art.title}</h3>
            <p className="font-sans text-white/50 text-sm mt-2">{art.medium}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
