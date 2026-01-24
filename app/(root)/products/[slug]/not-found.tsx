import Link from "next/link"

export default function ProductNotFound() {
  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">
          Product Not Found
        </h2>
        <Link
          href="/shop"
          className="text-emerald-700 hover:text-emerald-800 font-semibold"
        >
          Back to Shop
        </Link>
      </div>
    </div>
  )
}
