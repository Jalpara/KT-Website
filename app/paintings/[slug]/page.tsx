import Link from "next/link";
import { artworksData } from "@/lib/data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return artworksData.map((art) => ({ slug: art.slug }));
}

export default async function ArtworkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const art = artworksData.find(a => a.slug === slug);
  if (!art) notFound();

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-24 pb-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 selection:bg-brand selection:text-white">
       <div className="w-full lg:w-1/2 flex flex-col items-start">
         <Link href="/paintings" className="text-white/50 hover:text-white uppercase tracking-widest text-xs mb-12 inline-flex items-center gap-2 transition-colors">
           <span className="opacity-50">←</span> Back to Gallery
         </Link>
         
         <div className="w-full relative bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden drop-shadow-2xl">
             {/* Aspect ratio tailored loosely, in a real app this would adapt to image dims */}
             <div className="aspect-[4/5] relative overflow-hidden">
                 <div className={`absolute inset-0 bg-gradient-to-tr ${art.color} opacity-30 blur-3xl mix-blend-screen scale-150`} />
                 <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                   <div className="font-serif text-white/20 tracking-[0.2em] mb-4 text-sm uppercase">Hi-Res Artwork</div>
                   <div className="text-white/10 text-xs font-sans max-w-[200px]">{art.image}</div>
                 </div>
             </div>
         </div>
       </div>
       
       <div className="w-full lg:w-1/2 lg:pt-24 flex flex-col justify-center">
         <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-6 leading-tight">{art.title}</h1>
         
         <Link href={`/series/${art.series}`} className="inline-block text-brand uppercase tracking-widest text-sm hover:text-brand/80 transition-colors mb-12">
           Series <span className="opacity-50 mx-2">—</span> {art.seriesTitle}
         </Link>
         
         <div className="h-px bg-white/10 w-full max-w-md mb-12" />
         
         <div className="space-y-6 font-sans text-white/60 mb-16 text-sm tracking-wide">
           <div className="flex flex-col gap-1">
               <span className="uppercase text-xs text-white/40 tracking-widest">Medium</span>
               <span className="text-white/90 text-base font-medium">{art.medium}</span>
           </div>
           <div className="flex flex-col gap-1">
               <span className="uppercase text-xs text-white/40 tracking-widest">Dimensions</span>
               <span className="text-white/90 text-base font-medium">{art.size}</span>
           </div>
         </div>
         
         {art.quote && (
             <blockquote className="font-serif italic text-xl md:text-2xl text-white/80 leading-relaxed border-l-[3px] border-brand/50 pl-6 md:pl-8 py-2 relative">
               <span className="absolute -left-3 -top-4 text-6xl text-white/10 font-serif leading-none">"</span>
               {art.quote}
             </blockquote>
         )}
       </div>
    </main>
  );
}
