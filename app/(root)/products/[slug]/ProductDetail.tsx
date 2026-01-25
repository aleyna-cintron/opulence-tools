"use client"

import Link from "next/link"
import { ShoppingCart, TruckIcon, Shield, Check } from "lucide-react"
import { ProductCard } from "@/components/ProductCard"
import { Product } from "@/types/product"

type Props = {
  product: Product
  relatedProducts: Product[]
}

export function ProductDetail({ product, relatedProducts }: Props) {
  const handleAddToCart = () => {
    // TODO: Implement cart functionality
    console.log(`Added ${product.name} to cart`)
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-neutral-600 mb-6">
          <Link href="/" className="hover:text-emerald-700">
            Home
          </Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-emerald-700">
            Shop
          </Link>
          <span>/</span>
          <span className="text-neutral-900">{product.name}</span>
        </div>

        {/* Product Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div>
            <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden aspect-square">
              {product.images.length > 0 ? (
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-neutral-100">
                  <svg
                    className="w-24 h-24 text-neutral-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div>
            {product.supplierName && (
              <div className="text-sm text-emerald-600 font-medium mb-2">
                {product.supplierName}
              </div>
            )}
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              {product.name}
            </h1>

            <div className="flex items-baseline space-x-3 mb-6">
              <span className="text-4xl font-bold text-neutral-900">
                ${parseFloat(product.price).toFixed(2)}
              </span>
            </div>

            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              {product.description}
            </p>

            <button
              onClick={handleAddToCart}
              className="w-full bg-neutral-900 text-white py-4 rounded-md hover:bg-neutral-800 transition-colors flex items-center justify-center space-x-2 text-lg font-semibold mb-6"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Add to Cart</span>
            </button>

            {/* Trust Indicators */}
            <div className="space-y-3 mb-8 bg-neutral-100 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <TruckIcon className="w-5 h-5 text-emerald-700" />
                <span className="text-sm text-neutral-700">
                  Free shipping on orders over $100
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-emerald-700" />
                <span className="text-sm text-neutral-700">
                  Manufacturer warranty included
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-emerald-700" />
                <span className="text-sm text-neutral-700">
                  Quality guaranteed or your money back
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              Related Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
