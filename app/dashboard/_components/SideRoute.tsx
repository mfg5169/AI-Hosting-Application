import React from 'react'
import Image from  'next/image'
import { FileClock, Home, Settings, WalletCards } from 'lucide-react';
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
            nam:'Home',
            icon: WalletCards,
            path: '/dashboard/billing'
        },
        {
            nam:'Home',
            icon: Settings,
            path: '/'
        }

    ]
  return (
    /* p-5 means a padding of five and shadwo-sm is shhadow smal*/
    <div className = 'h-screen p-5 shadow-sm border'>
        <div className='flex justify-center'>
        <Image src = {'photo.svg'} alt = 'logo' width={100} height={100}/> </div>
        <div>
            {MenuList.map((menu, index) =>(

                <div>
                    <menu.icon/>
                    <h2>{menu.nam}</h2>
                </div>

            ))}
        </div>
        </div>
  );
}

export default SideRoute;