"use client"
import { Filter } from "lucide-react"
import { ProductCard } from "@/components/ProductCard"
import type { Product } from '@/types'
import { SORT_OPTIONS } from "@/lib/constants"

type SortBy = 'featured' | 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc'


type Props = {
  products: Product[]
  sortBy: SortBy
  isPending?: boolean
  onSortByChange: (value: string) => void
}

export function ProductGrid({ products, sortBy, onSortByChange, isPending = false }: Props) {
  return (
    <div className="flex-1">
      {/* Sort Options */}
      <div className="bg-white rounded-lg border border-neutral-200 p-4 mb-6 flex justify-between items-center">
        <p className="text-sm text-neutral-600">
          Showing{" "}
          <span className="font-semibold">{products.length}</span>{" "}
          products
        </p>
        <div className="flex items-center space-x-2">
          <label className="text-sm text-neutral-600">Sort by:</label>
          <select
            value={sortBy}
            onChange={(e) => onSortByChange(e.target.value)}
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
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
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
  )
}

export function ProductGridSkeleton() {
  return (
    <div className="flex-1">
      {/* Sort Options Skeleton */}
      <div className="bg-white rounded-lg border border-neutral-200 p-4 mb-6 flex justify-between items-center">
        <div className="h-4 w-32 bg-neutral-200 rounded animate-pulse" />
        <div className="flex items-center space-x-2">
          <div className="h-4 w-14 bg-neutral-200 rounded animate-pulse" />
          <div className="h-8 w-36 bg-neutral-200 rounded animate-pulse" />
        </div>
      </div>

      {/* Products Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white rounded-lg border border-neutral-200 overflow-hidden">
            <div className="aspect-square bg-neutral-200 animate-pulse" />
            <div className="p-4 space-y-3">
              <div className="h-4 w-3/4 bg-neutral-200 rounded animate-pulse" />
              <div className="h-4 w-1/2 bg-neutral-200 rounded animate-pulse" />
              <div className="h-6 w-20 bg-neutral-200 rounded animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
