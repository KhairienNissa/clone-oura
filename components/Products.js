import React, { useState, useEffect } from "react";
import CardProducts from "./atom/CardProducts";
import axios from "axios";
import SearchHome from "./SearchHome";
import TopUp from "./atom/topUp";

function Products() {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get("https://caca-db-oura.herokuapp.com/data")
      .then((result) => {
        const response = result.data.data;
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
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 md:mx-20 lg:mx-48 mx-5">
        {state.map((item) => (
          <CardProducts item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Products;
