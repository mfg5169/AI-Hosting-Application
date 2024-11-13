"use client"
import React, { useEffect } from 'react'
import Image from  'next/image'
import { FileClock, Home, Settings, WalletCards } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import UsageTrack from './UsageTrack';
function SideRoute() {

    //can view the lucide library online  
    const MenuList = [
        {
            nam:'Home',
            icon: Home,
            path: '/dashboard'
        },
        {
            nam:'History',
            icon: FileClock,
            path: '/dashboard/history'
        },
        {
            nam:'Billing',
            icon: WalletCards,
            path: '/dashboard/billing'
        },
        {
            nam:'Home',
            icon: Settings,
            path: '/'
        }

    ]

    const path = usePathname();
    useEffect(()=>(console.log(path)),[])
  return (
    /* p-5 means a padding of five and shadwo-sm is shhadow smal*/
    <div className = ' relative h-screen p-5 shadow-sm border bg-white'> 
        <div className='flex justify-center'>
        <Image src = {'photo.svg'} alt = 'logo' width={100} height={100}/> </div>
        {/* margin top is mt */}
        <div className='mt-10'>
            {MenuList.map((menu, index) =>(
                <Link href={menu.path}>
                <div className={`items-center flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg
                ${path==menu.path&&'bg-primary'}`}>
                    <menu.icon className='h-6 w-6'/>
                    <h2>{menu.nam}</h2>
                </div>
                </Link>

            ))}
        </div>
        <div className='absolute bottom-10 left-0 w-full' >
        <UsageTrack/>

        </div>
    </div>
  );
}

export default SideRoute;