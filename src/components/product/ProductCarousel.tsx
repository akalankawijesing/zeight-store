"use client";

import React, { useRef, useEffect, useCallback, useState } from "react";
import ProductCard from "./ProductCard";
function ChevronLeft() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

export default function ProductCarousel({ products }: { products: Product[] }) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateNav = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft + el.clientWidth + 8 < el.scrollWidth);
  }, []);

  useEffect(() => {
    updateNav();
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => updateNav();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateNav);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateNav);
    };
  }, [updateNav]);

  const scrollBy = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    // scroll by viewport-ish amount (80%) so last/first card won't hang out
    const amount = Math.round(el.clientWidth * 0.8) * (dir === "left" ? -1 : 1);
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="relative w-full h-full">
      {/* IMPORTANT: clip any overflow (prevents visual bleeding) */}
      <div className="absolute inset-0 pointer-events-none md:pointer-events-auto flex items-center justify-between px-4 md:px-12 z-20">
        <button
          type="button"
          onClick={() => scrollBy("left")}
          disabled={!canScrollLeft}
          aria-label="Scroll left"
          className="hidden md:inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 shadow-md hover:shadow-lg transition disabled:opacity-40"
        >
          <ChevronLeft />
        </button>

        <button
          type="button"
          onClick={() => scrollBy("right")}
          disabled={!canScrollRight}
          aria-label="Scroll right"
          className="hidden md:inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 shadow-md hover:shadow-lg transition disabled:opacity-40"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Scroller: note the px-4/md:px-12 padding to inset first/last cards */}
      <div
        ref={scrollerRef}
        tabIndex={0}
        role="list"
        aria-label="Products carousel"
        className="hide-scrollbar w-full h-full overflow-x-auto scroll-smooth snap-x snap-mandatory py-6 px-4 md:px-12"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <ul className="flex gap-4 items-start h-full" role="list">
          {products.map((p) => (
            <li key={p.id} role="listitem" className="snap-start">
              <ProductCard product={p} />
            </li>
          ))}
        </ul>
      </div>

      {/* subtle mobile edge fades so cards don't appear cut off */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 md:hidden bg-gradient-to-r from-white/95 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 md:hidden bg-gradient-to-l from-white/95 to-transparent" />
    </div>
  );
}
