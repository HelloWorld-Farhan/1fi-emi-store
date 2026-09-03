# 1Fi EMI Store Assignment

This is a full-stack e-commerce EMI selection module built for the 1Fi SDE1 Assignment. It faithfully recreates the Snapmint EMI selection user interface with calculated, interactive EMI plan selection.

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Database:** SQLite with Prisma ORM
- **Styling:** Pure CSS Modules (no Tailwind) for a premium, lightweight UI

## Features
- Dynamic product routing (e.g., `/products/apple-iphone-17-pro-silver-256-gb`)
- Interactive EMI selection with real-time cashback details
- Interactive product finishes/colors that change the active product dynamically
- Perfect Snapmint layout matching (Light theme, layout positioning, font weights)
- RESTful API endpoints at `/api/products` and `/api/products/[slug]`

## Getting Started

First, install the dependencies:

```bash
npm install
```

Since this project uses SQLite for ease of use in a local environment, you need to set up the database and seed it with the mock data:

```bash
# Push the schema to create the local dev.db file
npx prisma db push

# Seed the database with products and EMI plans
npx prisma db seed
```

Finally, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## API Documentation
The application exposes two main endpoints:

- `GET /api/products`: Returns an array of all products (with their nested EMI plans).
- `GET /api/products/[slug]`: Returns the complete data for a specific product matching the provided slug.

## Deployment to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push this repository to GitHub.
2. Go to Vercel and Import Project from your GitHub repository.
3. In the Build and Output Settings, ensure the build command is `npm run build` (or Next.js default).
4. No external database URI is strictly required if deploying with local SQLite (since it builds into the deployment), but for a true production environment on Vercel, it is recommended to swap the SQLite provider in `schema.prisma` for a Vercel Postgres URL.
5. Click **Deploy**.
