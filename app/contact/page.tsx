import { ContactSection } from "@/components/ContactSection";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-24 pb-32">
       <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <Link href="/" className="text-white/50 hover:text-white uppercase tracking-widest text-xs inline-flex items-center gap-2 transition-colors">
          <span className="opacity-50">←</span> Back to Home
        </Link>
      </div>

      <ContactSection />
    </main>
  );
}
