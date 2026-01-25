import { z } from "zod";

// Accepts string from form, validates format, transforms to number
const currency = z.string()
  .regex(/^\d+(\.\d{1,2})?$/, 'price must be a valid currency format')
  .transform((val) => parseFloat(val))

// Schema for inserting products
export const insertProductSchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters'),
    slug: z.string().min(3, 'Slug must be at least 3 characters'),
    supplierName: z.string().min(3, 'Supplier name must be at least 3 characters'),
    description: z.string().min(3, 'Description must be at least 3 characters'),
    images: z.array(z.string()).min(1, 'Product must have at least 1 image'),
    featured: z.boolean().default(false),
    price: currency
})

// Schema for signing users in
export const credentialsSchema = z.object({
  email: z.email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters')
})

// Schema for signing up a user
export const signUpFormSchema = z.object({
  name: z.string().min(3, 'Name must be atleast 3 characters'),
  email: z.email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string().min(6, 'Password must be at least 6 characters')
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword']
  })