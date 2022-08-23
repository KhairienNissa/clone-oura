import React from 'react'
import Image from 'next/image'

function ResultSearch({item, onClick}) {
  return (
    <> 
    <div onClick={onClick} className="flex hover:cursor-pointer h-auto py-2 px-3 border-b">
    <div>
      <img src={item.image} className="w-[100px] h-[100px] md:w-[40px] md:h-[40px]"/>
    </div>
    <div className="text-white px-4">
      <h2 className="text-md md:text-xs font-semibold py-2 md:py-0">{item.title}</h2>
      <h3 className="md:text-[12px] text-sm ">Proses Otomatis</h3>
    </div>
  </div>
  </>
  )
}

export default ResultSearch