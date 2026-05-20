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
                href="https://www.youtube.com/watch?v=Wa6EZRw9x1Q&t=5s" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-3 border border-white/20 rounded-full px-6 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
               >
                Watch TEDx Talk <span className="opacity-50">↗</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="relative aspect-square md:aspect-[3/2] border border-white/10 rounded-2xl overflow-hidden bg-[#0a0a0a]">
           <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Wa6EZRw9x1Q?si=kFcw6C773vYLFk8L&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
           
        </div>
      </div>
    </section>
  );
}
