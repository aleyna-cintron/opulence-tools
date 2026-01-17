'use server'
import { prisma } from "@/db/client" 
import { serializeProducts } from "../utils"

export type ProductFilters = {
    brand?: string
    priceRange?: 'all' | 'under50' | '50to100' | '100to200' | 'over200'
    sortBy?: 'featured' | 'price-low' | 'price-high' | 'name'
}

// function to get filtered and sorted products
export async function getFilteredProducts(filters: ProductFilters) {
    const { brand, priceRange, sortBy } = filters

    // Build where clause
    const where: { supplierName?: string; price?: { lt?: number; gte?: number; lte?: number } } = {}

    if (brand && brand !== 'all') {
        where.supplierName = brand
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
    let orderBy: { price?: 'asc' | 'desc'; name?: 'asc' } | undefined
    switch (sortBy) {
        case 'price-low':
            orderBy = { price: 'asc' }
            break
        case 'price-high':
            orderBy = { price: 'desc' }
            break
        case 'name':
            orderBy = { name: 'asc' }
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