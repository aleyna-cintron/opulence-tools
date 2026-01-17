"use client"
import { SlidersHorizontal } from "lucide-react"
import { PRICE_OPTIONS } from "@/lib/constants";

type SupplierOption = { value: string; label: string }

type Props = {
  selectedSupplier: string
  priceRange: string
  supplierOptions: SupplierOption[]
  onSupplierChange: (value: string) => void
  onPriceRangeChange: (value: string) => void
  isPending?: boolean
}

export function ShopFilters({
  selectedSupplier,
  priceRange,
  supplierOptions,
  onSupplierChange,
  onPriceRangeChange,
  isPending
}: Props) {
  return (
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
            Supplier
          </h3>
          <div className="space-y-2">
            {supplierOptions.map((option) => (
              <label
                key={option.value}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="supplier"
                  checked={selectedSupplier === option.value}
                  onChange={() => onSupplierChange(option.value)}
                  disabled={isPending}
                  className="text-emerald-600 focus:ring-emerald-500 disabled:opacity-50"
                />
                <span className="text-sm text-neutral-700">
                  {option.label}
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
                  onChange={() => onPriceRangeChange(option.value)}
                  disabled={isPending}
                  className="text-emerald-600 focus:ring-emerald-500 disabled:opacity-50"
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
  )
}

export function ShopFiltersSkeleton() {
  return (
    <aside className="lg:w-64 shrink-0">
      <div className="bg-white rounded-lg border border-neutral-200 p-6 sticky top-4">
        <div className="flex items-center space-x-2 mb-6">
          <div className="w-5 h-5 bg-neutral-200 rounded animate-pulse" />
          <div className="h-6 w-16 bg-neutral-200 rounded animate-pulse" />
        </div>

        {/* Supplier Filter Skeleton */}
        <div className="mb-6">
          <div className="h-4 w-12 bg-neutral-200 rounded animate-pulse mb-3" />
          <div className="space-y-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-neutral-200 rounded-full animate-pulse" />
                <div className="h-4 w-20 bg-neutral-200 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>

        {/* Price Range Skeleton */}
        <div>
          <div className="h-4 w-20 bg-neutral-200 rounded animate-pulse mb-3" />
          <div className="space-y-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-neutral-200 rounded-full animate-pulse" />
                <div className="h-4 w-16 bg-neutral-200 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}
