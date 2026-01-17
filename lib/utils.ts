import type { Product } from '@/types/product'
import type { Product as PrismaProduct } from '@/app/generated/prisma'

export function serializeProducts(products: PrismaProduct[]): Product[] {
  return products.map((p) => ({
    id: p.id,
    name: p.name,
    description: p.description,
    price: Number(p.price),
    images: p.images,
    slug: p.slug,
    featured: p.featured,
    supplierName: p.supplierName ?? '',
    createdAt: p.createdAt
  }))
}


// Format number with decimal places
export function formatNumWithDecimal(num: number): string {
  return num.toFixed(2);
}