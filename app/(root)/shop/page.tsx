import { Suspense } from 'react'
import { ShopContent } from "./ShopContent"
import { ShopFiltersSkeleton } from "./ShopFilters"
import { ProductGridSkeleton } from "./ProductGrid"
import { getFilteredProducts, getSuppliers } from "@/lib/actions"

// Function to grab all PRODUCT and SUPPLIER data from server
async function ShopData() {
  const [products, suppliers] = await Promise.all([
    getFilteredProducts({}),
    getSuppliers()
  ])

  const supplierOptions = [
    { value: 'all', label: 'All Brands' },
    ...suppliers
  ]

  return (
    <ShopContent
      initialProducts={products}
      supplierOptions={supplierOptions}
    />
  )
}

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header - Static */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
            Shop Tools
          </h1>
          <p className="text-lg text-neutral-600">
            Professional jewelry tools and equipment
          </p>
        </div>

        {/* Shop Content with Suspense */}
        <Suspense fallback={
          <div className="flex flex-col lg:flex-row gap-8">
            <ShopFiltersSkeleton />
            <ProductGridSkeleton />
          </div>
        }>
          <ShopData />
        </Suspense>
      </div>
    </div>
  )
}
