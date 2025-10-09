import StarRating from "../utils/StarRating";

const ProductCard = ({ product }:{product:Product}) => (
  // Added hover:scale-[1.02] and active:scale-[0.98] for interactive animation
  <li className="product-card flex-shrink-0 min-w-[14rem] max-w-[14rem] md:min-w-[16rem] md:max-w-[16rem] transition-all duration-300 ease-in-out rounded-lg cursor-pointer transform hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98]">
    <div className="card-content">
      {/* Product Image and Link */}
      <div className="image-wrapper">
        <a href={product.linkUrl} aria-label={product.name} className="product-link block">
          <div className="relative w-full">
            {/* Aspect Ratio Box (maintains image proportions) */}
            <div className="aspect-ratio-box w-full relative overflow-hidden rounded-md" style={{ paddingBottom: '153.478%' }}>
              {/* Image element */}
              <img
                loading="lazy"
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
                src={product.imageUrl}
                // Placeholder fallback in case the URL fails
                onError={(e) => {
                  (e.target as HTMLImageElement).onerror = null;
                  (e.target as HTMLImageElement).src = `https://placehold.co/230x353/d1d5db/4b5563?text=Product`;
                }}
              />
              {product.isPopular && (
                <div className="absolute top-2 left-2">
                  <div className="popular-tag text-xs font-semibold bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-md">
                    Popular
                  </div>
                </div>
              )}
            </div>
          </div>
        </a>
      </div>
      
      {/* Product Details */}
      <div className="product-details pt-3">
        {/* Swatch Placeholder */}
        {product.colors && product.colors.length > 0 && (
          <div className="mb-2 flex space-x-1">
            {product.colors.map((color) => (
              <button
                key={color.name}
                aria-label={`Color: ${color.name}`}
                className={`w-4 h-4 rounded-full border ${color.selected ? 'border-gray-800' : 'border-gray-300'}`}
                style={{ backgroundImage: `url("${color.imageUrl}")`, backgroundSize: 'cover' }}
              />
            ))}
          </div>
        )}

        <a href={product.linkUrl} className="product-info-link block">
          <div className="space-y-1">
            <div className="savings-event-tag text-red-700 font-bold text-xs uppercase">
              {product.savingsEvent}
            </div>
            <div title={product.brand} className="brand-name-wrapper">
              <div className="font-medium text-sm text-gray-800 truncate">
                {product.brand}
              </div>
            </div>
            <div className="price-section text-sm">
              <div className="current-price-wrap">
                <span className="current-price font-bold text-gray-900" aria-hidden="true">
                  {product.currentPrice || product.priceRange}
                </span>
              </div>
              {product.previousPrice && (
                <div className="previous-price-wrap">
                  <span className="previous-price text-gray-500 line-through text-xs" aria-hidden="true">
                    {product.previousPrice}
                  </span>
                </div>
              )}
            </div>
            <StarRating rating={product.rating} reviewCount={product.reviewCount} />
          </div>
        </a>
      </div>
    </div>
  </li>
);

export default ProductCard;