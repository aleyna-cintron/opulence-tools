// lib/errors.ts
import { Prisma } from '@/app/generated/prisma';
import { ZodError } from 'zod';

type ErrorResult = {
  success: false;
  message: string[];
}
export type ActionResult = 
  | { success: true }
  | { success: false; message: string[] };


export function handleError(error: unknown): ErrorResult {
  if (error instanceof ZodError) {
    return { success: false, message: error.issues.map(issue => issue.message) };
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    switch (error.code) {
      case 'P2002':
        return { success: false, message: ['An account with this email already exists. Try signing in instead.'] };
      case 'P2025':
        return { success: false, message: ['Account not found. Please check your credentials or sign up.'] };
      case 'P2003':
        return { success: false, message: ['Unable to complete this action due to a data conflict.'] };
      case 'P2014':
        return { success: false, message: ['This action would break required relationships in your data.'] };
      case 'P2024':
        return { success: false, message: ['Connection timed out. Please try again.'] };
      default:
        return { success: false, message: ['Something went wrong with the database. Please try again later.'] };
    }
  }

  if (error instanceof Prisma.PrismaClientInitializationError) {
    return { success: false, message: ['Unable to connect to the server. Please try again later.'] };
  }

  if (error instanceof Error) {
    // Log the actual error for debugging
    console.error(error.message);
    return { success: false, message: ['An unexpected error occurred. Please try again.'] };
  }

  return { success: false, message: ['Something went wrong. Please try again.'] };
}