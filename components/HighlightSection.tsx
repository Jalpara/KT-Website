"use client";

export function HighlightSection() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto" id="highlight">
      <div className="relative border border-brand/30 rounded-3xl overflow-hidden bg-[#0A0A0A] p-8 md:p-16 text-center flex flex-col lg:flex-row items-center gap-12 text-left shadow-[0_0_50px_rgba(242,125,38,0.15)]">
        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#1A1105] to-[#0A0A0A] opacity-80 pointer-events-none" />
        
        {/* Decorative elements */}
        <div className="absolute top-0 inset-x-0 lg:inset-y-0 lg:left-0 lg:right-auto lg:h-full lg:w-px h-px bg-gradient-to-r lg:bg-gradient-to-b from-transparent via-brand/50 to-transparent" />
        
        <div className="relative z-10 flex flex-col items-start w-full lg:w-1/2 lg:order-1 order-2">
            <h2 className="text-xs uppercase tracking-[0.3em] font-medium text-brand mb-8 flex items-center gap-4">
              Major Highlight
              <span className="w-8 h-px bg-brand/50" />
            </h2>
            
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white mb-8 max-w-3xl leading-tight">
              Featured at the <br />
              <span className="italic">Swami Narayan Temple</span>
            </h3>
            
            <p className="font-sans text-lg text-white/70 max-w-xl leading-relaxed mb-10">
              Kanchan Todi&apos;s deeply evocative painting was honored to be featured in the prestigious <strong>Swami Narayan Temple</strong> in Abu Dhabi. Known for its spiritual resonance and expression of cosmic unity, the piece stands as a testament to her work&apos;s profound ability to inspire inner peace, healing, and transformation.
            </p>

            <div className="w-16 h-16 rounded-full border border-white/20 bg-white/5 flex items-center justify-center backdrop-blur-md">
                <img 
              src="/coin-logo.png" 
              alt="Kanchan Todi Logo"
               className="object-cover w-full h-full"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            </div>
        </div>

        <div className="relative z-10 w-full lg:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden border border-brand/20 bg-[#111] lg:order-2 order-1 shadow-2xl">
            <img 
               src="/swami-narayan-painting.jpg" 
               alt="Swami Narayan Temple Painting"
               className="w-full h-full object-cover"
               onError={(e) => {
                 e.currentTarget.style.display = 'none';
               }}
            />
            <div className="absolute inset-0 flex items-center justify-center font-serif text-brand/30 text-center px-4 -z-10 text-sm tracking-widest">
               [Please upload &apos;swami-narayan-painting.jpg&apos; to public folder]
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
