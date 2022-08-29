import React from 'react'
import Logo from '../public/logo.png'
import Image from 'next/image'


function Logoo({variant}) {

  return (
    <div className="text-2xl font-bold">
        <Image src={Logo} width="78px" height="40px"/>
    </div>
  )
}

export default Logoo