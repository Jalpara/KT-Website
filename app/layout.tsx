import type {Metadata} from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { NavBar } from '@/components/NavBar';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant' 
});

export const metadata: Metadata = {
  title: 'Kanchan Todi | Contemporary Abstract Expressionist',
  description: 'Kanchan Todi is a Mumbai-based contemporary abstract expressionist artist, author, and philanthropist exploring the connection between art, spiritual consciousness, and emotional healing.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${cormorant.variable} bg-[#050505] text-white antialiased`} suppressHydrationWarning>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
