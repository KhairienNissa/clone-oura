import React, { useEffect, useState } from "react";
import { HiSearch } from "react-icons/hi";
import axios from "axios";
import Mlegend from "../public/ml.png";
import Image from "next/image"
import ResultSearch from "./atom/resultSearch";
import { useRouter } from "next/router";

function SearchHome() {

  const Router = useRouter()
  const [state, setState] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/data")
      .then((result) => {
        const response = result.data;
        console.log(response);
        setState(response);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  const DataSearch = state.filter((item) =>
    item.title.toLowerCase().includes(search)
  );

  return (
    <div>
      <div>
        <div>
        <div className="flex justify-center md:justify-start mx-2 md:mx-0">
          <input
            className="dark:text-black h-10 w-11/12 md:w-2/12 px-3 md:ml-20 lg:ml-48 dark:bg-white dark:border rounded-l-sm placeholder:text-sm"
            placeholder="Search Products..."
            type="input"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <button className="w-11 bg-[#BAAA97] bg-opacity-80 rounded-r-sm text-white text-xl pl-2.5">
            <HiSearch />
          </button>
        </div>
        <div className={` ${!search && "hidden" } max-h-[450px] overflow-x-scroll absolute w-full overflow-y-scroll bg-abu-abu md:w-[250px] md:ml-48 `}>
          <h1 className="text-white dark:text-white p-3 md:p-2 md:text-[14px] border-b  ">Top Up</h1>
          
       {DataSearch.map((item) =>(
        <ResultSearch onClick={()=> Router.push(`/${item.id}/detail`)}  item={item} key={item.id}/>
       ))}
        
     
        </div>
        </div>
      </div>
    </div>
  );
}

export default SearchHome;
