import React from 'react'
import {CgNotes} from 'react-icons/cg'
import BottomHome from '../components/bottomHome'
import Navbar from '../components/Navbar'
import Copyright from '../components/Copyright'
import Button from '../components/atom/Button'
import FixedButton from '../components/FixedButton'

function CekInvoice() {
  return (
    <div>
      <div className='md:w-5/12 my-11 mx-5 shadow-2xl md:mx-auto'>
        <h1 className='p-4 text-white text-lg mb-2 dark:border-gray-300 border-b border-gray-700 dark:text-black'>Cek Invoice</h1>
      <div>
          <h1 className='px-4 text-white text-md pt-3 mb-1 dark:text-black'>Invoice Number:</h1>
          <div className='flex px-4 mb-2'>
            <div className='w-1/12 rounded-l-md p-2 bg-slate-300 dark:text-black'><CgNotes/></div>
              <input className=' dark:bg-white dark:text-black dark:border h-9 w-11/12 px-3 placeholder:text-sm rounded-r-md' type="text" placeholder='0S9634xxxxx' />
            
          </div>
          <div className='flex w-full justify-end px-4 pb-5'> 
            <Button>Check</Button></div>
        </div>
      </div>
      <BottomHome/>
      <FixedButton/>
    </div>
  )
}

export default CekInvoice