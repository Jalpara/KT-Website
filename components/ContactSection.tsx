"use client";

import { useState } from 'react';

type Tab = 'art' | 'speaking' | 'general';

export function ContactSection() {
  const [activeTab, setActiveTab] = useState<Tab>('art');

  return (
    <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto" id="contact">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-light mb-6 text-white font-serif">
          Get in <span className="italic text-white/70">Touch</span>
        </h2>
        <p className="text-white/60 font-sans text-lg max-w-2xl mx-auto">
          We would love to hear from you. Please select the nature of your inquiry below.
        </p>
      </div>

      <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden">
        <div className="flex flex-wrap md:flex-nowrap border-b border-white/10 overflow-x-auto no-scrollbar">
          <button 
            onClick={() => setActiveTab('art')}
            className={`flex-1 min-w-[120px] py-5 px-4 text-sm tracking-widest uppercase transition-colors whitespace-nowrap ${activeTab === 'art' ? 'bg-brand/10 text-brand border-b-2 border-brand font-medium' : 'text-white/50 hover:text-white/80 hover:bg-white/5'}`}
          >
            Artwork Inquiry
          </button>
          <button 
            onClick={() => setActiveTab('speaking')}
            className={`flex-1 min-w-[120px] py-5 px-4 text-sm tracking-widest uppercase transition-colors whitespace-nowrap ${activeTab === 'speaking' ? 'bg-brand/10 text-brand border-b-2 border-brand font-medium' : 'text-white/50 hover:text-white/80 hover:bg-white/5'}`}
          >
            Speaking & Events
          </button>
          <button 
            onClick={() => setActiveTab('general')}
            className={`flex-1 min-w-[120px] py-5 px-4 text-sm tracking-widest uppercase transition-colors whitespace-nowrap ${activeTab === 'general' ? 'bg-brand/10 text-brand border-b-2 border-brand font-medium' : 'text-white/50 hover:text-white/80 hover:bg-white/5'}`}
          >
            General Contact
          </button>
        </div>

        <div className="p-8 md:p-12">
          <form className="space-y-6 flex flex-col" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/50">First Name</label>
                <input type="text" className="w-full bg-[#111] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand/50 transition-colors" placeholder="Jane" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/50">Last Name</label>
                <input type="text" className="w-full bg-[#111] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand/50 transition-colors" placeholder="Doe" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/50">Email Address</label>
              <input type="email" className="w-full bg-[#111] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand/50 transition-colors" placeholder="jane@example.com" />
            </div>

            {activeTab === 'art' && (
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/50">Artwork or Series of Interest</label>
                <input type="text" className="w-full bg-[#111] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand/50 transition-colors" placeholder={`e.g. "Sacred Feminine" or a specific piece`} />
              </div>
            )}

            {activeTab === 'speaking' && (
              <div className="space-y-2">
                 <label className="text-xs uppercase tracking-widest text-white/50">Event Details</label>
                <input type="text" className="w-full bg-[#111] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand/50 transition-colors" placeholder="Date, Location, Expected Audience" />
              </div>
            )}

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/50">Message</label>
              <textarea rows={5} className="w-full bg-[#111] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand/50 transition-colors resize-none" placeholder="How can we help you?" />
            </div>

            <button type="submit" className="mt-4 self-start bg-white text-black px-8 py-3 rounded-full text-sm uppercase tracking-widest font-medium hover:bg-white/90 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
