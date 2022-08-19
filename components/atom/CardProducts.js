import React from 'react'
import CoverFire from '../../public/coverfire.png'
import Image from 'next/image'
import Router from 'next/router'

function CardProducts({item}) {
  return (
    <div onClick={()=> Router.push(`/${item.id}/detail`)} className='mx-0.5 mt-3 justify-center'>
        <div className='w-auto h-auto  rounded-xl shadow-2xl'>
        <img src={item.image} className='object-cover w-full rounded-t-xl h-36' />
        <div className='text-white dark:text-black text-center py-2 text-xs'>{item.title}</div>
        </div>
    </div>
  )
}

export default CardProducts