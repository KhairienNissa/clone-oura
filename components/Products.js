import React, { useState, useEffect } from "react";
import CardProducts from "./atom/CardProducts";
import axios from "axios";
import SearchHome from "./SearchHome";
import TopUp from "./atom/topUp";


function Products() {
  const [state, setState] = useState([]);

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


  return (
    <div>
      <SearchHome />
      <div className="py-5 px-3 md:mx-20 lg:mx-48">
        <TopUp>Top Up</TopUp>
      </div>
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 md:mx-20 lg:mx-48 ml-5">
      {state.map((item, index) => (
        <CardProducts item={item} key={item.id} />
      ))}
    </div>
    </div>
  );
}

export default Products;
