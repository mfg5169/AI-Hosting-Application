import React from 'react'
import { Search } from 'lucide-react'
function Header() {
  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-between bg-white items-center'>
        <div className='flex gap-2 items-center border rounded-md max-w-lg'>
            <Search/>
            <input type = 'text' placeholder='Search..' className='outline-name'></input>

        </div>
        {/* used to space out elelemnts or to help space out */}
        <hr className='my-5 h-2'/>

        <div className='mt-3'>
            {/* px-2 is padding in x direction */}
            <h2 className = 'bg-primary p1 rounded-full text-xs text-white px-2'>Join Membership just for $9.99/Month</h2>
        </div>
    </div>
  )
}

export default Header