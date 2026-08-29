"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { REVIEWS } from "@/constants/content";
import { SwiperArrow } from "@/components/ui/SwiperArrow/SwiperArrow";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./Reviews.module.scss";

function StarIcon() {
  return (
    <svg
      className={styles.reviews__star}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.5l2.832 5.736 6.332.92-4.582 4.466 1.082 6.306L12 16.99l-5.664 2.938 1.082-6.306L2.836 9.156l6.332-.92L12 2.5z" />
    </svg>
  );
}

export function Reviews() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section id="reviews" className={`section ${styles.reviews}`}>
      <div className={`container ${styles.reviews__wrap}`}>
        <Reveal as="h2" className={styles.reviews__title}>
          Відгуки
        </Reveal>

        <Reveal className={styles.reviews__row} delay={0.1} y={20}>
          <SwiperArrow
            direction="prev"
            className={`${styles.reviews__arrow} ${styles["reviews__arrow--prev"]}`}
            aria-label="Попередній відгук"
            onClick={() => swiperRef.current?.slidePrev()}
          />

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
              768: { slidesPerView: "auto", spaceBetween: 16 },
              1440: { slidesPerView: "auto", spaceBetween: 24 },
            }}
            className={styles.reviews__swiper}
          >
            {REVIEWS.map((review) => (
              <SwiperSlide key={review.name} className={styles.reviews__slide}>
                <article className={styles.reviews__card}>
                  <div className={styles.reviews__user}>
                    <div className={styles.reviews__avatarWrap}>
                      <img
                        className={styles.reviews__avatar}
                        src={review.photo}
                        srcSet={`${review.photo} 1x, ${review.photo2x} 2x`}
                        alt=""
                        width={80}
                        height={80}
                      />
                    </div>
                    <div className={styles.reviews__meta}>
                      <h3 className={styles.reviews__name}>
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

          <SwiperArrow
            direction="next"
            className={`${styles.reviews__arrow} ${styles["reviews__arrow--next"]}`}
            aria-label="Наступний відгук"
            onClick={() => swiperRef.current?.slideNext()}
          />
        </Reveal>
      </div>
    </section>
  );
}
