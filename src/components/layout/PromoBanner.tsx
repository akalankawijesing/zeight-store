'use client';
import React from 'react';
import { Button } from '@/components/ui/button';

const PromoBanner = ({
  discount = "25%",
  title = "TAKE",
  subtitle = "a large selection of items. Ends 10/12.",
  ctaText = "SHOP NOW",
  ctaLink = "#",
  infoLink = "#",
  infoText = "Info/Exclusions",
  gradientFrom = "from-orange-500",
  gradientTo = "to-red-500",
  textColor = "text-white",
  onCtaClick = () => {},
}) => {
  return (
    <div className={`relative w-full bg-gradient-to-r ${gradientFrom} ${gradientTo} overflow-hidden`}>
      {/* Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center py-8 px-4 sm:py-12 md:py-16">
        {/* Main Heading */}
        <div className="flex items-baseline justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight ${textColor}`}>
            {title}
          </h1>
          <span className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold ${textColor}`}>
            {discount}
          </span>
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight ${textColor}`}>
            OFF
          </h1>
        </div>

        {/* Subtitle */}
        <p className={`text-sm sm:text-base md:text-lg mb-4 sm:mb-6 ${textColor} opacity-95 text-center max-w-2xl`}>
          {subtitle}{' '}
          <a 
            href={infoLink}
            className={`underline hover:opacity-80 transition-opacity ${textColor}`}
          >
            {infoText}
          </a>
        </p>

        {/* CTA Button */}
        <Button
          onClick={onCtaClick}
          className={`${textColor} bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 hover:border-white/50 transition-all duration-300 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold tracking-wider shadow-lg hover:shadow-xl hover:scale-105`}
          asChild
        >
          <a href={ctaLink}>{ctaText}</a>
        </Button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-16 -translate-y-16 blur-2xl" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/5 rounded-full translate-x-20 translate-y-20 blur-2xl" />
    </div>
  );
};

export default PromoBanner;