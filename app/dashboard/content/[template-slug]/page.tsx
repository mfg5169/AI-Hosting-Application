"use client"
import React, { useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import Templates from '@/app/(data)/Templates'
import { TEMPLATE } from '../../_components/Template'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { chatSession } from '@/utils/AIgen'
import { AIOutput } from '@/utils/schema'
import {db} from '@/utils/DB'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { useContext } from 'react'
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { useRouter } from 'next/router'
interface PROPS{
    params: {
        'template-slug': string
    }
}
function CreateNewContent(props:PROPS) {
    const selectedTemplate:TEMPLATE|undefined=Templates?.find((item)=> item.slug==props.params['template-slug']);
    const [loading,setloading] = useState(false);
    const [AIOuputt, setAI] = useState<string>();
    const route = useRouter()
    
    const{user}=useUser()
    const {InputUsage,setTotalUsage} = useContext(TotalUsageContext);

    const GenAI=async(formData: any)=>{
        const nm:number = Number({InputUsage})
        if(InputUsage > 10000){
            console.log("PLES")
            route.push('dashboard/billing')
            return;
        }

        setloading(true);
        const SelectedPrompt = selectedTemplate?.aiPrompt;
        const FinalAIPrompt= JSON.stringify(formData) + ', ' + SelectedPrompt;
        const result = await chatSession.sendMessage(FinalAIPrompt);
        console.log("we running")
        console.log(result.response.text())
        await saveInDb(JSON.stringify(formData), selectedTemplate?.slug,result?.response.text() )
        setloading(false)
        setAI(result?.response.text())

    }

    const saveInDb=async(formData:any, slug:any, aiResponse:string)=>{
        const result=await  db.insert(AIOutput).values({
            formData:formData,
            templateslug:slug ,
            aiResponse: aiResponse  ,
            createdBy:user?.primaryEmailAddress?.emailAddress ,
            createdAt: moment().format('DD/MM/YYYY')

        })
    }
    
    return (
    <div className='p-10'>
        <Link href={"/dashboard"}>
        <Button><ArrowLeft/>Back</Button>
        </Link>

    <div className='grid grid-cols-5 md:grid-cols-5 gap-5 py-5'>
        {/*Form Section */}
        <FormSection selectedTemplate={selectedTemplate}
        userFormInput={(v:any)=> GenAI(v)} 
        loading={loading}/>
        <div className='col-span-3'>
            <OutputSection  AIouput={AIOuputt}/>

        </div>

    </div>
    </div>
  )
}

export default CreateNewContent