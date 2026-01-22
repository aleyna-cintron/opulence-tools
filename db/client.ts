import { PrismaClient } from "@/app/generated/prisma"
import { PrismaNeon } from "@prisma/adapter-neon"

// Singleton pattern: prevents hot reloads in dev from creating
// multiple PrismaClient instances and leaking database connections.
// globalThis persists across hot reloads, so we store the client there.
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

const createPrismaClient = () => {
    const adapter = new PrismaNeon({
        connectionString: process.env.DATABASE_URL,
    })
    return new PrismaClient({ adapter })
}

// Reuse existing client if available, otherwise create a new one
export const prisma = globalForPrisma.prisma || createPrismaClient()

// In dev, cache the client on globalThis so the next hot reload reuses it.
// In production this is skipped since modules only run once.
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma