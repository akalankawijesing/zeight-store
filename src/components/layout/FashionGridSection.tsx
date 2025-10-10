'use client';
import React, { useState } from 'react';
import { ShoppingBag, Heart, Eye } from 'lucide-react';

const FashionGridSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const gridItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
      title: "Casual Elegance",
      subtitle: "Summer Collection",
      category: "Women's Fashion",
      span: "row-span-2"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=800&q=80",
      title: "Smart Casual",
      subtitle: "Premium Basics",
      category: "Men's Style",
      span: "row-span-2"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
      title: "Contemporary",
      subtitle: "New Arrivals",
      category: "Trending Now",
      span: "row-span-2"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&q=80",
      title: "Athleisure",
      subtitle: "Active Wear",
      category: "Sport & Comfort",
      span: "row-span-1"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80",
      title: "Vintage Vibes",
      subtitle: "Curated Pieces",
      category: "Special Edition",
      span: "row-span-2"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80",
      title: "Accessories",
      subtitle: "Complete Your Look",
      category: "Must Haves",
      span: "row-span-1"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-stone-50">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm tracking-[0.3em] text-stone-500 uppercase font-light">
            Discover Your Style
          </p>
          <h1 className="text-5xl md:text-6xl font-light text-stone-900 tracking-tight">
            Curated Collections
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto font-light">
            Explore our carefully selected pieces that blend timeless elegance with contemporary design
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px]">
          {gridItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-lg ${item.span} cursor-pointer`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className={`transform transition-all duration-500 ${
                  hoveredIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  <p className="text-xs tracking-[0.2em] text-white/80 uppercase mb-2">
                    {item.category}
                  </p>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-light text-white mb-1 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-white/90 font-light mb-4">
                  {item.subtitle}
                </p>

                {/* Action Buttons */}
                <div className={`flex gap-3 transform transition-all duration-500 ${
                  hoveredIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  <button className="p-2.5 bg-white/90 hover:bg-white rounded-full transition-all duration-300 group/btn">
                    <ShoppingBag className="w-4 h-4 text-stone-900 group-hover/btn:scale-110 transition-transform" />
                  </button>
                  <button className="p-2.5 bg-white/90 hover:bg-white rounded-full transition-all duration-300 group/btn">
                    <Heart className="w-4 h-4 text-stone-900 group-hover/btn:scale-110 transition-transform" />
                  </button>
                  <button className="p-2.5 bg-white/90 hover:bg-white rounded-full transition-all duration-300 group/btn">
                    <Eye className="w-4 h-4 text-stone-900 group-hover/btn:scale-110 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Corner Badge */}
              <div className={`absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full transform transition-all duration-500 ${
                hoveredIndex === index ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}>
                <span className="text-xs font-medium text-stone-900 tracking-wide">
                  EXPLORE
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <button className="group relative px-8 py-4 bg-stone-900 text-white rounded-full overflow-hidden transition-all duration-300 hover:px-12">
            <span className="relative z-10 tracking-wide font-light">
              View Full Collection
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-stone-800 to-stone-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
        </div>
      </div>

      {/* Features Strip */}
      <div className="border-t border-stone-200 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <h4 className="font-medium text-stone-900 tracking-wide">FREE SHIPPING</h4>
              <p className="text-sm text-stone-600 font-light">On orders over $100</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-stone-900 tracking-wide">EASY RETURNS</h4>
              <p className="text-sm text-stone-600 font-light">30-day return policy</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-stone-900 tracking-wide">PREMIUM QUALITY</h4>
              <p className="text-sm text-stone-600 font-light">Carefully crafted pieces</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FashionGridSection;