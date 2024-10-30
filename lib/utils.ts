import { clsx, type ClassValue } from "clsx"
import { format } from "path"
import { twMerge } from "tailwind-merge"
import { string, z } from "zod"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatAmount(amount: number): string {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "KES",
    minimumFractionDigits: 2
  })

  return formatter.format(amount)
}

export const authFormSchema = (type: string) => z.object({
  firstName: type === 'sign-in' ? z.string().optional() :  z.string().min(3).max(50),
  lastName: type === 'sign-in' ? z.string().optional() :  z.string().min(3).max(50),
  postalCode: type === 'sign-in' ? z.string().optional() :  z.string().min(5).max(8),
  city: type === 'sign-in' ? z.string().optional() :  z.string().min(5).max(8),
  ssn: type === 'sign-in' ? z.string().optional() :  z.string(),
  address: type === 'sign-in' ? z.string().optional() :  z.string(),
  state: type === 'sign-in' ? z.string().optional() :  z.string(),
  date: type === 'sign-in' ? z.string().optional() :  z.string().date(),
  email: z.string().email(),
  password: z.string().min(8),
})