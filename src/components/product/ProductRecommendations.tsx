// ProductRecommendations.tsx
"use client";

import React, { useState } from "react";
import ProductCarousel from "./ProductCarousel";
import CarouselHeader from "./CarouselHeader";

const CustomStyles = () => (
  <style>
    {`
      /* hide scrollbar cross-browser */
      .hide-scrollbar::-webkit-scrollbar { display: none; }
      .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    `}
  </style>
);

const initialCategories: Category[] = [
  { name: "Fall Savings Event", selected: true },
  { name: "Women", selected: false },
  { name: "Beauty", selected: false },
  { name: "Men", selected: false },
  { name: "Kids", selected: false },
  { name: "Home", selected: false },
];

const initialProducts: Product[] = [
  {
    id: "1",
    name: "Vince Camuto Slipdress with Turtleneck Sweater",
    brand: "Vince Camuto",
    imageUrl:
      "https://n.nordstrommedia.com/it/bd125fcf-0332-49d9-a80e-f36d9a5faa6b.jpeg?q=45&dpr=2&h=353&w=230",
    linkUrl: "/s/slipdress-with-turtleneck-sweater/8507253",
    currentPrice: "$111.75",
    previousPrice: "$149",
    savingsEvent: "Savings Event",
    isPopular: true,
  },
  {
    id: "2",
    name: "All in Favor Floral High Pile Fleece Jacket",
    brand: "All in Favor",
    imageUrl:
      "https://n.nordstrommedia.com/it/dd10d902-f69c-4eb2-8701-e9030e5c48f3.jpeg?q=45&dpr=2&h=353&w=230",
    linkUrl: "/s/floral-high-pile-fleece-jacket/8467864",
    currentPrice: "$51.75",
    previousPrice: "$69",
    savingsEvent: "Savings Event",
    isPopular: true,
    rating: 4.1,
    reviewCount: 154,
    colors: [
      {
        name: "BLACK WHITE",
        imageUrl:
          "https://n.nordstrommedia.com/it/5c20c130-6882-4113-a9ec-83f6a53ae03c.jpeg?h=16&w=16&dpr=2&quality=45&swatch=true",
        selected: true,
      },
    ],
  },
  {
    id: "3",
    name: "Tucker + Tate Kids' Fleece Hoodie & Pants Set",
    brand: "Tucker + Tate",
    imageUrl:
      "https://n.nordstrommedia.com/it/b54107b1-b5de-4693-b77f-5d4af18ca707.jpeg?q=45&dpr=2&h=353&w=230",
    linkUrl: "/s/kids-fleece-hoodie-pants-set/8354203",
    currentPrice: "$36.75",
    previousPrice: "$49",
    savingsEvent: "Savings Event",
    isPopular: true,
    colors: [
      {
        name: "LEOPARD",
        imageUrl:
          "https://n.nordstrommedia.com/it/39debf95-794a-4f8e-820b-3b08ff676587.jpeg?h=16&w=16&dpr=2&quality=45&swatch=true",
        selected: true,
      },
    ],
  },
  {
    id: "4",
    name: 'Cuisine::pro® Damashiro EMPEROR® 5" Santoku Knife',
    brand: "Cuisine::pro®",
    imageUrl:
      "https://n.nordstrommedia.com/it/b8b73dcc-cb1b-40a0-b5ec-de4f9022b933.png?q=45&dpr=2&h=353&w=230",
    linkUrl: "/s/damashiro-emperor-5-try-me-santoku-knife/8452672",
    currentPrice: "$29.99",
    previousPrice: "$99.99",
    savingsEvent: "Savings Event",
    isPopular: true,
  },
  {
    id: "5",
    name: "BP. Baggy Wide Leg Sweatpants",
    brand: "BP.",
    imageUrl:
      "https://n.nordstrommedia.com/it/d783e7a1-493a-478b-9b2f-bb6ce9d48a6b.jpeg?q=45&dpr=2&h=353&w=230",
    linkUrl: "/s/bp-baggy-wide-leg-sweatpants/7872763",
    currentPrice: "$29.62",
    previousPrice: "$39.50",
    savingsEvent: "Savings Event",
    isPopular: true,
    rating: 4.1,
    reviewCount: 154,
  },
  {
    id: "6",
    name: "Marshall Acton III Bluetooth® Speaker",
    brand: "Marshall",
    imageUrl:
      "https://n.nordstrommedia.com/it/e3dcc0d5-d293-4b1c-ba33-3cb7cf098efb.jpeg?q=45&dpr=2&h=353&w=230",
    linkUrl: "/s/marshall-acton-iii-bluetooth-speaker/7096988",
    currentPrice: "$224.99",
    previousPrice: "$299.99",
    savingsEvent: "Savings Event",
    isPopular: true,
    rating: 4.5,
    reviewCount: 185,
  },
];
export default function ProductRecommendations() {
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [products] = useState<Product[]>(initialProducts);

  const handleCategorySelect = (name: string) => {
    setCategories((cs) => cs.map((c) => ({ ...c, selected: c.name === name })));
  };

  return (
    <section className="w-full h-fit bg-white font-sans flex flex-col border-8 border-gray-200">
      <CustomStyles />

      {/* Header + categories */}
      <div className="px-6 md:px-12 pt-8 pb-4">
        <CarouselHeader
          title="Sale Picks for You"
          categories={categories}
          onCategorySelect={handleCategorySelect}
        />
      </div>

      {/* Carousel area fills remaining viewport height */}
      <div className="flex-1 px-4 md:px-12 pb-8">
        <ProductCarousel products={products} />
      </div>
    </section>
  );
}
