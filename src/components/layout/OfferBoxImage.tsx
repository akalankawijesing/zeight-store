import Image from "next/image";

import React from "react";

const OfferBoxImage = ({src,width,height,alt}:{src:string,width:number,height:number,alt:string}) => {
  return (
    <div>
      <Image
        className="dark:invert"
        src={src}
        alt={alt}
        width={width}
        height={height} 
        priority={true}
      />
    </div>
  );
}

export default OfferBoxImage;
