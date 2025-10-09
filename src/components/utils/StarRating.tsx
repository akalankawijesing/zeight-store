import React from 'react'

const StarRating = ({rating, reviewCount}:{ rating?:number, reviewCount?:number }) =>{
  if (rating === undefined || reviewCount === undefined) return null;

  const ratingPercent = (rating/5)*100;
  const reviewCountDisplay = `(${reviewCount})`;
  return(
        <span className="flex items-center space-x-1">
      {/* Star Icon Wrapper (Ensures the rating is displayed relative to a fixed width) */}
      <span role="img" className="relative inline-block w-16 h-4" aria-label={`${rating} out of 5 stars`}>
        {/* Base stars (Grey background) */}
        <span className="absolute inset-0 text-gray-300 overflow-hidden">
          {/* Using text emoji for simplicity; replace with SVG if needed */}
          ★★★★★
        </span>
        {/* Filled stars (Yellow foreground, width determined by ratingPercent) */}
        <span className="absolute inset-0 text-yellow-500 overflow-hidden" style={{ width: `${ratingPercent}%` }}>
          ★★★★★
        </span>
      </span>
      <span className="text-xs text-gray-500">{reviewCountDisplay}</span>
    </span>
  );
}

export default StarRating