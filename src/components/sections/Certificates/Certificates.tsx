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
        <h2 className={styles.certs__title}>Сертифікати</h2>
        <ul className={styles.certs__grid}>
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
        </ul>
      </div>
    </section>
  );
}
