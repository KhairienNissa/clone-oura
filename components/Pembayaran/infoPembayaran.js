import React from "react";

function InfoPembayaran({ item }) {
  return (
    <div>
      <div className="my-3 mx-5 p-3 rounded-md bg-[#D0D0D0] ">
        <div className="grid grid-cols-2 py-1">
          <div className="text-[#515151]text-l font-bold flex items-center ">
            <img className="-mt-1 ml-2 w-11 opacity-70" src={item.name} />
          </div>
          <div className=" text-[#515151] text-xs flex mt-1 opacity-70 justify-end">
            Rp. 140.000
          </div>
        </div>

        <div className="p-2 text-[#515151] border-t ">
          <p className="text-[11px] font-semibold opacity-70">{item.name2}</p>
          <p className="text-[10px]  italic opacity-70">Dicek setiap 3 menit</p>
        </div>
      </div>
    </div>
  );
}

export default InfoPembayaran;
