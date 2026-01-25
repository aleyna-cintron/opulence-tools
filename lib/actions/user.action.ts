'use server'

import { credentialsSchema, signUpFormSchema } from "../validators";
import { signIn, signOut } from '@/auth';
import { hash } from "bcrypt-ts-edge";
import { prisma } from '@/db/client'
import { redirect } from 'next/navigation';
import { handleError } from "../errors";

// Sign in the user with credentials
export async function signInWithCredentials(prevState: any, formData: FormData) {

    const parsed = credentialsSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password')
    });

  if (!parsed.success) {
    return handleError(parsed.error);
  }

  const result = await signIn('credentials', {
    ...parsed.data,
    redirect: false  // prevent throwing RedirectError
  });

  if (result?.error) {
    return { success: false, message: 'Invalid email or password' };
  }

  redirect('/shop');
}

// Sign user out
export async function signOutUser() {
    await signOut()
}

// Sign up user
export async function signUpUser(prevState: any, formData: FormData) {
  const parsed = signUpFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword'),
  });

  if (!parsed.success) {
    return handleError(parsed.error);
  }

  const hashPw = await hash(parsed.data.password, 10);

  try {
    await prisma.user.create({
      data: {
        name: parsed.data.name,
        email: parsed.data.email,
        password: hashPw
      }
    });
  } catch (error) {
    return handleError(error);
  }

  await signIn('credentials', {
    email: parsed.data.email,
    password: parsed.data.password,
    redirect: false
  });

  redirect('/shop');
}