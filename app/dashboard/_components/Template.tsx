import Templates from '@/app/(data)/Templates'
import React, { useEffect, useState } from 'react'
import TempCard from './TempCard'


export interface TEMPLATE{
    name:string,
    desc:string,
    icon:string,
    category:string,
    slug: string,
    aiPrompt: string

    //allows input to be optimal and defines it as another interface
    form?:FORM[]
}

export interface FORM{
    label:string,
    field: string,
    name:string,
    required?:boolean


}
function TemplateList({UserInput}:any) {
    
    const [TemplateList, setTempList]= useState(Templates)
    useEffect(()=>{
        if(UserInput){
            const filterdata=Templates.filter(item=>
            item.name.toLowerCase().includes(UserInput.toLowerCase()));
            setTempList(filterdata)

        }

        else{
            setTempList(Templates)
        }
}, [UserInput])
    return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5
    p-10 '>
        {TemplateList.map((item:TEMPLATE, index:number)=> (
        <TempCard{...item}/>
    ))}
    </div>
  )
}

export default TemplateList