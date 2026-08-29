# COGURA Coffee — Premium Arabica Landing Page

[![Next.js](https://img.shields.io/badge/Next.js-16.2.0-black?style=for-the-badge&logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.2.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

An ultra-performant, beautifully styled landing page and storefront for **COGURA Coffee** — Single Origin Specialty Arabica from the volcanic highlands of Enrekang, South Sulawesi (1,500m ASL).

Built with Next.js 16 App Router using **Static Site Generation (SSG)** and static multi-language support (i18n).

---

## 🚀 Key Features

* **⚡ Pure Static Site Generation (SSG):** Configured with `output: 'export'`, delivering near-instant page load speeds and zero server runtime costs.
* **🌐 Static Internationalization (i18n):** Native multi-language support (**Indonesian `id`** and **English `en`**) compiled into static HTML bundles via `generateStaticParams()`.
* **💬 Serverless WhatsApp Ordering:** Interactive product cards that calculate roast/weight options client-side and dynamically construct localized WhatsApp order messages.
* **🎨 Modern Aesthetic Design System:** Deep Forest Green (`#183d33`), Soft Gold (`#c5a059`), and Warm Cream brand palette powered by Tailwind CSS v4 and Google Fonts (`Montserrat` & `DM Sans`).
* **📱 Responsive & Accessible:** Built with mobile-first typography and accessible component primitives.
* **🔍 SEO & Schema.org Ready:** Includes OpenGraph cards, Twitter preview metadata, and JSON-LD `LocalBusiness` structured data.

---

## 🛠️ Tech Stack & Libraries

* **Framework:** [Next.js 16.2.0](https://nextjs.org/) (App Router, Static Export)
* **Library:** [React 19.2.4](https://react.dev/)
* **Language:** [TypeScript 5.7.3](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/postcss`) & `@import 'tw-animate-css'`
* **UI Components:** [shadcn/ui](https://ui.shadcn.com/) primitives powered by Radix UI (`@radix-ui/react-*`)
* **Icons:** [Lucide React](https://lucide.dev/) & Official SVG icons

---

## 📂 Project Structure

```
Cogura.Web/
├── app/
│   ├── [lang]/
│   │   ├── layout.tsx        # Static params generator & localized metadata
│   │   └── page.tsx          # Localized landing page entry
│   ├── globals.css           # Tailwind v4 theme & color tokens
│   ├── layout.tsx            # Root HTML template, fonts & Schema.org JSON-LD
│   ├── not-found.tsx         # Bilingual fallback 404 page
│   ├── page.tsx              # Root redirect (/ -> /id)
│   └── sitemap.ts            # Static sitemap builder
├── components/
│   ├── cogura/               # Brand section components
│   │   ├── footer.tsx        # Footer with contact & social links
│   │   ├── hero.tsx          # Hero banner & trust badges
│   │   ├── navbar.tsx        # Sticky nav & language switcher (ID | EN)
│   │   ├── products.tsx      # Product catalog & dynamic WA order link builder
│   │   ├── story.tsx         # Brand narrative & heritage metrics
│   │   └── why-choose-us.tsx # Key value propositions
│   └── ui/                   # shadcn/ui primitive components & icons
├── dictionaries/
│   ├── en.json               # English translation dictionary
│   └── id.json               # Indonesian translation dictionary
├── lib/
│   └── get-dictionary.ts     # Typed async dictionary loader
├── public/                   # WebP coffee assets, logo.svg, robots.txt
└── next.config.mjs           # Static export configuration (output: 'export')
```

---

## 🏁 Getting Started

### Prerequisites

Ensure you have Node.js 18+ and `npm` or `pnpm` installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Rafli-Appyx/cogura.web.git
   cd cogura.web
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables:**
   Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```

4. **Run the local development server:**
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Build & Production

To create an optimized production static bundle in the `out/` directory:

```bash
npm run build
```

### Testing the Static Output Locally

Serve the pre-rendered static files using `serve`:

```bash
npx serve out
```

---

## 👤 Author & License

Developed with care by **MUHAMMAD RAFLI** ([@Rafli-Appyx](https://github.com/Rafli-Appyx)).

This project is licensed under the [MIT License](LICENSE).
