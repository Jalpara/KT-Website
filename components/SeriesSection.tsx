import Link from "next/link";
import { seriesData } from "@/lib/data";

export function SeriesSection() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto" id="series">
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h2 className="text-4xl md:text-6xl font-light text-white font-serif mb-4">
            Specialized <span className="italic text-white/70">Series</span>
          </h2>
          <p className="font-sans text-white/50 max-w-md">Collections realizing the profound spiritual paradigms and inner emotional states.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {seriesData.map((s, i) => (
          <Link href={`/series/${s.slug}`} key={s.slug} className="group cursor-pointer block">
            <div className="aspect-[3/4] bg-[#0A0A0A] border border-white/10 rounded-2xl mb-6 relative overflow-hidden transition-all duration-500 group-hover:border-white/30">
               {/* Decorative background based on index to simulate different art pieces before upload */}
               <div className={`absolute inset-0 opacity-20 transition-transform duration-700 group-hover:scale-110 blur-xl ${
                 i === 0 ? 'bg-gradient-to-br from-red-900 to-[#0A0A0A]' : 
                 i === 1 ? 'bg-gradient-to-bl from-purple-900 to-[#0A0A0A]' :
                 'bg-gradient-to-t from-blue-900 to-[#0A0A0A]'
               }`} />
               <div className="absolute inset-0 flex items-center justify-center font-serif text-white/20 text-xl tracking-widest">
                  [Artwork]
               </div>
            </div>
            <div className="flex gap-4">
              <span className="font-serif text-2xl text-white/30">0{i + 1}</span>
              <div>
                <h3 className="text-xl font-serif text-white/90 mb-2 group-hover:text-white transition-colors">{s.title}</h3>
                <p className="text-sm font-sans text-white/50">{s.desc}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
