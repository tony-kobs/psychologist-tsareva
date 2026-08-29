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
    .min(2, "*Введіть щонайменше 2 символи")
    .required("*Вкажіть ваше ім’я"),
  phone: Yup.string()
    .trim()
    .matches(/^\+?[\d\s()-]{10,20}$/, "*Введено некоректний телефон")
    .required("*Вкажіть номер телефону"),
  email: Yup.string()
    .trim()
    .email("*Введено некоректний email")
    .required("*Вкажіть e-mail"),
  message: Yup.string()
    .trim()
    .min(5, "*Напишіть трохи більше деталей")
    .required("*Напишіть повідомлення"),
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
      <img
        src="/images/decor-form-leaf.svg"
        alt=""
        className={styles.contacts__decor}
        aria-hidden="true"
      />
      <div className={`container ${styles.contacts__inner}`}>
        <div className={styles.contacts__info}>
          <h2 className={styles.contacts__title}>{CONTACTS.title}</h2>
          <p className={styles.contacts__text}>{CONTACTS.text}</p>
          <a href={PHONE_HREF} className={styles.contacts__phone}>
            {PHONE}
          </a>
          <SocialIcons variant="brand" className={styles.contacts__socials} />
        </div>

        {sent ? (
          <div className={styles.contacts__success} role="status">
            <img
              className={styles.contacts__successIcon}
              src="/images/check.svg"
              alt=""
              width={80}
              height={80}
              aria-hidden="true"
            />
            <p className={styles.contacts__successTitle}>
              Повідомлення відправлено
            </p>
            <p className={styles.contacts__successText}>
              Ми обов&apos;язково зв&apos;яжемося з Вами найближчим часом.
            </p>
          </div>
        ) : (
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            validateOnMount
            onSubmit={(_values, helpers) => {
              setSent(true);
              helpers.setSubmitting(false);
            }}
          >
            {({ isSubmitting, isValid, errors, touched }) => {
              const disabled = !isValid || isSubmitting;

              return (
                <Form className={styles.contacts__form} noValidate>
                  <div className={styles.contacts__field}>
                    <label htmlFor="contact-name">Ваше ім’я</label>
                    <Field
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Ваше ім'я"
                      className={clsx(
                        styles.contacts__input,
                        touched.name &&
                          errors.name &&
                          styles["contacts__input--error"],
                      )}
                    />
                    <ErrorMessage
                      name="name"
                      component="span"
                      className={styles.contacts__error}
                    />
                  </div>

                  <div className={styles.contacts__field}>
                    <label htmlFor="contact-phone">Телефон</label>
                    <Field
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="Телефон"
                      className={clsx(
                        styles.contacts__input,
                        touched.phone &&
                          errors.phone &&
                          styles["contacts__input--error"],
                      )}
                    />
                    <ErrorMessage
                      name="phone"
                      component="span"
                      className={styles.contacts__error}
                    />
                  </div>

                  <div className={styles.contacts__field}>
                    <label htmlFor="contact-email">Email</label>
                    <Field
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="Email"
                      className={clsx(
                        styles.contacts__input,
                        touched.email &&
                          errors.email &&
                          styles["contacts__input--error"],
                      )}
                    />
                    <ErrorMessage
                      name="email"
                      component="span"
                      className={styles.contacts__error}
                    />
                  </div>

                  <div className={styles.contacts__field}>
                    <label htmlFor="contact-message">Повідомлення</label>
                    <Field
                      as="textarea"
                      id="contact-message"
                      name="message"
                      rows={3}
                      placeholder="Повідомлення"
                      className={clsx(
                        styles.contacts__input,
                        styles.contacts__textarea,
                        touched.message &&
                          errors.message &&
                          styles["contacts__input--error"],
                      )}
                    />
                    <ErrorMessage
                      name="message"
                      component="span"
                      className={styles.contacts__error}
                    />
                  </div>

                  <button
                    type="submit"
                    className={styles.contacts__submit}
                    disabled={disabled}
                  >
                    {isSubmitting ? "Надсилаємо..." : "Надіслати"}
                  </button>
                </Form>
              );
            }}
          </Formik>
        )}
      </div>
    </section>
  );
}
