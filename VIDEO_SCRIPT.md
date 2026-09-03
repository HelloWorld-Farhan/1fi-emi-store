# 1Fi EMI Store - Official Video Demo Script

**Project:** 1Fi SDE1 Assignment - EMI Selection UI
**Candidate Name:** Farhan Khalid
**Estimated Video Length:** 3-5 Minutes

---

## 🎬 Part 1: Introduction & App Navigation (1.5 Minutes)

**[Action: Open your browser to the Vercel deployed URL or `http://localhost:3000`. Start recording your screen.]**

**🎤 You (Audio):** 
"Hello! My name is Farhan Khalid, and this is my video demonstration for the 1Fi SDE1 Assignment. The goal was to build a full-stack e-commerce platform that mirrors the Snapmint EMI selection UI. I built this using Next.js 15, TypeScript, and a Prisma-managed SQLite database."

**[Action: Slowly scroll down the Home Page to show the product grid.]**

**🎤 You (Audio):**
"Starting on the Home Page, I’ve implemented a clean, responsive grid layout. The database is seeded with exactly four distinct products: the iPhone 16 Pro, iPhone 17 Pro, and the Samsung Galaxy S24 and S25 Ultra. I’ve ensured that we use authentic, full-resolution local images for each product."

**[Action: Click on the 'Samsung Galaxy S24 Ultra' (or any product) to trigger the Next.js navigation.]**

**🎤 You (Audio):**
"When we click on a product, Next.js dynamic routing instantly navigates us to the Product Details page. As you can see, the navigation is incredibly fast thanks to the App Router."

**[Action: Hover over the EMI table rows on the right side to show the interactive hover states.]**

**🎤 You (Audio):**
"Here is the core requirement of the assignment: the structured EMI Plans table. It's a pixel-perfect recreation of the Snapmint UI. It clearly displays the Tenure, Interest Rate, Monthly Payment, and Cashback amounts. I built this layout using pure CSS modules to ensure it remains lightweight, modern, and perfectly responsive without relying on heavy external frameworks."

---

## 💻 Part 2: Code & Architecture Walkthrough (2 Minutes)

**[Action: Open VS Code. Show the `prisma/schema.prisma` file.]**

**🎤 You (Audio):**
"Now, let me walk you through the architecture. For the database layer, I utilized SQLite managed by Prisma ORM. In the `schema.prisma` file, I've defined a robust one-to-many relationship between the `Product` model and the `EmiPlan` model. This structure guarantees that every product dynamically loads its own unique set of EMI plans."

**[Action: Open the `prisma/seed.ts` file.]**

**🎤 You (Audio):**
"To populate the store, I wrote a comprehensive seed script that programmatically injects the mock data and image paths into the SQLite database. This ensures the environment is completely reproducible for reviewers."

**[Action: Open `src/app/products/[slug]/page.tsx` file.]**

**🎤 You (Audio):**
"Moving to the frontend, I utilized the Next.js 15 App Router. This specific file handles the dynamic routing for the product pages. It grabs the `slug` from the URL, queries the SQLite database via Prisma to fetch the specific product and its nested EMI plans, and renders the UI server-side. This results in great SEO and instant page loads."

**[Action: Open `src/app/page.tsx` file.]**

**🎤 You (Audio):**
"The home page operates similarly, fetching the array of products from the database and mapping them into the responsive CSS grid you saw earlier."

---

## 🏁 Part 3: Vercel Deployment & Conclusion (30 Seconds)

**[Action: Go back to the browser showing the Vercel live URL.]**

**🎤 You (Audio):**
"Finally, the application is fully deployed to Vercel. I specifically configured the build process to trace and include the SQLite `.db` file within Vercel's serverless environment, ensuring the database works seamlessly in production."

**🎤 You (Audio):**
"To summarize, the application successfully implements all assignment requirements: a Next.js and TypeScript frontend, a Prisma and SQLite backend, dynamic routing, and a pixel-perfect, interactive EMI selection interface. Thank you for your time and for reviewing my submission!"

**[Action: Stop Recording!]**
