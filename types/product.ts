import {z} from 'zod';
import { cartItemSchema, insertCartSchema, insertProductSchema } from '@/lib/validators';

// Type for product form validation (insert/update)
export type ProductInput = z.infer<typeof insertProductSchema>;

// Type for serialized products returned from the database
export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  images: string[];
  featured: boolean;
  price: string;
  supplierName: string | null;
  supplierSku: string | null;
  supplierUrl: string | null;
  createdAt: string;
  updatedAt: string;
}

export type Cart = z.infer<typeof insertCartSchema>;
export type CartItem = z.infer<typeof cartItemSchema>;
