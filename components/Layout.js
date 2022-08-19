import React from 'react'
import Navbar from './Navbar'
import Copyright from './Copyright'

function Layout({children}) {
  return (
    <>
        <div className='bg-[#212529] dark:bg-white'>
        <Navbar/>
        <main className='pt-16'>
        {children}
        </main>
        <Copyright/>
        </div>
    </>
  )
}

export default Layout