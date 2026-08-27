# Царьова Юлія — лендінг психолога

Адаптивний односторінковий сайт для психолога, коуча та арт-терапевта **Царьової Юлії** (Харків / онлайн).  
Верстка орієнтована на макет Figma, із гумовою адаптивністю від мобільного до desktop.

**Live / demo:** після деплою вкажіть URL у `NEXT_PUBLIC_SITE_URL`.

---

## Стек

| Технологія | Призначення |
|---|---|
| **Next.js 15** (App Router) + **React 19** + **TypeScript** | каркас застосунку |
| **SCSS Modules** + `modern-normalize` | стилі секцій і UI |
| **Swiper** | каруселі відгуків і галереї |
| **Formik** + **Yup** | валідація форми контактів |
| **clsx** | умовні CSS-класи |

---

## Швидкий старт

```bash
npm install
npm run dev
```

Відкрийте [http://localhost:3000](http://localhost:3000).

### Скрипти

| Команда | Опис |
|---|---|
| `npm run dev` | розробка (Turbopack) |
| `npm run build` | production-збірка |
| `npm run start` | запуск зібраного застосунку |
| `npm run lint` | ESLint |

---

## Змінні середовища

Скопіюйте `.env.example` → `.env.local` і задайте публічний URL сайту (потрібен для canonical, Open Graph, sitemap, JSON-LD):

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Без цієї змінної локально використовується `http://localhost:3000`.

---

## Структура проєкту

```
src/
  app/                 # layout, page, SEO (robots, sitemap, manifest, icons)
  components/
    layout/            # TopBar, Header, Footer
    sections/          # Hero, Values, About, Help, Groups, …
    ui/                # Button, Logo, SocialIcons, BackToTop
    seo/               # JSON-LD
  constants/           # тексти, контакти, site SEO
  styles/              # variables, mixins, fluid()
public/
  fonts/               # ArtScript (логотип)
  images/              # фото, декор, OG, відгуки
```

Тексти та посилання редагуйте в `src/constants/content.ts`.  
SEO-константи — у `src/constants/site.ts`.

---

## Секції сторінки

1. Top bar + хедер (бургер-меню на мобільному)  
2. Hero  
3. Цінності  
4. Про мене  
5. Послуги / напрями допомоги  
6. Курси та групи  
7. Сертифікати  
8. Авторська гра  
9. Відгуки  
10. Форма контактів  
11. Галерея  
12. Локація  
13. Футер + «вгору»

Брейкпоінти: **320 → 393 → 768 → 1024 → 1440** (+ гумові токени після 1440).  
Контент обмежений контейнером `max-width: 1440px`; фони секцій — full-bleed.

---

## SEO

Уже налаштовано:

- `metadata` (title, description, keywords, canonical)
- Open Graph / Twitter Card (`/images/og.jpg`)
- `robots.txt`, `sitemap.xml`, PWA `manifest`
- іконки (`icon`, `apple-icon`, `icon-192` / `icon-512`)
- JSON-LD: Person, ProfessionalService, WebSite

Перед деплоєм обов’язково виставте `NEXT_PUBLIC_SITE_URL`.

---

## Контент і контакти

За замовчуванням у `content.ts`:

- телефон, email, соцмережі  
- навігація (десктоп / мобільне меню / футер)  
- копірайт секцій і відгуки  

Форма контактів зараз лише валідує дані на клієнті й показує повідомлення про успіх — підключення бекенду / CRM додайте за потреби.

---

## Дизайн-система (коротко)

- Акцент: `#C9785E` / `#C8765B`
- Темний текст: `#621C04`
- Фони: `#FEFBF7`, `#F9EFE9`
- Шрифти: Times New Roman (заголовки/текст), Lato (окремі блоки), ArtScript (логотип)

---

## Ліцензія / використання

Приватний проєкт клієнта. Не публікуйте ассети та тексти без узгодження.
