# Dirga Halim Susilo — Portfolio

[![CI](https://github.com/8shagrid/dirga-portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/8shagrid/dirga-portfolio/actions/workflows/deploy.yml)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Live Site](https://img.shields.io/badge/Live-dirgahalimsusilo.site-c53030)](https://dirgahalimsusilo.site/)

Production-ready personal portfolio for **Dirga Halim Susilo** — Full-Stack Developer, AI Engineer, and Data Specialist based in Medan, Indonesia.

**Live:** [dirgahalimsusilo.site](https://dirgahalimsusilo.site/)

## Overview

This portfolio positions Dirga as a product-minded engineer who builds real web platforms, ERP systems, data dashboards, and AI solutions. The site is designed as a professional landing page for recruiters, clients, and collaborators.

## Highlights

- Product-focused portfolio with live web platforms, ERP work, AI/data projects, experience, certifications, and contact flow
- Responsive single-page experience with smooth anchor navigation
- Light/dark mode with persisted theme preference
- Centralized content management in `src/lib/data.ts`
- SEO metadata, Open Graph image route, sitemap, robots, and JSON-LD structured data
- Downloadable CV from `public/cv-dirga-halim-susilo.pdf`

## Featured Screenshots

| SiapTempur | PejuangKampus |
| --- | --- |
| ![SiapTempur screenshot](public/screenshots/siaptempur.png) | ![PejuangKampus screenshot](public/screenshots/pejuangkampus.png) |

| Seraya ERP | Seraya |
| --- | --- |
| ![Seraya ERP screenshot](public/screenshots/seraya-erp.png) | ![Seraya screenshot](public/screenshots/seraya.png) |

## Tech Stack

- **Framework:** Next.js 16 App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animation:** Framer Motion
- **Icons:** Lucide React, React Icons
- **Hosting:** Vercel

## Project Structure

```txt
src/
  app/            Next.js App Router files, metadata, SEO routes
  components/     Portfolio sections and reusable UI components
  lib/            Central content data, animations, utilities
public/           Static assets, screenshots, CV, favicons
.github/          CI workflow
```

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality Checks

```bash
npm run lint
npm run build
```

## Content Updates

Most portfolio content lives in `src/lib/data.ts`:

- Hero title, tagline, stats, and location
- Product/project descriptions and links
- Skills, experience, education, certifications
- Contact links and CV URL

## Deployment

The site is optimized for Vercel. Push to the connected GitHub repository and Vercel will build the Next.js app automatically.

## Author

**Dirga Halim Susilo**  
Portfolio: [dirgahalimsusilo.site](https://dirgahalimsusilo.site/)  
GitHub: [@8shagrid](https://github.com/8shagrid)
