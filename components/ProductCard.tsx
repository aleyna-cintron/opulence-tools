'use client'
import Link from "next/link"
import type { Product } from '@/types'
import { CartContext } from "@/context/CartContext"
import { useContext } from "react"

export function ProductCard({ product }: { product: Product }) {
  const cartContext = useContext(CartContext); 
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
        <p className="text-lg font-bold text-neutral-900 mb-3">
          ${product.price}
        </p>
        {/* TODO: replace `false` with actual cart quantity check, e.g. cartQuantity > 0 */}
        { cartContext.cartItems.some((item) => item.id === product.id) ? (
          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                // TODO: decrement quantity / remove from cart if 1
              }}
              className="w-8 h-8 flex items-center justify-center border border-neutral-300 text-neutral-600 rounded-md hover:bg-neutral-100 transition-colors cursor-pointer text-lg font-medium"
            >
              &minus;
            </button>
            <span className="w-8 text-center text-sm font-semibold text-neutral-900">
              {/* TODO: replace with actual quantity */}
              {cartContext.cartItems.find((item) => item.id === product.id)?.quantity}
            </span>
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                cartContext.addToCart({ ...product, price: parseFloat(product.price), quantity:1 })
              }}
              className="w-8 h-8 flex items-center justify-center bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors cursor-pointer text-lg font-medium"
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
                // TODO: add to cart with quantity 1
                cartContext.addToCart({ ...product, price: parseFloat(product.price), quantity: 1 })
                console.log(cartContext.cartItems)
            }}
            className="w-full bg-emerald-600 text-white text-sm font-medium py-2 px-3 rounded-md hover:bg-emerald-700 transition-colors cursor-pointer"
          >
            Add to Cart
          </button>
        )}
      </div>
    </Link>
  )
}
