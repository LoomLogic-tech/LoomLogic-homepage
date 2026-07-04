'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

const showcaseImages = [
  { src: '/assets/showcase/showcase-1.png', alt: 'Kettlebell Character Design' },
  { src: '/assets/showcase/showcase-2.png', alt: 'Bird Mascot Illustration' },
  { src: '/assets/showcase/showcase-3.png', alt: 'Product Showcase Design' },
  { src: '/assets/showcase/showcase-4.png', alt: 'App UI Design' },
  { src: '/assets/showcase/showcase-5.png', alt: 'Abstract 3D Art' },
];

export default function DesignCreativitySection() {
  return (
    <section className="bg-[#1B2632] overflow-hidden pb-16 pt-20">
      {/* ─── Section Header ─── */}
      <div className="mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-0">
        {/* Title */}
        <h2 className="text-[42px] font-semibold leading-tight text-white sm:text-5xl lg:text-[50px]">
          Design and <span className="italic text-[#FFB162]">Creativity</span>
        </h2>

        {/* Orange underline */}
        <div className="mx-auto mt-3 h-[2px] max-w-[500px] bg-gradient-to-r from-transparent via-[#FFB162] to-transparent" />

        {/* Description */}
        <p className="mx-auto mt-4 max-w-[620px] text-[14px] font-normal leading-relaxed text-[#B5B8C0] sm:text-[16px]">
          We design intuitive websites, user interfaces, and visual content that
          elevate your brand. Our focus is on clarity, creativity, and crafting
          experiences that truly connect with users.
        </p>
      </div>

      {/* ─── Image Carousel ─── */}
      <div className="mt-14">
        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          effect="coverflow"
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={4000}
          coverflowEffect={{
            rotate: 0,
            stretch: 60,
            depth: 180,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            640: {
              coverflowEffect: {
                stretch: 80,
                depth: 200,
              },
            },
          }}
          className="design-carousel"
        >
          {showcaseImages.map((image, index) => (
            <SwiperSlide
              key={index}
              className="!w-[260px] sm:!w-[320px] lg:!w-[360px]"
            >
              <div className="group overflow-hidden rounded-2xl border border-white/10 bg-[#2C3B4E]/30 shadow-[0_14px_28px_rgba(4,10,18,0.45)] transition-shadow duration-500 hover:shadow-[0_18px_36px_rgba(255,177,98,0.12)]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={360}
                  height={440}
                  className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] sm:h-[400px] lg:h-[440px]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
