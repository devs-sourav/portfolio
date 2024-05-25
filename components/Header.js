import React from 'react'

export default function Header({title,HomeIcon}) {
    let Icon = HomeIcon
  return (
    <h3 className='uppercase flex items-center gap-x-3 text-[12px] font-light rounded-full px-5 py-1 border border-[#565656]'>
        <span><Icon className="w-4"/></span> <span>{title}</span>
    </h3>
  )
}
