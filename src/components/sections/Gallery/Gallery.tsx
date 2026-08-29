"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { SwiperArrow } from "@/components/ui/SwiperArrow/SwiperArrow";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./Gallery.module.scss";

const IMAGES = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Група на зустрічі з психологом Царьовою Юлією",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Учасниці зустрічі та консультації",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Команда та клієнти на заході",
  },
];

export function Gallery() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section
      className={`section ${styles.gallery}`}
      aria-labelledby="gallery-title"
    >
      <div className={`container ${styles.gallery__wrap}`}>
        <Reveal as="h2" id="gallery-title" className={styles.gallery__title}>
          Галерея
        </Reveal>

        <Reveal className={styles.gallery__row} delay={0.1} y={20}>
          <SwiperArrow
            direction="prev"
            className={`${styles.gallery__arrow} ${styles["gallery__arrow--prev"]}`}
            aria-label="Попереднє фото"
            onClick={() => swiperRef.current?.slidePrev()}
          />

          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            rewind
            watchOverflow
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              768: { slidesPerView: "auto", spaceBetween: 24 },
            }}
            className={styles.gallery__swiper}
          >
            {IMAGES.map((img) => (
              <SwiperSlide key={img.src} className={styles.gallery__slide}>
                <figure className={styles.gallery__figure}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    width={332}
                    height={300}
                    loading="lazy"
                  />
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>

          <SwiperArrow
            direction="next"
            className={`${styles.gallery__arrow} ${styles["gallery__arrow--next"]}`}
            aria-label="Наступне фото"
            onClick={() => swiperRef.current?.slideNext()}
          />
        </Reveal>
      </div>
    </section>
  );
}
