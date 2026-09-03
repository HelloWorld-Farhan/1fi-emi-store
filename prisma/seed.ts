import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.emiPlan.deleteMany()
  await prisma.product.deleteMany()

  // Product 1: iPhone 17 Pro
  await prisma.product.create({
    data: {
      slug: 'apple-iphone-17-pro-silver-256-gb',
      name: 'iPhone 17 Pro',
      variant: 'Silver, 256GB',
      mrp: 134900,
      price: 127400,
      imageUrl: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=400',
      emiPlans: {
        create: [
          { monthlyPayment: 44967, tenureMonths: 3, interestRate: 0, cashbackAmount: 7500 },
          { monthlyPayment: 22483, tenureMonths: 6, interestRate: 0, cashbackAmount: 7500 },
          { monthlyPayment: 11242, tenureMonths: 12, interestRate: 0, cashbackAmount: 7500 },
          { monthlyPayment: 5621, tenureMonths: 24, interestRate: 0, cashbackAmount: 7500 },
          { monthlyPayment: 4297, tenureMonths: 36, interestRate: 10.5, cashbackAmount: 7500 },
          { monthlyPayment: 3385, tenureMonths: 48, interestRate: 10.5, cashbackAmount: 7500 },
          { monthlyPayment: 2842, tenureMonths: 60, interestRate: 10.5, cashbackAmount: 7500 },
        ]
      }
    }
  })

  await prisma.product.create({
    data: {
      slug: 'apple-iphone-17-pro-gold-256-gb',
      name: 'iPhone 17 Pro',
      variant: 'Gold, 256GB',
      mrp: 134900,
      price: 127400,
      imageUrl: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=400',
      emiPlans: {
        create: [
          { monthlyPayment: 44967, tenureMonths: 3, interestRate: 0, cashbackAmount: 7500 },
          { monthlyPayment: 22483, tenureMonths: 6, interestRate: 0, cashbackAmount: 7500 },
          { monthlyPayment: 11242, tenureMonths: 12, interestRate: 0, cashbackAmount: 7500 },
          { monthlyPayment: 5621, tenureMonths: 24, interestRate: 0, cashbackAmount: 7500 },
        ]
      }
    }
  })

  // Product 2: Samsung Galaxy S24 Ultra
  await prisma.product.create({
    data: {
      slug: 'samsung-galaxy-s24-ultra-titanium-black-256-gb',
      name: 'Samsung Galaxy S24 Ultra',
      variant: 'Titanium Black, 256GB',
      mrp: 129999,
      price: 119999,
      imageUrl: 'https://images.unsplash.com/photo-1708892403980-fc02196af57a?auto=format&fit=crop&q=80&w=400',
      emiPlans: {
        create: [
          { monthlyPayment: 40000, tenureMonths: 3, interestRate: 0, cashbackAmount: 5000 },
          { monthlyPayment: 20000, tenureMonths: 6, interestRate: 0, cashbackAmount: 5000 },
          { monthlyPayment: 10000, tenureMonths: 12, interestRate: 0, cashbackAmount: 5000 },
        ]
      }
    }
  })

  await prisma.product.create({
    data: {
      slug: 'samsung-galaxy-s24-ultra-titanium-gray-256-gb',
      name: 'Samsung Galaxy S24 Ultra',
      variant: 'Titanium Gray, 256GB',
      mrp: 129999,
      price: 119999,
      imageUrl: 'https://images.unsplash.com/photo-1708892403980-fc02196af57a?auto=format&fit=crop&q=80&w=400',
      emiPlans: {
        create: [
          { monthlyPayment: 40000, tenureMonths: 3, interestRate: 0, cashbackAmount: 5000 },
          { monthlyPayment: 20000, tenureMonths: 6, interestRate: 0, cashbackAmount: 5000 },
        ]
      }
    }
  })

  // Product 3: MacBook Pro 14
  await prisma.product.create({
    data: {
      slug: 'apple-macbook-pro-14-m3-space-black-512-gb',
      name: 'MacBook Pro 14" M3',
      variant: 'Space Black, 512GB',
      mrp: 169900,
      price: 159900,
      imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=400',
      emiPlans: {
        create: [
          { monthlyPayment: 53300, tenureMonths: 3, interestRate: 0, cashbackAmount: 10000 },
          { monthlyPayment: 26650, tenureMonths: 6, interestRate: 0, cashbackAmount: 10000 },
          { monthlyPayment: 13325, tenureMonths: 12, interestRate: 0, cashbackAmount: 10000 },
          { monthlyPayment: 5690, tenureMonths: 36, interestRate: 15, cashbackAmount: 0 },
        ]
      }
    }
  })

  await prisma.product.create({
    data: {
      slug: 'apple-macbook-pro-14-m3-silver-512-gb',
      name: 'MacBook Pro 14" M3',
      variant: 'Silver, 512GB',
      mrp: 169900,
      price: 159900,
      imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=400',
      emiPlans: {
        create: [
          { monthlyPayment: 53300, tenureMonths: 3, interestRate: 0, cashbackAmount: 10000 },
          { monthlyPayment: 26650, tenureMonths: 6, interestRate: 0, cashbackAmount: 10000 },
        ]
      }
    }
  })

  console.log('Database seeded with products and EMI plans!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
