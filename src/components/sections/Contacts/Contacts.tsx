"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import { SocialIcons } from "@/components/ui/SocialIcons/SocialIcons";
import { CONTACTS, PHONE, PHONE_HREF } from "@/constants/content";
import styles from "./Contacts.module.scss";

const schema = Yup.object({
  name: Yup.string()
    .trim()
    .min(2, "Введіть щонайменше 2 символи")
    .required("Вкажіть ваше ім’я"),
  phone: Yup.string()
    .trim()
    .matches(/^\+?[\d\s()-]{10,20}$/, "Введіть коректний номер телефону")
    .required("Вкажіть номер телефону"),
  email: Yup.string()
    .trim()
    .email("Введіть коректний e-mail")
    .required("Вкажіть e-mail"),
  message: Yup.string()
    .trim()
    .min(5, "Напишіть трохи більше деталей")
    .required("Напишіть повідомлення"),
});

const initialValues = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

export function Contacts() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contacts" className={`section ${styles.contacts}`}>
      <div className={`container ${styles.contacts__inner}`}>
        <div className={styles.contacts__info}>
          <h2 className={styles.contacts__title}>{CONTACTS.title}</h2>
          <p className={styles.contacts__text}>{CONTACTS.text}</p>
          <a href={PHONE_HREF} className={styles.contacts__phone}>
            {PHONE}
          </a>
          <SocialIcons variant="brand" className={styles.contacts__socials} />
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={(_values, helpers) => {
            setSent(true);
            helpers.resetForm();
            helpers.setSubmitting(false);
          }}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className={styles.contacts__form} noValidate>
              <div className={styles.contacts__field}>
                <label htmlFor="contact-name">Ваше ім’я</label>
                <Field
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Анна"
                  className={clsx(
                    styles.contacts__input,
                    touched.name && errors.name && styles["contacts__input--error"],
                  )}
                />
                <ErrorMessage name="name" component="span" className={styles.contacts__error} />
              </div>

              <div className={styles.contacts__field}>
                <label htmlFor="contact-phone">Телефон</label>
                <Field
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+38 (0__) ___ __ __"
                  className={clsx(
                    styles.contacts__input,
                    touched.phone && errors.phone && styles["contacts__input--error"],
                  )}
                />
                <ErrorMessage name="phone" component="span" className={styles.contacts__error} />
              </div>

              <div className={styles.contacts__field}>
                <label htmlFor="contact-email">E-mail</label>
                <Field
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="name@email.com"
                  className={clsx(
                    styles.contacts__input,
                    touched.email && errors.email && styles["contacts__input--error"],
                  )}
                />
                <ErrorMessage name="email" component="span" className={styles.contacts__error} />
              </div>

              <div className={styles.contacts__field}>
                <label htmlFor="contact-message">Ваше запитання</label>
                <Field
                  as="textarea"
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder="Коротко опишіть ваш запит"
                  className={clsx(
                    styles.contacts__input,
                    styles.contacts__textarea,
                    touched.message && errors.message && styles["contacts__input--error"],
                  )}
                />
                <ErrorMessage
                  name="message"
                  component="span"
                  className={styles.contacts__error}
                />
              </div>

              {sent ? (
                <p className={styles.contacts__success} role="status">
                  Дякуємо! Вашу заявку прийнято. Я скоро зв’яжусь із вами.
                </p>
              ) : null}

              <button type="submit" className={styles.contacts__submit} disabled={isSubmitting}>
                {isSubmitting ? "Надсилаємо..." : "Надіслати"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}
