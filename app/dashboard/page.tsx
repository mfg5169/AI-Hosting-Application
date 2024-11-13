"use client"
import React, {useState} from 'react'
import SearchSec from './_components/SearchSec'
import TemplateList from './_components/Template'
import { User } from 'lucide-react'

function Dashboard(){
    const [UserInput, setInput]=useState<string>()
    return(
        <div>

            {/* Searh Section */}
            <SearchSec onSearchInput={(value:string)=> setInput(value)}/>
            {/*seciton list */}
            <TemplateList UserInput={UserInput}/>
        </div>
    )
}

export default Dashboard