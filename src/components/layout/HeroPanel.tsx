"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const HeroPanel: React.FC<HeroPanelProps> = ({
  imageSrc,
  altText,
  heading,
  buttonText,
  buttonLink,
  objectPosition,
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
        style={{ objectPosition: objectPosition || "center" }}
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

export default HeroPanel;
