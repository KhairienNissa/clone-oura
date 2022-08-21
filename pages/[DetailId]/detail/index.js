import React, { useEffect, useState } from "react";
import MyModal from "../../../components/ModalIklan";
import Navbar from "../../../components/Navbar";
import Image from "next/image";
import DetailKiri from "../../../components/DetailKiri";
import DetailKanan from "../../../components/DetailKanan";
import BottomHome from "../../../components/bottomHome";
import Copyright from "../../../components/Copyright";
import axios from "axios";
import Logoo from "../../../components/Logo";
import { useRouter } from "next/router";
import FixedButton from "../../../components/FixedButton";

function Index() {
  const router = useRouter();
  const id = router.query.DetailId;

  const [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get(`https://caca-db-oura.herokuapp.com/data/${id}`)
      .then((result) => {
        const response = result?.data;
        console.log(response);
        setState(response);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  return (
    <>
      <div>
        <MyModal />

        <div className="md:flex md:justify-center mt-8 md:mx-12">
          {/* kiri */}
          <DetailKiri item={state} />

          {/* kanan */}
          <div className="md:w-9/12 h-auto ">
            <DetailKanan />
          </div>
        </div>
        <BottomHome />
        <FixedButton />
      </div>
    </>
  );
}

export default Index;
