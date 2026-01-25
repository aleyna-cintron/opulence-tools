import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Product } from "@/app/generated/prisma"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Convert Prisma Product (with Decimal) to a plain object for JSON serialization
export function serializeProduct(product: Product) {
  return {
    ...product,
    price: product.price.toString(),
    createdAt: product.createdAt.toISOString(),
    updatedAt: product.updatedAt.toISOString(),
  }
}

export function serializeProducts(products: Product[]) {
  return products.map(serializeProduct)
}
