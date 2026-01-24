import { PrismaClient } from "@/app/generated/prisma/client"
import { PrismaNeon } from '@prisma/adapter-neon'
import 'dotenv/config'
import { products } from "./seed-data/products";
import { users } from "./seed-data/users";

const adapter = new PrismaNeon({
  connectionString: process.env.DIRECT_URL,
})

const prisma = new PrismaClient({ adapter });

export async function main() {
  // Clear existing data
  await prisma.product.deleteMany();
  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.verificationToken.deleteMany();
  await prisma.user.deleteMany();

  // Seed with new products
  await prisma.product.createMany({ data: products });
  await prisma.user.createMany({ data: users });
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