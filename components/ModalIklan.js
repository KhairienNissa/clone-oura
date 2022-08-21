import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Iklan from "../public/iklan.png";
import Image from "next/dist/client/image";
import Button from "./atom/Button";
import Cookie from "js-cookie";

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(true);
  const [show, setShow] = useState("");

  const modal = Cookie.get("dontShow");

  const modalOnchange = (e) => {
    if (e.target.checked) {
      setShow(e.target.value);
    } else {
      setShow("");
    }
  };

  console.log(show);

  function closeModal() {
    if (show) {
      Cookie.set("dontShow", "true");
    }
    setIsOpen(false);
  }

  return (
    <>
      <Transition appear show={modal ? false : isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-20" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-scroll">
            <div className="flex items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="dark:bg-white bg-[#212529] w-full md:w-8/12 h-[550px] transform overflow-y-scroll rounded-md p-4 text-left align-middle shadow-3xl transition-all">
                  <div className="border-2 border-abu-abu rounded-sm">
                    <Dialog.Title className="text-lg w-full h-auto px-2 pt-2 pb-3 rounded-t-sm bg-abu-abu text-white  ">
                      PERHATIKAN
                    </Dialog.Title>
                    <div className="mt-4 p-3 ">
                      <Image
                        src={Iklan}
                        alt="iklan"
                        width="1000px"
                        height="900px"
                      />
                      <ul className="text-xs text-white  dark:text-black text-semibold">
                        <li className="bg-[#00FF00] text-black py-1">
                          - Untuk Transfer Ke BCA a/n Messy Lusmitha Utami akan
                          delay sekitar 3-10 menit. Karena sistem dari bank BCA
                          Terutama Jika sedang EVENT. AKAN OFF PADA JAM 22:00 -
                          03:00 WIB.
                        </li>
                        <li className="py-1"> - Selalu simpan nomor INVOICE</li>
                        <li className="py-1 flex">
                          - <p className="bg-[#00FF00] text-black">Status DONE </p>{" "}
                          <p>= diamond sudah masuk ke akun kalian</p>
                        </li>
                        <li className=" py-1">
                          - Transfer sesuai totalan <span className="bg-[#00FF00] text-black"> yang bewarna HIJAU jangan
                          dilebihkan/dikurangi</span>
                        </li>
                      </ul>

                      <p className="text-xs mt-4 text-white  dark:text-black">
                        JIKA ADA KENDALA SILAHKAN HUBUNGI COSTUMER SERVICE PADA
                        BAGIAN KANAN BAWAH WEBSITE INI
                      </p>
                    </div>
                    <div className="mt-3 text-right text-[9px] py-1 px-4 text-white  dark:text-black">
                      <p>Updated: 2022-07-25 21:00:42</p>
                    </div>
                  </div>
                  <div className="py-3">
                    <div className="flex justify-start">
                      <div className="w-3 h-3 -mt-2 rounded-sm">
                        <input
                          type="checkbox"
                          id="vehicle1"
                          value={true}
                          onChange={modalOnchange}
                        />
                      </div>
                      <label
                        htmlFor="vehicle1"
                        className="text-white text-[10px] -mt-1 px-2  dark:text-black"
                      >
                        Jangan Tampilkan lagi
                      </label>
                    </div>
                    <div className="flex justify-end w-full -mt-6 ">
                      <Button onClick={closeModal}>Tutup</Button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
