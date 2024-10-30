import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { z } from 'zod'
import { Control, FieldPath } from 'react-hook-form'
import { authFormSchema } from '@/lib/utils'

const formSchema = authFormSchema('sign-up');

interface CustomInputs {
    control: Control<z.infer<typeof formSchema>>
    label: string,
    placeholder: string,
    name: FieldPath<z.infer<typeof formSchema>>,
    type: string
}

const CustomInput = ({ control, name, label, placeholder, type }: CustomInputs) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <div className='form-item'>
                    <FormLabel className='form-label'>
                        {label}
                    </FormLabel>
                    <div className='flex flex-col w-full'>
                        <FormControl>
                            <Input placeholder={placeholder} className='input-class' type={type} {...field} />
                        </FormControl>
                        <FormMessage className='form-message mt-2' />
                    </div>
                </div>
            )}
        />
    )
}

export default CustomInput