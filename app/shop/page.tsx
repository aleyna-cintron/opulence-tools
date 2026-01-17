import { ShopContent } from "./ShopContent"
import { getFilteredProducts } from "@/lib/actions"

export default async function ShopPage() {
  const products = await getFilteredProducts({})

  return <ShopContent products={products} />
}
