import React from 'react'

function InfoPembayaran({item}) {
  return (
    <div>
      <div className="my-3 mx-5 p-3 rounded-md bg-slate-200 ">
              <div className="grid grid-cols-2">
              <div className="text-slate-600 text-lg font-bold flex ">
                <img className="-mt-1 ml-2 w-11 h-5" src={item.name}/>
              </div>
              <div className=" text-slate-400 text-xs flex mt-1 justify-end">
                Rp. 140.000
              </div>
            </div>
          
            <div className="p-2 text-slate-400 border border-t-slate-400">
              <p className="text-xs font-semibold">{item.name2}</p>
              <p className="text-xs  italic">Dicek setiap 3 menit</p>
            </div>
            </div>
    </div>
  )
}

export default InfoPembayaran