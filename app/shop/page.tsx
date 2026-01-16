import { prisma } from "@/db/client"
import { ShopContent } from "./ShopContent"
import type { Product } from '@/app/types'

export default async function ShopPage() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  })

  const serializedProducts:  Product[] = products.map((p) => ({
    id: p.id,
    name: p.name,
    description: p.description,
    price: Number(p.price),
    images: p.images,
    slug: p.slug,
    supplierName: p.supplierName,
  }))

  return <ShopContent products={serializedProducts} />
}
