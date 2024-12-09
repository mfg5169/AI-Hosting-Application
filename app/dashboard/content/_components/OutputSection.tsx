import React, { useEffect, useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

interface PROPS{
    AIouput?: string;
}

function OutputSection({AIouput}:PROPS) {
    const edRef:any = useRef()
    useEffect(()=>{
            const editorInstance = edRef.current.getInstance();
            editorInstance.setMarkdown(AIouput)
    },[AIouput])
  return (
    <div className='bg-white shadow-lg border rounded-lg'> 
    <div className='flex justify-between items-center p-5'>
        <h2>Your Result</h2>
        
        <Button onClick={()=>navigator.clipboard.writeText(AIouput)}><Copy/>Copy</Button>

    </div>
      <Editor
      ref={edRef}
    initialValue="Here"
    initialEditType="wysiwyg"
    useCommandShortcut={true}
    onChange={()=>console.log(edRef.current.getInstance().getMarkdown())}
  />
    ;</div>
  )
}

export default OutputSection