import React from 'react'

function BgMethode({item, className}) {
  return (
    <div>
        <div className={`bg-white p-0.5 mx-1 w-8 h-3.5 rounded-sm mt-2 md:mt-0 ${className}`}>
            <img src={item.data} className='w-full h-full'/>

        </div>

    </div>
  )
}

export default BgMethode