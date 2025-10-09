'use client';
import { useState } from "react";
import ProductCarousel from "./ProductCarousel";
import CarouselHeader from "./CarouselHeader";


const CustomStyles = () => (
  <style>
    {`
      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
      .hide-scrollbar {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
      }
    `}
  </style>
);

// Mock Data
const initialCategories: Category[] = [
  { name: 'Fall Savings Event', selected: true },
  { name: 'Fall Savings Event for Women', selected: false },
  { name: 'Beauty Fall Savings Event', selected: false },
  { name: 'Fall Savings Event for Men', selected: false },
  { name: 'Fall Savings Event for Kids', selected: false },
  { name: 'Home Fall Savings Event', selected: false },
];

const initialProducts: Product[] = [
  {
    id: '1',
    name: 'Vince Camuto Slipdress with Turtleneck Sweater',
    brand: 'Vince Camuto',
    imageUrl: 'https://n.nordstrommedia.com/it/bd125fcf-0332-49d9-a80e-f36d9a5faa6b.jpeg?q=45&dpr=2&h=353&w=230',
    linkUrl: '/s/slipdress-with-turtleneck-sweater/8507253',
    currentPrice: '$111.75',
    previousPrice: '$149',
    savingsEvent: 'Savings Event',
    isPopular: true,
  },
  {
    id: '2',
    name: 'All in Favor Floral High Pile Fleece Jacket',
    brand: 'All in Favor',
    imageUrl: 'https://n.nordstrommedia.com/it/dd10d902-f69c-4eb2-8701-e9030e5c48f3.jpeg?q=45&dpr=2&h=353&w=230',
    linkUrl: '/s/floral-high-pile-fleece-jacket/8467864',
    currentPrice: '$51.75',
    previousPrice: '$69',
    savingsEvent: 'Savings Event',
    isPopular: true,
    rating: 4.1,
    reviewCount: 154,
    colors: [
      { name: 'BLACK WHITE', imageUrl: 'https://n.nordstrommedia.com/it/5c20c130-6882-4113-a9ec-83f6a53ae03c.jpeg?h=16&w=16&dpr=2&quality=45&swatch=true', selected: true },
    ],
  },
  {
    id: '3',
    name: "Tucker + Tate Kids' Fleece Hoodie & Pants Set",
    brand: 'Tucker + Tate',
    imageUrl: 'https://n.nordstrommedia.com/it/b54107b1-b5de-4693-b77f-5d4af18ca707.jpeg?q=45&dpr=2&h=353&w=230',
    linkUrl: '/s/kids-fleece-hoodie-pants-set/8354203',
    currentPrice: '$36.75',
    previousPrice: '$49',
    savingsEvent: 'Savings Event',
    isPopular: true,
    colors: [
      { name: 'LEOPARD', imageUrl: 'https://n.nordstrommedia.com/it/39debf95-794a-4f8e-820b-3b08ff676587.jpeg?h=16&w=16&dpr=2&quality=45&swatch=true', selected: true },
    ],
  },
  {
    id: '4',
    name: 'Cuisine::pro® Damashiro EMPEROR® 5" Santoku Knife',
    brand: 'Cuisine::pro®',
    imageUrl: 'https://n.nordstrommedia.com/it/b8b73dcc-cb1b-40a0-b5ec-de4f9022b933.png?q=45&dpr=2&h=353&w=230',
    linkUrl: '/s/damashiro-emperor-5-try-me-santoku-knife/8452672',
    currentPrice: '$29.99',
    previousPrice: '$99.99',
    savingsEvent: 'Savings Event',
    isPopular: true,
  },
  {
    id: '5',
    name: 'BP. Baggy Wide Leg Sweatpants',
    brand: 'BP.',
    imageUrl: 'https://n.nordstrommedia.com/it/d783e7a1-493a-478b-9b2f-bb6ce9d48a6b.jpeg?q=45&dpr=2&h=353&w=230',
    linkUrl: '/s/bp-baggy-wide-leg-sweatpants/7872763',
    currentPrice: '$29.62',
    previousPrice: '$39.50',
    savingsEvent: 'Savings Event',
    isPopular: true,
    rating: 4.1,
    reviewCount: 154,
  },
  {
    id: '6',
    name: 'Marshall Acton III Bluetooth® Speaker',
    brand: 'Marshall',
    imageUrl: 'https://n.nordstrommedia.com/it/e3dcc0d5-d293-4b1c-ba33-3cb7cf098efb.jpeg?q=45&dpr=2&h=353&w=230',
    linkUrl: '/s/marshall-acton-iii-bluetooth-speaker/7096988',
    currentPrice: '$224.99',
    previousPrice: '$299.99',
    savingsEvent: 'Savings Event',
    isPopular: true,
    rating: 4.5,
    reviewCount: 185,
  },
];


const ProductRecommendations = () => {
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [products] = useState<Product[]>(initialProducts);
  const [currentScroll, setCurrentScroll] = useState(0); // Scroll position in pixels
  

  const isLeftDisabled = currentScroll === 0;

  const isRightDisabled = currentScroll > 100;

  const handleCategorySelect = (categoryName: string) => {
    setCategories(
      categories.map(c => ({
        ...c,
        selected: c.name === categoryName,
      }))
    );

    setCurrentScroll(0); // Reset scroll on category change
  };

  const handleNavigate = (direction: 'left' | 'right') => {
    const step = 250; // Pixels to scroll per click
    if (direction === 'left') {
      setCurrentScroll(prev => Math.max(0, prev - step));
    } else {
      setCurrentScroll(prev => prev + step);
    }
  };

  return (
    <section className="product-recommendations-shelf p-4 md:p-8 bg-white font-sans rounded-lg shadow-xl max-w-7xl mx-auto my-8">
      <CustomStyles /> 
      <div id="product-recommendations-shelf-container">
        
        {/* 1. Header Component */}
        <CarouselHeader
          title="Sale Picks for You"
          categories={categories}
          onCategorySelect={handleCategorySelect}
        />

        {/* 2. Card Container*/}
        <ProductCarousel
          products={products}
          currentScroll={currentScroll}
          onNavigate={handleNavigate}
          isLeftDisabled={isLeftDisabled}
          isRightDisabled={isRightDisabled}
        />

      </div>
    </section>
  );
};

export default ProductRecommendations;