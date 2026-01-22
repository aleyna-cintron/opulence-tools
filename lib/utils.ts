import type { Product } from '@/types/product'
import type { Product as PrismaProduct } from '@/app/generated/prisma'

export function serializeProduct(p: PrismaProduct): Product {
  return {
    id: p.id,
    name: p.name,
    description: p.description,
    price: Number(p.price),
    images: p.images,
    slug: p.slug,
    featured: p.featured,
    supplierName: p.supplierName ?? ''
  }
}

export function serializeProducts(products: PrismaProduct[]): Product[] {
  return products.map(serializeProduct)
}


// Format number with decimal places
export function formatNumWithDecimal(num: number): string {
  return num.toFixed(2);
}