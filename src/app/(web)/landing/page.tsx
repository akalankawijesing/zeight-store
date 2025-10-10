import DualHeroSection from "@/components/layout/DualHeroSection";
import FashionGridSection from "@/components/layout/FashionGridSection";
import HeroSlider from "@/components/layout/HeroSlider";
import OfferBoxImage from "@/components/layout/OfferBoxImage";
import OfferImageText from "@/components/layout/OfferImageText";
import PromoBanner from "@/components/layout/PromoBanner";
import ProductRecommendations from "@/components/product/ProductRecommendations";
import TrendingNearYou from "@/components/product/TrendingNearYou";

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
      <TrendingNearYou />
      <PromoBanner />
      <FashionGridSection />
      <DualHeroSection />
    </>
  );
}
