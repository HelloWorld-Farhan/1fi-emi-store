import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.emiPlan.deleteMany()
  await prisma.product.deleteMany()

  const defaultEmiPlans = [
    { monthlyPayment: 40000, tenureMonths: 3, interestRate: 0, cashbackAmount: 5000 },
    { monthlyPayment: 20000, tenureMonths: 6, interestRate: 0, cashbackAmount: 5000 },
    { monthlyPayment: 10000, tenureMonths: 12, interestRate: 0, cashbackAmount: 5000 },
    { monthlyPayment: 5000, tenureMonths: 24, interestRate: 0, cashbackAmount: 5000 },
    { monthlyPayment: 3802, tenureMonths: 36, interestRate: 10.5, cashbackAmount: 5000 },
    { monthlyPayment: 3004, tenureMonths: 48, interestRate: 10.5, cashbackAmount: 5000 },
    { monthlyPayment: 2525, tenureMonths: 60, interestRate: 10.5, cashbackAmount: 5000 },
  ];

  const appleEmiPlans = [
    { monthlyPayment: 44967, tenureMonths: 3, interestRate: 0, cashbackAmount: 7500 },
    { monthlyPayment: 22483, tenureMonths: 6, interestRate: 0, cashbackAmount: 7500 },
    { monthlyPayment: 11242, tenureMonths: 12, interestRate: 0, cashbackAmount: 7500 },
    { monthlyPayment: 5621, tenureMonths: 24, interestRate: 0, cashbackAmount: 7500 },
    { monthlyPayment: 4297, tenureMonths: 36, interestRate: 10.5, cashbackAmount: 7500 },
    { monthlyPayment: 3385, tenureMonths: 48, interestRate: 10.5, cashbackAmount: 7500 },
    { monthlyPayment: 2842, tenureMonths: 60, interestRate: 10.5, cashbackAmount: 7500 },
  ];

  const macEmiPlans = [
    { monthlyPayment: 53300, tenureMonths: 3, interestRate: 0, cashbackAmount: 10000 },
    { monthlyPayment: 26650, tenureMonths: 6, interestRate: 0, cashbackAmount: 10000 },
    { monthlyPayment: 13325, tenureMonths: 12, interestRate: 0, cashbackAmount: 10000 },
    { monthlyPayment: 6662, tenureMonths: 24, interestRate: 0, cashbackAmount: 10000 },
    { monthlyPayment: 5057, tenureMonths: 36, interestRate: 10.5, cashbackAmount: 10000 },
    { monthlyPayment: 3987, tenureMonths: 48, interestRate: 10.5, cashbackAmount: 10000 },
    { monthlyPayment: 3345, tenureMonths: 60, interestRate: 10.5, cashbackAmount: 10000 },
  ];

  const products = [
    // iPhone 16 Pro
    { slug: 'apple-iphone-16-pro-natural-256-gb', name: 'iPhone 16 Pro', variant: 'Natural Titanium, 256GB', mrp: 134900, price: 127400, imageUrl: '/iphone-natural.jpg', emiPlans: appleEmiPlans },
    { slug: 'apple-iphone-16-pro-blue-256-gb', name: 'iPhone 16 Pro', variant: 'Blue Titanium, 256GB', mrp: 134900, price: 127400, imageUrl: '/iphone-blue.jpg', emiPlans: appleEmiPlans },
    { slug: 'apple-iphone-16-pro-white-256-gb', name: 'iPhone 16 Pro', variant: 'White Titanium, 256GB', mrp: 134900, price: 127400, imageUrl: '/iphone-white.jpg', emiPlans: appleEmiPlans },
    { slug: 'apple-iphone-16-pro-black-256-gb', name: 'iPhone 16 Pro', variant: 'Black Titanium, 256GB', mrp: 134900, price: 127400, imageUrl: '/iphone-black.jpg', emiPlans: appleEmiPlans },

    // iPhone 17 Pro
    { slug: 'apple-iphone-17-pro-desert-256-gb', name: 'iPhone 17 Pro', variant: 'Desert Titanium, 256GB', mrp: 144900, price: 137400, imageUrl: '/iphone-natural.jpg', emiPlans: appleEmiPlans },
    { slug: 'apple-iphone-17-pro-natural-256-gb', name: 'iPhone 17 Pro', variant: 'Natural Titanium, 256GB', mrp: 144900, price: 137400, imageUrl: '/iphone-natural.jpg', emiPlans: appleEmiPlans },
    { slug: 'apple-iphone-17-pro-white-256-gb', name: 'iPhone 17 Pro', variant: 'White Titanium, 256GB', mrp: 144900, price: 137400, imageUrl: '/iphone-white.jpg', emiPlans: appleEmiPlans },
    { slug: 'apple-iphone-17-pro-black-256-gb', name: 'iPhone 17 Pro', variant: 'Black Titanium, 256GB', mrp: 144900, price: 137400, imageUrl: '/iphone-black.jpg', emiPlans: appleEmiPlans },

    // Samsung S24 Ultra
    { slug: 'samsung-galaxy-s24-ultra-titanium-black-256-gb', name: 'Samsung Galaxy S24 Ultra', variant: 'Titanium Black, 256GB', mrp: 129999, price: 119999, imageUrl: '/samsung-black.jpg', emiPlans: defaultEmiPlans },
    { slug: 'samsung-galaxy-s24-ultra-titanium-gray-256-gb', name: 'Samsung Galaxy S24 Ultra', variant: 'Titanium Gray, 256GB', mrp: 129999, price: 119999, imageUrl: '/samsung-gray.jpg', emiPlans: defaultEmiPlans },
    { slug: 'samsung-galaxy-s24-ultra-titanium-violet-256-gb', name: 'Samsung Galaxy S24 Ultra', variant: 'Titanium Violet, 256GB', mrp: 129999, price: 119999, imageUrl: '/samsung-violet.jpg', emiPlans: defaultEmiPlans },
    { slug: 'samsung-galaxy-s24-ultra-titanium-yellow-256-gb', name: 'Samsung Galaxy S24 Ultra', variant: 'Titanium Yellow, 256GB', mrp: 129999, price: 119999, imageUrl: '/samsung-yellow.jpg', emiPlans: defaultEmiPlans },

    // Samsung S25 Ultra
    { slug: 'samsung-galaxy-s25-ultra-titanium-black-256-gb', name: 'Samsung Galaxy S25 Ultra', variant: 'Titanium Black, 256GB', mrp: 139999, price: 129999, imageUrl: '/samsung-black.jpg', emiPlans: defaultEmiPlans },
    { slug: 'samsung-galaxy-s25-ultra-titanium-gray-256-gb', name: 'Samsung Galaxy S25 Ultra', variant: 'Titanium Gray, 256GB', mrp: 139999, price: 129999, imageUrl: '/samsung-gray.jpg', emiPlans: defaultEmiPlans },
    { slug: 'samsung-galaxy-s25-ultra-titanium-violet-256-gb', name: 'Samsung Galaxy S25 Ultra', variant: 'Titanium Violet, 256GB', mrp: 139999, price: 129999, imageUrl: '/samsung-violet.jpg', emiPlans: defaultEmiPlans },
    { slug: 'samsung-galaxy-s25-ultra-titanium-yellow-256-gb', name: 'Samsung Galaxy S25 Ultra', variant: 'Titanium Yellow, 256GB', mrp: 139999, price: 129999, imageUrl: '/samsung-yellow.jpg', emiPlans: defaultEmiPlans },

    // MacBook Pro M3
    { slug: 'apple-macbook-pro-m3-space-black-512-gb', name: 'MacBook Pro M3', variant: 'Space Black, 512GB', mrp: 169900, price: 159900, imageUrl: '/macbook-black.jpg', emiPlans: macEmiPlans },
    { slug: 'apple-macbook-pro-m3-silver-512-gb', name: 'MacBook Pro M3', variant: 'Silver, 512GB', mrp: 169900, price: 159900, imageUrl: '/macbook-silver.jpg', emiPlans: macEmiPlans },
  ];

  for (const p of products) {
    await prisma.product.create({
      data: {
        slug: p.slug,
        name: p.name,
        variant: p.variant,
        mrp: p.mrp,
        price: p.price,
        imageUrl: p.imageUrl,
        emiPlans: {
          create: p.emiPlans
        }
      }
    });
  }

}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
