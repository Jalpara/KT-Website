"use client";

import React, { useRef } from 'react';
import HTMLFlipBook from "react-pageflip";

// The PDF has 60 images based on the prompt's OCR screenshots (Pages 1 to 60).
// Since the user attached them directly, we instruct the user to place them in public/book.
// We will generate an array representing the pages.
const TOTAL_PAGES = 60;
const pages = Array.from({ length: TOTAL_PAGES }, (_, i) => `/book/page-${i + 1}.jpg`);

// react-pageflip requires elements to be forwarded with Ref.
const Page = React.forwardRef<HTMLDivElement, { imageUrl: string, pageNum: number }>((props, ref) => {
    return (
        <div className="bg-[#1a1a1a] shadow-2xl relative border border-white/5 overflow-hidden" ref={ref}>
            {/* We'll use standard img tags for the flipbook to ensure compatibility with react-pageflip calculations */}
            <div className="w-full h-full p-4 md:p-8 flex flex-col justify-between">
                <img 
                  src={props.imageUrl} 
                  alt={`Book Page ${props.pageNum}`} 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // This is a placeholder display if the user hasn't uploaded the images yet.
                     e.currentTarget.style.display = 'none';
                     const parent = e.currentTarget.parentElement;
                     if(parent) {
                       const p = document.createElement('p');
                       p.className = "text-center text-white/30 text-sm mt-32 px-4";
                       p.innerText = `Please place extracted images in /public/book/page-${props.pageNum}.jpg`;
                       parent.appendChild(p);
                     }
                  }}
                />
            </div>
            
            {/* Subtle Gradient overlay for page dimension */}
            <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black/20 to-transparent pointer-events-none" />
        </div>
    );
});
Page.displayName = 'Page';

export function BookFlipbook() {
  // @ts-ignore
  const FlipBook = HTMLFlipBook as any; 

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-[1000px] aspect-[4/3] drop-shadow-2xl">
        <FlipBook
          width={450}
          height={600}
          size="stretch"
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1533}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          className="mx-auto"
        >
          {pages.map((imgUrl, index) => (
            <Page key={index} imageUrl={imgUrl} pageNum={index + 1} />
          ))}
        </FlipBook>
      </div>
      <div className="mt-8 text-white/40 text-sm flex gap-4 uppercase tracking-widest">
         <span>← Drag to turn pages →</span>
      </div>
    </div>
  );
}
