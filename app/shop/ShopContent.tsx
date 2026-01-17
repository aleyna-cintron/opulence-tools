"use client"

import { useState, useMemo, useEffect, useTransition } from "react"
import { Filter, SlidersHorizontal } from "lucide-react"
import { ProductCard } from "@/components/ProductCard"
import type { Product } from '@/types'
import { getFilteredProducts, type ProductFilters } from '@/lib/actions'

const PRICE_OPTIONS = [
  { label: "All Prices", value: "all" },
  { label: "Under $50", value: "under50" },
  { label: "$50 - $100", value: "50to100" },
  { label: "$100 - $200", value: "100to200" },
  { label: "Over $200", value: "over200" }
] as const

const SORT_OPTIONS = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-low" },
  { label: "Price: High to Low", value: "price-high" },
  { label: "Name: A-Z", value: "name" }
] as const

type PriceRange = ProductFilters['priceRange']
type SortBy = ProductFilters['sortBy']

type Props = {
  products: Product[]
}

export function ShopContent({ products }: Props) {
  const [priceRange, setPriceRange] = useState<PriceRange>("all")
  const [sortBy, setSortBy] = useState<SortBy>("featured")
  const [supplierFilter, setSupplierFilter] = useState<string>("all")
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)
  const [isPending, startTransition] = useTransition()

  // Get Unique Suppliers from initial products
  const supplierOptions = useMemo(() => {
    const suppliers = Array.from(
      new Set(products.map((p) => p.supplierName).filter(Boolean))
    ) as string[]

    return [
      { label: "All Brands", value: "all" },
      ...suppliers.map(s => ({ label: s, value: s }))
    ]
  }, [products])

  // Fetch filtered products from server when filters change
  useEffect(() => {
    startTransition(async () => {
      const results = await getFilteredProducts({
        brand: supplierFilter,
        priceRange,
        sortBy
      })
      setFilteredProducts(results)
    })
  }, [supplierFilter, priceRange, sortBy])

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
            Shop Tools
          </h1>
          <p className="text-lg text-neutral-600">
            Professional jewelry tools and equipment
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 shrink-0">
            <div className="bg-white rounded-lg border border-neutral-200 p-6 sticky top-4">
              <div className="flex items-center space-x-2 mb-6">
                <SlidersHorizontal className="w-5 h-5 text-neutral-600" />
                <h2 className="text-lg font-semibold text-neutral-900">
                  Filters
                </h2>
              </div>

              {/* Supplier Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-neutral-900 mb-3">
                  Brand
                </h3>
                <div className="space-y-2">
                  {supplierOptions.map((brand) => (
                    <label
                      key={brand.value}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="supplier"
                        checked={supplierFilter === brand.value}
                        onChange={() => setSupplierFilter(brand.value)}
                        className="text-emerald-600 focus:ring-emerald-500"
                      />
                      <span className="text-sm text-neutral-700">
                        {brand.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div>
                <h3 className="text-sm font-semibold text-neutral-900 mb-3">
                  Price Range
                </h3>
                <div className="space-y-2">
                  {PRICE_OPTIONS.map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="price"
                        checked={priceRange === option.value}
                        onChange={() => setPriceRange(option.value)}
                        className="text-emerald-600 focus:ring-emerald-500"
                      />
                      <span className="text-sm text-neutral-700">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort Options */}
            <div className="bg-white rounded-lg border border-neutral-200 p-4 mb-6 flex justify-between items-center">
              <p className="text-sm text-neutral-600">
                Showing{" "}
                <span className="font-semibold">{filteredProducts.length}</span>{" "}
                products
              </p>
              <div className="flex items-center space-x-2">
                <label className="text-sm text-neutral-600">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortBy)}
                  className="border border-neutral-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  {SORT_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Products */}
            <div className={isPending ? "opacity-50 pointer-events-none" : ""}>
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-lg border border-neutral-200 p-12 text-center">
                  <Filter className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    No products found
                  </h3>
                  <p className="text-neutral-600">Try adjusting your filters</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
