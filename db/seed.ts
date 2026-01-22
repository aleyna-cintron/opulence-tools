import { PrismaClient } from "@/app/generated/prisma/client"
import { PrismaNeon } from '@prisma/adapter-neon'
import 'dotenv/config'
import { products } from "./seed-data/products";

const adapter = new PrismaNeon({
  connectionString: process.env.DIRECT_URL,
})

const prisma = new PrismaClient({ adapter });

export async function main() {
  // Clear existing products
  await prisma.product.deleteMany();

  // Seed with new products
  await prisma.product.createMany({ data: products });
}

main()
  .then(() => console.log('✅ Database seeded successfully!'))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });