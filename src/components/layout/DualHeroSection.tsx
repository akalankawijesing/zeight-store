"use client";

import { useState, useRef } from "react";
import HeroPanel from "./HeroPanel";

interface DualHeroSectionProps {
  panels?: HeroPanelProps[];
}

const DualHeroSection: React.FC<DualHeroSectionProps> = ({ panels }) => {
  const defaultPanels: HeroPanelProps[] = [
    {
      imageSrc: "/oleg-ivanov.jpg",
      altText: "Woman in black dress and grey jacket on a staircase.",
      heading: "Swish Sway Captivate",
      buttonText: "SHOP MAXI DRESSES",
      buttonLink: "https://uk.cupshe.com/collections/maxi-dresses",
      objectPosition: "center",
    },
    {
      imageSrc: "/khaled-ghareeb.jpg",
      altText: "Woman in white sweater and brown jacket outdoors.",
      heading: "Layering Aesthetics",
      buttonText: "SHOP LAYERING EDIT",
      buttonLink: "/layering-edit",
      objectPosition: "center",
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