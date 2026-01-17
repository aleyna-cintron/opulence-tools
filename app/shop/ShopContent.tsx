"use client"
import { useState, useTransition } from "react"
import { ShopFilters } from "./ShopFilters"
import { ProductGrid } from "./ProductGrid"
import { getFilteredProducts } from "@/lib/actions"
import type { Product } from '@/types'

type SortBy = 'featured' | 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc'

type SupplierOption = { value: string; label: string }

type Props = {
  initialProducts: Product[]
  supplierOptions: SupplierOption[]
}

export function ShopContent({ initialProducts, supplierOptions }: Props) {
  const [products, setProducts] = useState(initialProducts)
  const [selectedSupplier, setSelectedSupplier] = useState('all')
  const [priceRange, setPriceRange] = useState('all')
  const [sortBy, setSortBy] = useState<SortBy>('featured')
  const [isPending, startTransition] = useTransition()

  const fetchProducts = (supplier: string, price: string, sort: SortBy) => {
    startTransition(async () => {
      const filtered = await getFilteredProducts({
        supplier,
        priceRange: price as 'all' | 'under50' | '50to100' | '100to200' | 'over200',
        sortBy: sort
      })
      setProducts(filtered)
    })
  }

  const handleSupplierChange = (value: string) => {
    setSelectedSupplier(value)
    fetchProducts(value, priceRange, sortBy)
  }

  const handlePriceRangeChange = (value: string) => {
    setPriceRange(value)
    fetchProducts(selectedSupplier, value, sortBy)
  }

  const handleSortByChange = (value: string) => {
    const newSort = value as SortBy
    setSortBy(newSort)
    fetchProducts(selectedSupplier, priceRange, newSort)
  }
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <ShopFilters
        selectedSupplier={selectedSupplier}
        priceRange={priceRange}
        supplierOptions={supplierOptions}
        onSupplierChange={handleSupplierChange}
        onPriceRangeChange={handlePriceRangeChange}
        isPending={isPending}
      />
      <ProductGrid
        products={products}
        sortBy={sortBy}
        onSortByChange={handleSortByChange}
        isPending={isPending}
      />
    </div>
  )
}
