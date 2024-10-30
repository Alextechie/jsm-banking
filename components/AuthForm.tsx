"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CustomInput from './CustomInput'
import { authFormSchema } from '@/lib/utils'
import { Loader2 } from 'lucide-react'
import SignUp from '@/app/(auth)/sign-up/page'
import { useRouter } from 'next/router'

const formSchema = z.object({
    email:
        z.string()
            .email()
            .min(2, { message: "Username should have a min os 2 characters" })
            .max(50, { message: "Username should have a max of 50 chars" }),
    password:
        z.string()
            .min(8, { message: 'Password must be atleast 8 characters' })
            .max(30, { message: "Password must not be more than 30 characters" })
})

const AuthForm = ({ type }: { type: string }) => {
    const router = useRouter();
    const [user, setUser] = useState(null);

    const [isLoading, setIsLoading] = useState(false);

    const formSchema = authFormSchema(type);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    // submitting the form
    const onSubmit = async (data: z.infer<typeof formSchema>) =>  {
        // do something with form values
        setIsLoading(true);
        console.log(data)
        try{
            // sign up with appwrite and create a plaid token
            if(type === 'sign-up'){
                // const newUser = await SignUp(data)
                // setUser(newUser)
            }

            if(type === 'sign-in'){
                // const response = await SignIn({
                //     email: data.email,
                //     password: data.password
                // })
                // if(response) router.push("/")
            }
        }catch(err){
            console.log(err)
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <section className='auth-form'>
            <header className="flex flex-col gap-5 md:gap-8">
                <Link href="/"
                    className="mb-2 cursor-pointer items-center gap-2 flex">
                    <Image
                        src={"/icons/logo.svg"}
                        alt=""
                        width={34}
                        height={34}
                    />
                    <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Horizon</h1>
                </Link>
                <div className="flex flex-col gap-1 md:gap-3">
                    <h1 className='text-24 lg:text-36 font-semibold text-gray-900'>
                        {user ? 'Link Account' : type === 'sign-in' ? 'Sign In' : 'Sign Up'}
                        <p className="text-16 font-normal text-gray-600">
                            {user
                                ? 'Link your account to get started'
                                : 'Please enter your details'
                            }
                        </p>
                    </h1>
                </div>
            </header>
            {user ? (
                <div className="flex flex-col gap-4">
                    {/**Plaid link */}
                </div>
            ) : (
                <>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                            {type === 'sign-up' && (
                                <>
                                    <div className='flex gap-11'>
                                        <CustomInput control={form.control} label='First Name' placeholder='John' name='firstName' type='text'/>
                                        <CustomInput control={form.control} label='Last Name' placeholder='ex: Doe' name='lastName' type='text'/>
                                    </div>
                                    <CustomInput control={form.control} label='Address' placeholder='Enter your specific address' name='address' type='text'/>
                                    <CustomInput control={form.control} label='City' placeholder='City name' name='city' type='text'/>
                                    <div className='flex gap-11'>
                                        <CustomInput control={form.control} label='State' placeholder='ex: NAI ' name='state' type='text'/>
                                        <CustomInput control={form.control} label='Postal Code' placeholder='ex: 00208' name='postalCode' type='text'/>
                                    </div>
                                    <div className='flex gap-16'>
                                        <CustomInput control={form.control} label='Date of Birth' placeholder='YYYY-MM-DD' name='date' type='date' />
                                        <CustomInput control={form.control} label='SSN' placeholder='ex: 1109' name='ssn' type='text'/>
                                    </div>
                                </>
                            )}
                            <CustomInput control={form.control} label='Email' placeholder='Enter your email' name='email' type='email'/>
                            <CustomInput control={form.control} label='Password' placeholder='Enter your password' name='password' type='password'/>
                            <div className='flex flex-col gap-4'>
                                <Button type='submit' className='form-btn' disabled={isLoading}>
                                    {isLoading ? (
                                        <>
                                            <Loader2 size={20}
                                                className='animate-spin' /> &nbsp;
                                            Loading...
                                        </>
                                    ) : type === 'sign-in'
                                        ? 'Sign In' : 'Sign Up'}
                                </Button>
                            </div>
                        </form>
                    </Form>
                    <footer className='flex justify-center gap-1'>
                        <p className='text-14 font-normal text-gray-600'>{type === 'sign-in'
                            ? 'Dont have an account?'
                            : 'Already have an account?'
                        }</p>
                        <Link href={type === 'sign-in' ? '/sign-up' : '/sign-in'} className='form-link' >
                            {type === 'sign-in' ? 'Sign Up' : 'Sign In'}
                        </Link>
                    </footer>
                </>
            )}
        </section>
    )
}

export default AuthForm