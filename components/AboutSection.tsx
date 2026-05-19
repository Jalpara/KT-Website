export function AboutSection() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-light mb-8 text-white font-serif">
            Inner <span className="italic text-white/70">Transformation</span>
          </h2>
          <div className="space-y-6 text-white/60 font-sans text-lg leading-relaxed">
            <p>
              Kanchan Todi is a self-taught contemporary abstract expressionist 
              whose work focuses heavily on textures, cosmic energy, and emotional transformation.
            </p>
            <p>
              Her artistic journey is intrinsically tied to spiritual consciousness, culminating in works that
              serve as a tool for healing and inner awakening.
            </p>
            <div className="pt-6">
              <a 
                href="https://www.youtube.com/results?search_query=Kanchan+Todi+TEDx+Healing+Through+Art" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-3 border border-white/20 rounded-full px-6 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
               >
                Watch TEDx Talk <span className="opacity-50">↗</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="relative aspect-square md:aspect-[3/4] border border-white/10 rounded-2xl overflow-hidden bg-[#0a0a0a]">
           <div className="absolute inset-0 bg-gradient-to-tr from-[#1a1a1a] to-[#0a0a0a]" />
           {/* Abstract artistic representation / fallback */}
           <div className="absolute inset-0 opacity-20 blur-xl">
             <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-brand rounded-full mix-blend-screen" />
             <div className="absolute top-1/2 right-1/4 w-1/2 h-1/2 bg-blue-500 rounded-full mix-blend-screen" />
           </div>
           
           <div className="absolute inset-0 flex items-center justify-center p-8 text-center text-white/40 italic font-serif text-2xl">
              &quot;Healing Through Art&quot;
           </div>
        </div>
      </div>
    </section>
  );
}
