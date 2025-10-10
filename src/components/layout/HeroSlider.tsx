"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade, Navigation } from "swiper/modules";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

interface Slide {
  bg: string;
  img: string;
  alt?: string;
  heading?: string;
  subheading?: string;
  buttonText?: string;
  buttonLink?: string;
  textPosition?: "left" | "center" | "right";
  darkText?: boolean;
}

export default function HeroSlider() {
  const desktopSlides: Slide[] = [
    {
      bg: "linear-gradient(135deg, #fdfbf7 0%, #f5f1e8 100%)",
      img: "https://www.desinelle.com/storage/media/IzWNj3NsxWWne7yts6iCxzIOHNteBnbGOKTlTDGX.jpg",
      heading: "Summer Collection 2025",
      subheading: "Effortless elegance for every occasion",
      buttonText: "Shop Now",
      buttonLink: "/collections/maxi-dresses",
      textPosition: "left",
    },
    {
      bg: "linear-gradient(135deg, #fff5f5 0%, #ffe8e8 100%)",
      img: "https://www.desinelle.com/storage/media/zUdS1x58j4zGSPc1rJ5sNnWXZC1yFRkriNJLadgR.jpg",
      heading: "The Layering Edit",
      subheading: "Perfect pieces for transitional style",
      buttonText: "Explore Collection",
      buttonLink: "/collections/layering-edit",
      textPosition: "center",
    },
    {
      bg: "#1a1a1a",
      img: "https://www.desinelle.com/storage/media/PchiD34wwfWsWjtkbH7PN8Hsh9oiz4fbqqT1MogX.jpg",
      heading: "Timeless Elegance",
      subheading: "Classic designs, modern sensibility",
      buttonText: "Discover More",
      buttonLink: "/collections/new-arrivals",
      textPosition: "right",
    },
    {
      bg: "#0a0a0a",
      img: "/pexels-dhanno-18885577.jpg",
      heading: "New Arrivals",
      subheading: "Fresh styles just landed",
      buttonText: "View Collection",
      buttonLink: "/collections/new",
      textPosition: "center",
    },
  ];

  const mobileSlides: Slide[] = [
    {
      bg: "linear-gradient(180deg, #c3b988 0%, #a89968 100%)",
      img: "https://www.desinelle.com/storage/media/uM0vaxj0SSVK1uUZhN1X7YsfEqoAWWix2oPbu76b.jpg",
      heading: "Summer Collection",
      subheading: "Effortless style",
      buttonText: "Shop",
      buttonLink: "/collections/maxi-dresses",
    },
    {
      bg: "linear-gradient(180deg, #e5cde1 0%, #d4b8d0 100%)",
      img: "https://www.desinelle.com/storage/media/Tz2RO32RcjAJkgBYK1UF9VCGHPgrMEM8t9bxF2y4.jpg",
      heading: "Layering Essentials",
      subheading: "Perfect for every season",
      buttonText: "Explore",
      buttonLink: "/collections/layering-edit",
    },
    {
      bg: "#1a1a1a",
      img: "https://www.desinelle.com/storage/media/s1mPbTK0qjbeB18Uj6AwcptrFVZGbmKjRefRrnPU.jpg",
      heading: "Timeless Style",
      subheading: "Classic meets modern",
      buttonText: "Shop",
      buttonLink: "/collections/new-arrivals",
    },
  ];

  const getTextAlignment = (position?: string) => {
    switch (position) {
      case "left":
        return "md:text-left md:items-start md:left-12 lg:left-20";
      case "right":
        return "md:text-right md:items-end md:right-12 lg:right-20";
      default:
        return "text-center items-center";
    }
  };

  return (
    <div className="w-full relative overflow-hidden">
      {/* Desktop Slider */}
      <section className="hidden md:block">
        <Swiper
          modules={[Pagination, Autoplay, EffectFade, Navigation]}
          pagination={{
            clickable: true,
            dynamicBullets: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          effect="fade"
          speed={1500}
          loop={true}
          className="w-full h-screen hero-swiper"
        >
          {desktopSlides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div
                className="relative w-full h-screen flex items-center justify-center group"
                style={{ background: slide.bg }}
              >
                {/* Image with parallax effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={slide.img}
                    alt={slide.alt || slide.heading || "Hero slide"}
                    fill
                    style={{ objectFit: "cover" }}
                    priority={i === 0}
                    sizes="100vw"
                    className="transform transition-transform duration-[8000ms] ease-out group-hover:scale-110"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                {/* Content */}
                {slide.heading && (
                  <div
                    className={`absolute z-10 flex flex-col ${getTextAlignment(
                      slide.textPosition
                    )} px-8 md:px-12 max-w-4xl animate-fade-in`}
                  >
                    <div className="space-y-4 md:space-y-6">
                      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-tight">
                        {slide.heading}
                      </h1>
                      {slide.subheading && (
                        <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light max-w-2xl">
                          {slide.subheading}
                        </p>
                      )}
                      {slide.buttonText && slide.buttonLink && (
                        <div className="pt-4">
                          <a
                            href={slide.buttonLink}
                            className="inline-block group/btn"
                          >
                            <button className="relative px-8 py-4 bg-white text-black font-medium tracking-wide overflow-hidden transition-all duration-300 hover:bg-black hover:text-white border-2 border-white">
                              <span className="relative z-10">
                                {slide.buttonText}
                              </span>
                              <span className="absolute inset-0 bg-black transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300"></span>
                            </button>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation Arrows */}
          <button className="swiper-button-prev-custom absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 group">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="swiper-button-next-custom absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 group">
            <ChevronRight className="w-6 h-6" />
          </button>
        </Swiper>
      </section>

      {/* Mobile Slider */}
      <section className="block md:hidden">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          speed={1000}
          loop={true}
          className="w-full h-[70vh] min-h-[500px] mobile-hero-swiper"
        >
          {mobileSlides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div
                className="relative w-full h-full flex items-center justify-center"
                style={{ background: slide.bg }}
              >
                {/* Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={slide.img}
                    alt={slide.alt || slide.heading || "Hero slide"}
                    fill
                    style={{ objectFit: "cover" }}
                    priority={i === 0}
                    sizes="100vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Mobile Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                {/* Mobile Content */}
                {slide.heading && (
                  <div className="absolute bottom-0 left-0 right-0 z-10 text-center px-6 pb-16 space-y-3">
                    <h2 className="text-3xl xs:text-4xl font-light text-white tracking-tight leading-tight">
                      {slide.heading}
                    </h2>
                    {slide.subheading && (
                      <p className="text-base xs:text-lg text-white/90 font-light">
                        {slide.subheading}
                      </p>
                    )}
                    {slide.buttonText && slide.buttonLink && (
                      <div className="pt-2">
                        <a href={slide.buttonLink}>
                          <button className="px-8 py-3 bg-white text-black font-medium tracking-wide hover:bg-black hover:text-white border-2 border-white transition-all duration-300">
                            {slide.buttonText}
                          </button>
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}