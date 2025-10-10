"use client";

import Image from "next/image";
import React from "react";
import StarRating from "../utils/StarRating";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <article
      className="w-full sm:w-[14rem] md:w-[16rem] bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transform transition-all duration-200 active:scale-[0.995]"
      aria-labelledby={`prod-${product.id}-title`}
    >
      <a
        href={product.linkUrl}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black"
        aria-label={product.name}
      >
        {/* Image */}
        <div className="relative w-full aspect-[4/6]">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-t-md"
            sizes="(max-width: 640px) 45vw, (max-width: 1280px) 22vw, 230px"
            loading="lazy"
          />
          {product.isPopular && (
            <span className="absolute top-2 left-2 text-xs font-semibold bg-white/90 px-2 py-0.5 rounded-full shadow">
              Popular
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-3 flex flex-col justify-between h-auto">
          {/* Colors */}
          <div className="flex gap-2 mb-2 items-center min-h-[1rem] flex-wrap">
            {product.colors && product.colors.length > 0 ? (
              product.colors.map((col) => (
                <span
                  key={col.name}
                  title={col.name}
                  className={`w-4 h-4 rounded-full border ${
                    col.selected ? "ring-2 ring-offset-1 ring-gray-900" : "border-gray-200"
                  }`}
                  style={{ backgroundImage: `url("${col.imageUrl}")`, backgroundSize: "cover" }}
                />
              ))
            ) : (
              <div className="w-4 h-4 invisible" />
            )}
          </div>

          {/* Savings Event */}
          <div className="text-xs font-bold text-red-700 uppercase min-h-[1rem]">
            {product.savingsEvent || <span className="invisible">placeholder</span>}
          </div>

          {/* Brand */}
          <h3
            id={`prod-${product.id}-title`}
            className="text-sm font-medium text-gray-900 truncate mt-1 min-h-[1.5rem]"
          >
            {product.brand}
          </h3>

          {/* Price */}
          <div className="mt-2 flex items-baseline gap-2 min-h-[1.5rem]">
            <div className="text-sm font-bold text-gray-900">{product.currentPrice}</div>
            {product.previousPrice && (
              <div className="text-xs text-gray-500 line-through">{product.previousPrice}</div>
            )}
          </div>

          {/* Ratings */}
          <div className="mt-2 min-h-[1.5rem]">
            {product.rating !== undefined ? (
              <StarRating rating={product.rating} reviewCount={product.reviewCount} />
            ) : (
              <div className="h-4" />
            )}
          </div>
        </div>
      </a>
    </article>
  );
};

export default ProductCard;
