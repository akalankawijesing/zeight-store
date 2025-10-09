import HeroSlider from "@/components/layout/HeroSlider";
import OfferBoxImage from "@/components/layout/OfferBoxImage";
import OfferImageText from "@/components/layout/OfferImageText";
import ProductRecommendations from "@/components/product/ProductRecommendations";

export default async function Home() {
  return (
    <>
      <HeroSlider />
      <ProductRecommendations />
      {/*<OfferBoxImage src="/Desktop_beauty.webp" width={1920} height={760}  alt="Online beauty offer with 15-20% off on perfumes and nail polish"/>      */}
      <OfferImageText
        src="/frendsmans.jpg"
        alt="Makeup offer with 15-20% off on perfumes and nail polish"
      />
    </>
  );
}
