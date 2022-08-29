import React, { useState, useEffect } from "react";
import Logoo from "./Logo";
import { FaHome } from "react-icons/fa";
import { HiSearch } from "react-icons/hi";
import { BiCalculator } from "react-icons/bi";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Switch, Transition } from "@headlessui/react";
import DropDownNav from "./atom/DropDownNav";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const Router = useRouter();
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const size = useWindowSize();
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      <nav
        className={`md:px-11 w-full fixed -top-1 drop-shadow-2xl font-poppins z-30 md:bg-[#212529] md:dark:bg-white`}
      >
        <div className="justify-between   mx-auto lg:max-w-7xl md:items-center md:flex md:px-4 ">
          <div className="px-4 overflow-hidden z-50  md:z-0 relative dark:bg-white bg-[#212529]">
            <div className="flex md:flex items-center justify-between py-4 z-50">
              <a
                className="hover:cursor-pointer"
                onClick={() => Router.push("/")}
              >
                <Logoo />
              </a>
              <div className="md:mx-5">
                <Switch
                  onChange={() =>
                    setTheme(currentTheme === "light" ? "dark" : "light")
                  }
                  className={`${
                    currentTheme === "light"
                      ? "bg-logo-color"
                      : "bg-white border"
                  } relative inline-flex h-4 w-8 items-center rounded-full`}
                >
                  <span className="sr-only">Enable notifications</span>
                  <span
                    className={`${
                      currentTheme === "light"
                        ? "translate-x-4 bg-white"
                        : "translate-x-1 bg-logo-color"
                    } inline-block h-3 w-3 transform rounded-full duration-300`}
                  />
                </Switch>
              </div>

              <div className="md:hidden">
                <button
                  className="py-1.5 px-3.5 text-gray-300 rounded-md outline-none focus:border-gray-400 dark:focus:border-gray-700 focus:border-4 border border-slate-700 dark:border-slate-300"
                  onClick={() => setNavbar(!navbar)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <Transition
            show={size.width >= 768 ? true : navbar}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-y-full"
            enterTo="translate-y-50"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-y-0"
            leaveTo="-translate-y-full"
            className="bg-[#212529] md:bg-transparent -z-30 md:z-0 px-4 overflow-auto dark:bg-white"
          >
            <div
              className={`flex-1  justify-self-center pb-3 mt-10 md:block md:pb-0 md:mt-0 transition`}
            >
              <ul className="items-center transition ease-out justify-center md:flex md:space-x-6 md:space-y-0 space-y-3 -mt-9 md:mt-0">
                <li className=" text-white py-1 md:py-0 dark:text-abu-abu dark:hover:font-semibold hover:text-opacity-90 text-opacity-50 hover:cursor-pointer ">
                  <div className="flex">
                    <div className="text-md mr-1">
                      <FaHome />
                    </div>
                    <Link href="/">
                      <p className="-mt-0.5 text-sm ">Home</p>
                    </Link>
                  </div>
                </li>
                <li className=" text-white dark:text-abu-abu py-1 md:py-0 hover:text-opacity-90 text-opacity-50 dark:hover:font-semibold hover:cursor-pointer  ">
                  <div className="flex">
                    <div className="text-md mr-1">
                      <HiSearch />
                    </div>
                    <Link href="/CekInvoice">
                      <p className="text-sm -mt-0.5 ">Check Invoice</p>
                    </Link>
                  </div>
                </li>
                <li className="text-white dark:text-abu-abu py-1 md:py-0 hover:text-opacity-90  text-opacity-50  hover:cursor-pointer dark:hover:font-semibold ">
                  <div className="flex ">
                    <div className="text-md mr-1">
                      <BiCalculator />
                    </div>
                    <div className="-mt-0.5 text-sm ">
                      <DropDownNav />
                    </div>
                    <div className="-mt-0.5 text-lg">
                      <MdOutlineArrowDropDown />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </Transition>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}



// import React, { useState, useEffect } from "react";
// import Logoo from "./Logo";
// import { FaHome } from "react-icons/fa";
// import { HiSearch } from "react-icons/hi";
// import { BiCalculator } from "react-icons/bi";
// import { MdOutlineArrowDropDown } from "react-icons/md";
// import { Switch, Transition } from "@headlessui/react";
// import DropDownNav from "./atom/DropDownNav";
// import { useTheme } from "next-themes";
// import Link from "next/link";
// import { useRouter } from "next/router";

// function Navbar() {
//   const { systemTheme, theme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);
//   const [navbar, setNavbar] = useState(false);
//   const Router = useRouter();

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return null;

//   const currentTheme = theme === "system" ? systemTheme : theme;

//   return (
//     <div>
//       <nav className={`md:px-12 w-full fixed -top-1 shadow-2xl font-poppins z-30 dark:bg-white bg-[#212529]`}>

//         <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
//           <div>
//             <div className="flex md:flex items-center justify-between py-2 md:py-2">
//               <a
//                 className="hover:cursor-pointer"
//                 onClick={() => Router.push("/")}
//               >
//                 <Logoo />
//               </a>
//               <div className="md:mx-5">
//                 <Switch
//                   onChange={() =>
//                     setTheme(currentTheme === "light" ? "dark" : "light")
//                   }
//                   className={`${
//                     currentTheme === "light"
//                       ? "bg-logo-color"
//                       : "bg-white border"
//                   } relative inline-flex h-4 w-8 items-center rounded-full`}
//                 >
//                   <span className="sr-only">Enable notifications</span>
//                   <span
//                     className={`${
//                       currentTheme === "light"
//                         ? "translate-x-4 bg-white"
//                         : "translate-x-1 bg-logo-color"
//                     } inline-block h-3 w-3 transform rounded-full duration-300`}
//                   />
//                 </Switch>
//               </div>

//               <div className="md:hidden">
//                 <button
//                   className="py-1.5 px-3.5 text-gray-300 rounded-md outline-none focus:border-gray-400 dark:focus:border-gray-700 focus:border-4 border border-slate-700 dark:border-slate-300"
//                   onClick={() => setNavbar(!navbar)}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-6 h-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div>
           
//               <div
//                 className={`flex-1 justify-self-center z-50 pb-3 mt-8 transition md:block md:pb-0 md:mt-0  ${
//                   navbar ? "block translate-y-0" : "hidden -translate-y-full"
//                 }`}
//               >
//                 <ul
//                   className="items-center 
//               justify-center md:flex md:space-x-6 md:space-y-0 space-y-3 -mt-9 md:mt-0"
//                 >
//                   <li className=" text-white py-1 md:py-0 dark:text-abu-abu dark:hover:font-semibold hover:text-opacity-90 text-opacity-50 hover:cursor-pointer ">
//                     <div className="flex">
//                       <div className="text-md mr-1">
//                         <FaHome />
//                       </div>
//                       <Link href="/">
//                         <p className="-mt-0.5 text-sm ">Home</p>
//                       </Link>
//                     </div>
//                   </li>
//                   <li className=" text-white dark:text-abu-abu py-1 md:py-0 hover:text-opacity-90 text-opacity-50 dark:hover:font-semibold hover:cursor-pointer  ">
//                     <div className="flex">
//                       <div className="text-md mr-1">
//                         <HiSearch />
//                       </div>
//                       <Link href="/CekInvoice">
//                         <p className="text-sm -mt-0.5 ">Check Invoice</p>
//                       </Link>
//                     </div>
//                   </li>
//                   <li className="text-white dark:text-abu-abu py-1 md:py-0 hover:text-opacity-90  text-opacity-50  hover:cursor-pointer dark:hover:font-semibold ">
//                     <div className="flex ">
//                       <div className="text-md mr-1">
//                         <BiCalculator />
//                       </div>
//                       <div className="-mt-0.5 text-sm ">
//                         <DropDownNav />
//                       </div>
//                       <div className="-mt-0.5 text-lg">
//                         <MdOutlineArrowDropDown />
//                       </div>
//                     </div>
//                   </li>
//                 </ul>
//               </div>{" "}
           
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;