export function PhilanthropySection() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-center" id="philanthropy">
      <h2 className="text-3xl md:text-5xl font-light mb-16 text-white font-serif">
        Philanthropy & <span className="italic text-white/70">Impact</span>
      </h2>
      
      <div className="space-y-12">
        <div className="border border-white/10 p-8 rounded-2xl bg-[#0a0a0a]">
          <h3 className="text-xl uppercase tracking-widest font-semibold text-white/90 mb-4">The Kanchan Foundation</h3>
          <p className="text-white/60 font-sans text-sm mb-4 tracking-wider">EST. 2010</p>
          <p className="text-white/70 font-sans leading-relaxed">
            As a Trustee, Kanchan handles education, healthcare, and emotional wellness initiatives, including notable frontline COVID-19 relief work in Navi Mumbai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-white/10 p-8 rounded-2xl bg-gradient-to-b from-[#111] to-[#050505]">
            <h3 className="text-lg uppercase tracking-wide font-semibold text-white/80 mb-3">Svarang Art Initiative</h3>
            <p className="text-white/60 font-sans text-sm leading-relaxed">
              Co-founder and promoter. Launched to support ethical art collaborations and uplift artistic communities.
            </p>
          </div>
          
          <div className="border border-white/10 p-8 rounded-2xl bg-gradient-to-b from-[#111] to-[#050505]">
            <h3 className="text-lg uppercase tracking-wide font-semibold text-white/80 mb-3">TINTE Foundation</h3>
            <p className="text-white/60 font-sans text-sm leading-relaxed">
              Board Member focused on supporting and championing animal welfare initiatives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
