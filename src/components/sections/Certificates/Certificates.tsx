"use client";

import { Reveal, Stagger } from "@/components/ui/Reveal";
import styles from "./Certificates.module.scss";

const CERTS = [
  "/images/sertificate-1.png",
  "/images/sertificate-2.png",
  "/images/sertificate-3.png",
  "/images/sertificate-4.png",
];

export function Certificates() {
  return (
    <section id="certificates" className={`section ${styles.certs}`}>
      <div className="container">
        <Reveal as="h2" className={styles.certs__title}>
          Сертифікати
        </Reveal>
        <Stagger as="ul" className={styles.certs__grid} stagger={0.09}>
          {CERTS.map((src, i) => (
            <li key={src} className={styles.certs__item}>
              <img
                src={src}
                alt={`Сертифікат ${i + 1}`}
                width={400}
                height={280}
                loading="lazy"
              />
            </li>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
