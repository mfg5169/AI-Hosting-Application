"use client"
import React, { useState } from 'react'
import SideRoute from './_components/SideRoute'
import Header from './_components/Header';
import { TotalUsageContext } from '../(context)/TotalUsageContext';

function layout({
    children,
    }: Readonly<{
    children : React.ReactNode;
  }>) {
    const [InputUsage,setTotalUsage] = useState<number>(0);
    console.log("INPUT:" , InputUsage)
  return (
    <TotalUsageContext.Provider value = {{InputUsage,setTotalUsage}}>
    <div className='bg-slate-100 h-screen'>
            {/* md: tells pag ewhen page is of medium size or larger to do the following*/}

            <div className='md:w-64 hidden md:block fixed'>
                <SideRoute/> 
            </div>
            <div className='md:ml-64'>
                <Header/>
                {children}
            </div>

        </div>

    </TotalUsageContext.Provider>
  )
}

export default layout