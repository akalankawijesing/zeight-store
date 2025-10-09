// OfferImageTextFull.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card, CardContent } from "../ui/card";

type Props = {
  src: string;
  alt: string;
  badge?: string;
  title?: string;
  headline?: string;
  subtitle?: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export default function OfferImageTextFull({
  src,
  alt,
  badge = "Online Only",
  title = "Beauty",
  headline = "15–20% Off",
  subtitle = "A great selection of products. Ends 10/9.",
  ctaHref = "#",
  ctaLabel = "Shop Now",
}: Props) {
  return (
    <section
      aria-label={`${title} promotion`}
      className="w-full h-screen flex items-stretch"
      role="region"
    >
      <Card className="w-full h-full overflow-hidden rounded-none shadow-none">
        <CardContent className="grid grid-cols-1 md:grid-cols-2 h-full p-0">
          {/* TEXT COLUMN: full-height, centered */}
          <div className="order-2 md:order-1 flex items-center justify-center bg-[#f8f6f2] p-6 md:p-12">
            <div className="max-w-xl mx-auto text-center md:text-left">
              <header className="mb-4">
                <p className="inline-block text-xs font-semibold tracking-widest uppercase text-gray-800 bg-white/0 px-2 py-1 rounded">
                  {badge}
                </p>
              </header>

              <hgroup className="space-y-2 mb-6">
                <h3 className="text-4xl md:text-6xl font-light uppercase tracking-tight text-black leading-tight">
                  {title}
                </h3>
                <p className="text-5xl md:text-[5.25rem] lg:text-[6rem] font-extrabold uppercase tracking-tight leading-none">
                  {headline}
                </p>
              </hgroup>

              <p className="text-sm md:text-base text-gray-700 mb-6 max-w-md">
                {subtitle}
              </p>

              <div className="flex justify-center md:justify-start gap-3">
                <Link
                  href={ctaHref}
                  aria-label={ctaLabel}
                  className="inline-flex items-center justify-center rounded-2xl border border-black px-5 py-3 text-sm font-semibold uppercase tracking-widest transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black hover:shadow-md active:translate-y-[0.5px]"
                >
                  {ctaLabel}
                </Link>

                <Link
                  href={`${ctaHref}#details`}
                  className="inline-flex items-center justify-center rounded-2xl px-4 py-3 text-sm font-medium text-gray-700 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-400"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>

          {/* IMAGE COLUMN: full-height cover */}
          <div className="order-1 md:order-2 relative w-full h-full bg-gray-50">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "top" }}
              priority
            />
            {/* gradient overlay for contrast */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/90 md:to-white/95"
            />
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
