import React from "react";
import ProductCard from "./ProductCard"; 

interface ProductCarouselProps {
  products: Product[];
  currentScroll: number;
  onNavigate: (direction: 'left' | 'right') => void;
  isLeftDisabled: boolean;
  isRightDisabled: boolean;
}

const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path fill="#191A1B" d="M14.207 17.707a1 1 0 0 0 0-1.414L9.914 12l4.293-4.293a1 1 0 0 0-1.414-1.414l-5 5a1 1 0 0 0 0 1.414l5 5a1 1 0 0 0 1.414 0"></path>
  </svg>
);

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path fill="#191A1B" d="M9.793 6.293a1 1 0 0 0 0 1.414L14.086 12l-4.293 4.293a1 1 0 1 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 0"></path>
  </svg>
);


const ProductCarousel: React.FC<ProductCarouselProps> = ({
  products,
  currentScroll,
  onNavigate,
  isLeftDisabled,
  isRightDisabled,
}) => {

  const carouselRef = React.useRef<HTMLUListElement>(null);

  // Effect to manually apply transform for carousel effect (simulating a carousel)
  React.useEffect(() => {
    if (carouselRef.current) {
        // Apply scroll/translation position
        carouselRef.current.style.transform = `translate3d(-${currentScroll}px, 0px, 0px)`;
    }
  }, [currentScroll]);
    
  return (
    <div className="carousel-outer-wrapper relative">
      <section className="carousel-inner-section relative">
        {/* Left Navigation Button - Added hover and active effects */}
        <button
          className="carousel-nav-btn absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/80 shadow-lg transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hidden md:block hover:bg-white hover:shadow-xl active:scale-95"
          disabled={isLeftDisabled}
          aria-label="Swipe Left"
          type="button"
          onClick={() => onNavigate('left')}
        >
          <ChevronLeft />
        </button>

        {/* Product List Container (Handles horizontal scrolling/translation) */}
        <div className="product-list-container overflow-hidden">
          <ul
            ref={carouselRef}
            className="product-list-track flex space-x-4 transition-transform duration-600 ease-in-out"
            style={{
              padding: '0px',
              position: 'relative',
              margin: '0px',
              // Tailwind classes for horizontal scrolling on mobile/small screens (optional fallback)
              overflowX: 'scroll',
              scrollSnapType: 'x mandatory',
            }}
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ul>
        </div>

        {/* Right Navigation Button - Added hover and active effects */}
        <button
          className="carousel-nav-btn absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/80 shadow-lg transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hidden md:block hover:bg-white hover:shadow-xl active:scale-95"
          disabled={isRightDisabled}
          aria-label="Swipe Right"
          type="button"
          onClick={() => onNavigate('right')}
        >
          <ChevronRight />
        </button>
      </section>
    </div>
  );
};

export default ProductCarousel
