import React from 'react'
import { HomeIcon } from "lucide-react";

export default function Header({title,HomeIcon}) {
    
  return (
    <div className='uppercase text-[12px] font-light rounded-full px-5 py-1 border border-[#565656] flex items-center gap-x-3'>
        {HomeIcon}
        {title}
    </div>
  )
}
