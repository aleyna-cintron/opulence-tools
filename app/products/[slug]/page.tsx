import { prisma } from "@/db/client"
import { notFound } from "next/navigation"
import { ProductDetail } from "./ProductDetail"
import { getProductBySlug } from "@/lib/actions"
import { serializeProducts } from "@/lib/utils"

type Props = {
  params: Promise<{ slug: string }>
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  if (!product) notFound();


  const relatedProducts = await prisma.product.findMany({
    where: {
      supplierName: product.supplierName,
      id: { not: product.id },
    },
    take: 4,
  })

  return (
    <ProductDetail product={product} relatedProducts={serializeProducts(relatedProducts)} />
  )
}
