"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '/about', label: 'About' },
    { href: '/paintings', label: 'Paintings' },
    { href: '/book', label: 'Book' },
    { href: '/philanthropy', label: 'Philanthropy' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#050505]/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl font-medium tracking-widest text-white">
          Kanchan Todi
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`text-sm uppercase tracking-widest transition-colors ${pathname.startsWith(link.href) ? 'text-brand' : 'text-white/60 hover:text-white'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
