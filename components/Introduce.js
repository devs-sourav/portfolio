import React from 'react'
import HeadNav from './HeadNav'
import BannerHomeType from './BannerHomeType'
import CounterType from './CounterType'

export default function Introduce() {
  return (
    <section data-section className='pb-28' id="home">
        <HeadNav/>
        <BannerHomeType/>
        <CounterType/>
    </section>
  )
}
 // className='group cursor-pointer text-[#999999] ease-linear transition-all hover:text-[#FFCC01] relative'