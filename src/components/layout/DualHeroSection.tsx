// components/DualHeroSection.tsx
"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface HeroPanelProps {
  imageSrc: string;
  altText: string;
  heading: string;
  buttonText: string;
  buttonLink: string;
}

const HeroPanel: React.FC<HeroPanelProps> = ({
  imageSrc,
  altText,
  heading,
  buttonText,
  buttonLink,
}) => {
  const isExternal = buttonLink.startsWith("http");

  return (
    <div className="relative w-full flex-shrink-0 min-h-[60vh] md:min-h-screen bg-cover bg-center group overflow-hidden">
      <Image
        src={imageSrc}
        alt={altText}
        fill
        priority
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="100vw"
        quality={90}
      />
      <div className="absolute inset-0 bg-black/20 md:bg-black/30"></div>

      <div className="relative z-10 flex flex-col justify-end items-center md:items-start h-full px-6 md:px-12 pb-12 md:pb-24 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white drop-shadow-lg mb-6 leading-tight max-w-4xl">
          {heading}
        </h2>
        
        {isExternal ? (
          <a href={buttonLink} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-black transition-colors px-6 py-3 text-sm sm:text-base"
            >
              {buttonText}
            </Button>
          </a>
        ) : (
          <Link href={buttonLink}>
            <Button
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-black transition-colors px-6 py-3 text-sm sm:text-base"
            >
              {buttonText}
            </Button>
          </Link>
        )}

        {buttonText === "SHOP MAXI DRESSES" && (
          <Link 
            href="/start" 
            className="mt-3 text-sm text-white underline hover:no-underline transition-opacity hover:opacity-80"
          >
            Start
          </Link>
        )}
      </div>
    </div>
  );
};

interface DualHeroSectionProps {
  panels?: HeroPanelProps[];
}

const DualHeroSection: React.FC<DualHeroSectionProps> = ({ panels }) => {
  const defaultPanels: HeroPanelProps[] = [
    {
      imageSrc: "/hero_img.jpg",
      altText: "Woman in black dress and grey jacket on a staircase.",
      heading: "Swish Sway Captivate",
      buttonText: "SHOP MAXI DRESSES",
      buttonLink: "https://uk.cupshe.com/collections/maxi-dresses",
    },
    {
      imageSrc: "/hero_img_1.jpg",
      altText: "Woman in white sweater and brown jacket outdoors.",
      heading: "Layering Aesthetics",
      buttonText: "SHOP LAYERING EDIT",
      buttonLink: "/layering-edit",
    },
  ];

  const heroPanels = panels || defaultPanels;

  // Swipe logic
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (diff > 50) {
        // swipe left
        setCurrentIndex((prev) => (prev + 1) % heroPanels.length);
      } else if (diff < -50) {
        // swipe right
        setCurrentIndex((prev) => (prev - 1 + heroPanels.length) % heroPanels.length);
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {heroPanels.map((panel, idx) => (
          <HeroPanel key={idx} {...panel} />
        ))}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {heroPanels.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "bg-white w-8" : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Optional: Arrow navigation for desktop */}
      {heroPanels.length > 1 && (
        <>
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + heroPanels.length) % heroPanels.length)}
            aria-label="Previous slide"
            className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % heroPanels.length)}
            aria-label="Next slide"
            className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </>
      )}
    </section>
  );
};

export default DualHeroSection;