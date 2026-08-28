# OIB Assainissement — Next.js Marketing Site

Modern bilingual (FR/EN) marketing website for [OIB Assainissement](https://oibassainissement.fr/), a sanitation company in Île-de-France.

## Features

- Bilingual routing (`/fr`, `/en`) with next-intl
- 6 service pages with SEO metadata
- 8 department landing pages for local SEO
- Multi-step quote wizard (`/devis`)
- Service finder diagnostic (`/diagnostic`)
- Contact form with Resend email integration
- Mobile sticky CTA (Call / Quote / WhatsApp)
- JSON-LD structured data for LocalBusiness

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000/fr](http://localhost:3000/fr)

## Environment Variables

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | API key from [Resend](https://resend.com) |
| `CONTACT_EMAIL` | Inbox for form submissions |
| `FROM_EMAIL` | Verified sender address in Resend |

Without `RESEND_API_KEY`, forms validate and log to console (dev mode).

## Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint
```

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- shadcn/ui (Radix primitives)
- next-intl
- Resend
- Framer Motion
- Zod + React Hook Form
