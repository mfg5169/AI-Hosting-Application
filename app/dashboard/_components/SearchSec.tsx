import React from 'react'
import { Search } from 'lucide-react'


{'learn whst do the brackets do'}
function SearchSec({onSearchInput}: any) {
  return (
    <div className='p-10 bg-gradient-to-br from-purple-500 via-purple-700 to-blue-500 flex justify-center items-center text-white flex-col'>
        <h2 className='text-3xl font-bold f'>Browse All Templates</h2>
        <p>What would you like to craete today?</p>
        <div className='w-full flex justify-center items-center'>
            <div className='flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[30%]'>
                <Search className='text-primary'/>
                <input type='text' onChange={(event)=>onSearchInput(event.target.value)} placeholder='Search' className='bg-transparent w-full outline-none text-black'/>

            </div>
        </div>
    </div>
  )
}

export default SearchSec