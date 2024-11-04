import React from 'react'
import SideRoute from './_components/SideRoute'

function layout({
    children,
    }: Readonly<{
    children : React.ReactNode;
  }>) {
  return (
    <div>
        {/* md: tells pag ewhen page is of medium size or larger to do the following*/}
        <div className='md:w-64 hidden md:block fixed'>
            <SideRoute/> 
        </div>
        <div className='md:ml-64'>
            {children}
        </div>

    </div>
  )
}

export default layout