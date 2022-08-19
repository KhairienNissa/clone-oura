import React
 from 'react'

function TopUp({children}) {
  return (
    <>
        <div className='text-white dark:text-black mt-2 text-xl'>{children}</div>
        <div className='mt-2 w-[63px] bg-logo-color h-[5px] rounded-sm'></div>
    </>
  )
}

export default TopUp