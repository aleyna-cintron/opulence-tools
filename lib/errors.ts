// lib/errors.ts
import { Prisma } from '@/app/generated/prisma';
import { ZodError } from 'zod';

export function handleError(error: unknown): { success: false; message: string } {
  if (error instanceof ZodError) {
    return { success: false, message: error.issues[0].message };
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    switch (error.code) {
      case 'P2002':
        return { success: false, message: 'This email already exists' };
      case 'P2025':
        return { success: false, message: 'Record not found' };
      default:
        return { success: false, message: 'Database error' };
    }
  }

  return { success: false, message: 'Something went wrong' };
}