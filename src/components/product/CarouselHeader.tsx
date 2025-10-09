// CarouselHeader.tsx
"use client";

import React from "react";

interface Props {
  title: string;
  categories: Category[];
  onCategorySelect: (name: string) => void;
}

export default function CarouselHeader({ title, categories, onCategorySelect }: Props) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">{title}</h2>
        {/* optional: See All link */}
        <a href="#all" className="text-sm text-gray-600 hover:text-gray-900">
          See all
        </a>
      </div>

      <nav aria-label="Categories" className="mt-4">
        <div className="overflow-x-auto hide-scrollbar">
          <ul className="flex gap-3 pb-2">
            {categories.map(cat => (
              <li key={cat.name}>
                <button
                  type="button"
                  onClick={() => onCategorySelect(cat.name)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition ${
                    cat.selected
                      ? "bg-gray-900 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  } focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-900`}
                >
                  {cat.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
