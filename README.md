This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Analytics

[Vercel Web Analytics](https://vercel.com/docs/analytics) is enabled via `@vercel/analytics` (`<Analytics />` in `src/app/layout.tsx`). It automatically tracks page views, visitor counts, top pages, referrers, geography, and device info — no dashboard is built into the app; view these metrics in the Vercel dashboard for this project (Analytics tab must be enabled there).

In addition, a small set of custom events tracks the key conversion signal — did someone try to contact the residence:

- `whatsapp_click` — click on a WhatsApp CTA, with a `location` property (`header`, `hero`, `visit_cta`, `contact`, `final_cta`, `footer`, `floating`)
- `phone_click` — click on a `tel:` link, with a `location` property (`hero`, `contact`, `final_cta`, `footer`)
- `directions_click` — click on the "Como chegar" directions CTA, with a `location` property (`contact`)
- `gallery_interaction` — first manual interaction with the facility photo gallery (arrow buttons or keyboard navigation), tracked once per visit rather than on every slide movement

Event properties only ever carry low-cardinality context (like `location`); no names, phone numbers, addresses, or other personal/free-text data is ever sent.
