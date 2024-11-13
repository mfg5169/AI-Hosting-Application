"use client"
import React, { useState } from 'react'
import { TEMPLATE } from '../../_components/Template';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2Icon } from 'lucide-react';


interface PROPS{
    selectedTemplate?: TEMPLATE;
    userFormInput:any;
    loading: boolean;
}

function FormSection({selectedTemplate, userFormInput, loading}:PROPS) {

    const [FormData, setData]=useState<any>();
    const handleInputChange = (event:any)=>{
        const {name,value} = event?.target;
        setData({...FormData, [name]:value})
    }

    const onSubmit=(e:any) =>{
        e.preventDefault()
        userFormInput(FormData);

    }
    return (
    <div className=' bg-white p-5 shadow-lg border rounded-lg'>
        
        <Image src = {selectedTemplate?.icon} alt = 'icon' width ={70} height={70}/>
    
        <h2 className='font-bold text-2xl mb-2 text-primary'>{selectedTemplate?.name}</h2> 
        <p className='text-sm text-gray-500'>{selectedTemplate?.desc}</p> 

        <form className='mt-6' onSubmit={onSubmit}>
            {selectedTemplate?.form?.map((item, index)=> (
                <div className='my-2 mb-7 flex flex-col gap-2'>
                    <label className='font-bold'>{item.label}</label>
                    {item.field=='input'?
                        <Input name={item.name} required={item?.required} onChange={handleInputChange}/>
                        :item.field=='textarea'?
                            <Textarea name={item.name} required={item?.required} onChange={handleInputChange}/>:null

                    }
                </div>
            ))}
            <Button disabled={loading} type="submit" className='w-full py-6'>{loading&&<Loader2Icon className='animate-spin'/>}Generate Content</Button>
        </form>
    </div>

  )
}

export default FormSection