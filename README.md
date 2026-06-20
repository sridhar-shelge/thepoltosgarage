# The Poltos Garage

Modern mobile-first Next.js MVP for `poltosgarage.in`.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn-style local primitives
- Framer Motion
- Lucide icons
- Mock data structured for a future Supabase/PostgreSQL backend

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Routes

- `/` home
- `/garage`, `/garage/[slug]`
- `/stories`, `/stories/[slug]`
- `/vlogs`, `/vlogs/[slug]`
- `/submit`
- `/marketplace`, `/marketplace/[slug]`
- `/challenges`
- `/community`
- `/partners`
- `/about`
- `/contact`
- `/admin`

## Backend Integration Notes

The app currently logs form payloads in the browser console and shows success states. TODO comments mark future backend integration points for:

- Supabase Auth
- User submissions and moderation
- Blog publishing
- Vlog publishing
- Product catalog
- Orders and marketplace listing requests
- Affiliate click tracking
- Challenge entries and votes
- Comments
- Partner leads and CRM routing
- Supabase Storage for uploads

## Legal Notes

The Poltos Garage is an independent automotive community and is not affiliated with any vehicle manufacturer.

Some links may be affiliate links. The brand may earn a commission at no extra cost to users.
