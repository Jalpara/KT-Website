import { PhilanthropySection } from "@/components/PhilanthropySection";
import Link from "next/link";

export default function PhilanthropyPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <Link href="/" className="text-white/50 hover:text-white uppercase tracking-widest text-xs inline-flex items-center gap-2 transition-colors">
          <span className="opacity-50">←</span> Back to Home
        </Link>
      </div>

      <PhilanthropySection />
      
      <section className="px-6 md:px-12 max-w-4xl mx-auto mt-12 pt-16 border-t border-white/10">
        <h3 className="text-3xl font-serif font-light text-white mb-8">A Commitment to <span className="italic text-white/70">Community</span></h3>
        <div className="space-y-8 text-white/60 font-sans text-lg leading-relaxed">
            <p>
                Parallel to her creative expression, Kanchan&apos;s philanthropic endeavours are a reflection of her commitment to community upliftment, with a focus on emotional & mental wellbeing for children and vocational empowerment for women. For her, painting is an extension of service—a sacred practice that channels cosmic energy onto the canvas, mirroring the care and attention she dedicates to her charitable work.
            </p>
            <p>
                As a Trustee of The Kanchan Foundation (established 2010), she has been deeply involved in providing support for education and healthcare, stepping up particularly during crises, as evidenced by notable frontline COVID-19 relief efforts in Navi Mumbai.
            </p>
        </div>
      </section>
    </main>
  );
}
