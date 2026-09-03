# 1Fi EMI Store - Video Demo Script

*Use this script as a guide while recording your 2-5 minute demo video. You don't have to read it word-for-word, just use it to hit all the key points required by the assignment!*

---

## 🎬 Part 1: Introduction & UI Walkthrough (1-2 minutes)

**[Action: Open your browser to `http://localhost:3000`. Start recording your screen.]**

**You:** 
"Hello! My name is Farhan Khalid, and this is my submission for the 1Fi SDE1 Assignment. I was tasked with building an e-commerce platform that mirrors the Snapmint EMI selection UI, utilizing Next.js, TypeScript, and Prisma with SQLite."

**[Action: Scroll down the home page slowly to show the 4 phones.]**

**You:**
"As you can see on the home page, we have a clean, responsive grid layout displaying our products. I've seeded the database with four products: the iPhone 16 Pro, iPhone 17 Pro, and the Samsung Galaxy S24 and S25 Ultra, complete with authentic images and pricing."

**[Action: Click on the 'iPhone 16 Pro' (or any phone) to navigate to the product page.]**

**You:**
"When a user clicks on a product, Next.js dynamic routing instantly takes us to the product details page. Here, you'll see a pixel-perfect recreation of the Snapmint UI. On the left, we have the high-resolution product image and pricing details."

**[Action: Hover over the EMI table rows to show the interactive hover states.]**

**You:**
"On the right is the core requirement of the assignment: the structured EMI Plans table. It clearly displays the Tenure, Interest Rate, Monthly Payment, and Cashback amounts. The layout is built using pure CSS modules to ensure it's lightweight, modern, and perfectly matches the reference design."

---

## 💻 Part 2: Code & Architecture Walkthrough (1-2 minutes)

**[Action: Open VS Code. Show `prisma/schema.prisma`.]**

**You:**
"Now, let's take a quick look at the codebase. For the database, I used SQLite managed by Prisma ORM. In my `schema.prisma` file, I've defined a one-to-many relationship between the `Product` model and the `EmiPlan` model. This ensures that every product can have its own unique set of 3-to-7 EMI plans seamlessly tied to it."

**[Action: Open `prisma/seed.ts`.]**

**You:**
"To populate the store, I wrote a seed script that programmatically injects the mock data into the SQLite database. This makes the local environment completely reproducible."

**[Action: Open `src/app/products/[slug]/page.tsx`.]**

**You:**
"For the frontend, I utilized the latest Next.js 15 App Router. This file here is the dynamic route for the product pages. It grabs the `slug` from the URL, queries the SQLite database via Prisma to fetch the specific product and its nested EMI plans, and then renders the UI server-side. This ensures incredibly fast loading times and great SEO."

**[Action: Open `src/app/page.tsx`.]**

**You:**
"The home page works similarly, querying all products and mapping them into the responsive CSS grid you saw earlier."

---

## 🏁 Part 3: Conclusion (30 seconds)

**[Action: Go back to the browser showing the beautiful EMI table.]**

**You:**
"To summarize, the application successfully implements all assignment requirements: a Next.js and TypeScript frontend, a Prisma and SQLite backend, dynamic routing, and a pixel-perfect, interactive EMI selection interface. 

The code is clean, free of TypeScript errors, and ready for deployment. Thank you for your time and for reviewing my assignment!"

**[Action: Stop Recording!]**
