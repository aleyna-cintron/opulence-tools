import { prisma } from "@/db/client"
import { notFound } from "next/navigation"
import { ProductDetail } from "./ProductDetail"

type Props = {
  params: Promise<{ slug: string }>
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params

  const product = await prisma.product.findUnique({
    where: { slug },
  })

  if (!product) {
    notFound()
  }

  const relatedProducts = await prisma.product.findMany({
    where: {
      supplierName: product.supplierName,
      id: { not: product.id },
    },
    take: 4,
  })

  const serializedProduct = {
    id: product.id,
    name: product.name,
    description: product.description,
    price: Number(product.price),
    images: product.images,
    slug: product.slug,
    supplierName: product.supplierName,
  }

  const serializedRelated = relatedProducts.map((p) => ({
    id: p.id,
    name: p.name,
    description: p.description,
    price: Number(p.price),
    images: p.images,
    slug: p.slug,
    supplierName: p.supplierName,
  }))

  return (
    <ProductDetail product={serializedProduct} relatedProducts={serializedRelated} />
  )
}
