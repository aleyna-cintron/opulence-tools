import Link from "next/link"
import type { Product } from '@/app/types'

type Props = {
  product: Product
}

export function ProductCard({ product }: Props) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group bg-white rounded-lg border border-neutral-200 overflow-hidden hover:shadow-lg hover:border-emerald-200 transition-all"
    >
      {/* Image */}
      <div className="aspect-square bg-neutral-100 relative overflow-hidden">
        {product.images.length > 0 ? (
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg
              className="w-16 h-16 text-neutral-300"
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

      {/* Content */}
      <div className="p-4">
        {product.supplierName && (
          <p className="text-xs font-medium text-emerald-600 mb-1">
            {product.supplierName}
          </p>
        )}
        <h3 className="font-semibold text-neutral-900 group-hover:text-emerald-600 transition-colors line-clamp-2 mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-neutral-500 line-clamp-2 mb-3">
          {product.description}
        </p>
        <p className="text-lg font-bold text-neutral-900">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </Link>
  )
}
