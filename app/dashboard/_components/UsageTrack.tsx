
import { Button } from '@/components/ui/button'
import { db } from '@/utils/DB';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import React, { useContext, useEffect, useState } from 'react'
import { HISTORY } from '../history/page';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';

function UsageTrack() {

    const {user} = useUser(); 
    const { InputUsage,setTotalUsage} = useContext(TotalUsageContext);

    const GetData=async()=>{
        {/*@ts-ignore */}
        const result:HISTORY[]= await db.select().from(AIOutput).where(eq(AIOutput.createdBy,user?.primaryEmailAddress?.emailAddress ))
        GetTotalUsage(result)

    }
    
    useEffect(()=>
        {        GetData();
        },    [user])
    const  GetTotalUsage=(result:HISTORY[])=>{{
        let total:number = 0
        result.forEach(element =>{
            total=total+Number(element.aiResponse?.length)
        });

        setTotalUsage(total)
        console.log(InputUsage);

    }}

      // Log `totalUsage` whenever it changes
  useEffect(() => {
    console.log("Updated totalUsage:", InputUsage);
  }, [InputUsage]);
    return (
    <div className=' m-5'>
        <div className='bg-primary text-white rounded-lg p-3'>
            <h2>Credits</h2>
            <div className='font-mediumh-2 bg-[#9981f9] w-full rounded-full mt-3'>
                <div className='h-2 bg-white rounded-fill' 
                style={{width:(InputUsage/10000)*100 +'%'}}></div>
            </div>
            <h2 className='text-sm'>{InputUsage}/10,000 Credit</h2>
        </div>
        <Button variant={'secondary'} className='w-full my-3'>Upgrade</Button>

    </div>
  )
}

export default UsageTrack