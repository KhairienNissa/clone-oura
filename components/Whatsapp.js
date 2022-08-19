import React from 'react'
import Button from './atom/Button'
import Captcha from './Captcha'


function Whatsapp() {
  return (
    <div>
         <div className=" rounded-md mt-3 shadow-2xl  border border-gray-800 mx-3 my-3 p-4">
        <h1 className="text-white text-lg md:mx-3 dark:text-black">Nomor Whatsapp</h1>
        <div className=" mt-2">
          <div className="mt-5 md:mt-3 md:mx-3">
            <label className="text-white dark:text-black" htmlFor="user">
              Nomor Whatsapp
            </label>
            <br />
            <input
              type="number"
              placeholder="Nomor Whatsapp [628xxxxx]"
              className=" dark:bg-white dark:border-2 dark:text-black w-full p-2 placeholder:text-md rounded-md "
            />
            <Captcha/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Whatsapp