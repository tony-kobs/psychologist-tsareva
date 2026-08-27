"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { REVIEWS } from "@/constants/content";
import styles from "./Reviews.module.scss";

function StarIcon() {
  return (
    <svg
      className={styles.reviews__star}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M10 1.5l2.472 5.01 5.528.804-4 3.9.944 5.506L10 14.11l-4.944 2.61.944-5.506-4-3.9 5.528-.804L10 1.5z" />
    </svg>
  );
}

export function Reviews() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section id="reviews" className={`section ${styles.reviews}`}>
      <div className="container">
        <div className={styles.reviews__head}>
          <h2 className={styles.reviews__title}>Відгуки</h2>
          <div className={styles.reviews__nav}>
            <button
              type="button"
              className={styles.reviews__arrow}
              aria-label="Попередній відгук"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              className={styles.reviews__arrow}
              aria-label="Наступний відгук"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1}
          rewind
          watchOverflow
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 20 },
            1440: { slidesPerView: 3, spaceBetween: 40 },
          }}
          className={styles.reviews__swiper}
        >
          {REVIEWS.map((review) => (
            <SwiperSlide key={review.name} className={styles.reviews__slide}>
              <article className={styles.reviews__card}>
                <div className={styles.reviews__user}>
                  <img
                    className={styles.reviews__avatar}
                    src={review.photo}
                    srcSet={`${review.photo} 1x, ${review.photo2x} 2x`}
                    alt=""
                    width={60}
                    height={60}
                  />
                  <div className={styles.reviews__meta}>
                    <h3>
                      {review.name}, {review.age}
                    </h3>
                    <div
                      className={styles.reviews__stars}
                      aria-label={`${review.rating} з 5`}
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span
                          key={i}
                          className={
                            i < review.rating
                              ? styles.reviews__starWrap
                              : `${styles.reviews__starWrap} ${styles["reviews__starWrap--empty"]}`
                          }
                        >
                          <StarIcon />
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className={styles.reviews__text}>{review.text}</p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
