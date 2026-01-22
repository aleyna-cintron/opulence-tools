'use server'
import { prisma } from "@/db/client" 
import { serializeProduct, serializeProducts } from "../utils"

export type ProductFilters = {
    supplier?: string
    priceRange?: 'all' | 'under50' | '50to100' | '100to200' | 'over200'
    sortBy?: 'featured' | 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc'
}

export type WhereFilter = {
  supplierName?: string;
  price?: {
    lt?: number;      // less than
    gte?: number;     // greater than or equal
    lte?: number;     // less than or equal
    };
}

// function to get filtered and sorted products
export async function getFilteredProducts(filters: ProductFilters) {
    const { supplier, priceRange, sortBy } = filters

    // Build where clause
    const where: WhereFilter = {}

    if (supplier && supplier !== 'all') {
        where.supplierName = supplier
    }

    if (priceRange && priceRange !== 'all') {
        switch (priceRange) {
            case 'under50':
                where.price = { lt: 50 }
                break
            case '50to100':
                where.price = { gte: 50, lt: 100 }
                break
            case '100to200':
                where.price = { gte: 100, lt: 200 }
                break
            case 'over200':
                where.price = { gte: 200 }
                break
        }
    }

    // Build orderBy clause
    let orderBy: { price?: 'asc' | 'desc'; name?: 'asc'  | 'desc'} | undefined
    switch (sortBy) {
        case 'price-asc':
            orderBy = { price: 'asc' }
            break
        case 'price-desc':
            orderBy = { price: 'desc' }
            break
        case 'name-asc':
            orderBy = { name: 'asc' }
            break
        case 'name-desc':
            orderBy = { name: 'desc' }
            break
        default:
            orderBy = undefined
    }

    const products = await prisma.product.findMany({
        where,
        orderBy
    })

    return serializeProducts(products)
}

export async function getSuppliers() {
  const suppliers = await prisma.product.findMany({
    where: {
      supplierName: { not: null }  // ← Only returns non-null supplier names
    },
    select: { supplierName: true },
    distinct: ['supplierName'],
    orderBy: { supplierName: 'asc' }
  })
  
  return suppliers.map(s => ({
    value: s.supplierName!,  // Safe to use ! because we filtered nulls
    label: s.supplierName!
  }))
}

export async function getProductBySlug(slug: string) {
    const productBySlug = await prisma.product.findFirst({
        where: { slug: slug },
    })
    if (!productBySlug) return null
    return serializeProduct(productBySlug)
}