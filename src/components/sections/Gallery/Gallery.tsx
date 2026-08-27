"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./Gallery.module.scss";

const IMAGES = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Робочий простір психолога Царьової Юлії",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Атмосфера консультацій та арт-терапії",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Затишний кабінет для особистих зустрічей у Харкові",
  },
];

export function Gallery() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className={`section section--alt ${styles.gallery}`} aria-labelledby="gallery-title">
      <div className="container">
        <div className={styles.gallery__head}>
          <h2 id="gallery-title" className={styles.gallery__title}>
            Галерея
          </h2>
          <div className={styles.gallery__nav}>
            <button
              type="button"
              className={styles.gallery__arrow}
              aria-label="Попереднє фото"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              className={styles.gallery__arrow}
              aria-label="Наступне фото"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          rewind
          watchOverflow
          pagination={{ clickable: true }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 20 },
            1440: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className={styles.gallery__swiper}
        >
          {IMAGES.map((img) => (
            <SwiperSlide key={img.src}>
              <figure className={styles.gallery__figure}>
                <img src={img.src} alt={img.alt} width={480} height={320} loading="lazy" />
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
