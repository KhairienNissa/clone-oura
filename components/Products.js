import React, { useState, useEffect } from "react";
import CardProducts from "./atom/CardProducts";
import axios from "axios";
import SearchHome from "./SearchHome";
import TopUp from "./atom/topUp";

function Products() {
  const state = [
    {
      id: 1,
      title: "Mobile Legend",
      image:
        "https://play-lh.googleusercontent.com/IhUVzRkz5MokalaeiLulcloc8rxROw0fSPRC7-Lc5zCF_wIfhbxo3qsOjKxYp524B1dY",
    },
    {
      id: 2,
      title: "Free Fire",
      image: "https://id.apkshki.com/storage/5/icon_5dcfce7f86906_5.png",
    },
    {
      id: 3,
      title: "Higgs Domino",
      image:
        "https://play-lh.googleusercontent.com/J7LglPIuYQeLspMMqZX4PmqUcmFm2kWQ0mBEpS2n6A6r277-VBr2-f0N5PJb9Td_SUMI",
    },
    {
      id: 4,
      title: "apex legends mobile",
      image:
        "https://play-lh.googleusercontent.com/IhUVzRkz5MokalaeiLulcloc8rxROw0fSPRC7-Lc5zCF_wIfhbxo3qsOjKxYp524B1dY",
    },
    {
      id: 5,
      title: "Call of Duty Mobile",
      image:
        "https://img.tapimg.net/market/lcs/b5242499267648ef17572a10f48193a1_360.png?imageMogr2/auto-orient/strip",
    },
    {
      id: 6,
      title: "Arena of Valor",
      image: "https://i.scdn.co/image/ab67616d0000b27342fafed6b2de49761c6456bb",
    },
    {
      id: 7,
      title: "Genshin Impact",
      image: "https://t2.tudocdn.net/605234?w=1200&h=1200",
    },
    {
      id: 8,
      title: "Valorant",
      image:
        "https://assets-prd.ignimgs.com/2021/12/21/valorant-1640045685890.jpg",
    },
    {
      id: 9,
      title: "League Of Legends: Wild Rift",
      image:
        "https://play-lh.googleusercontent.com/IhUVzRkz5MokalaeiLulcloc8rxROw0fSPRC7-Lc5zCF_wIfhbxo3qsOjKxYp524B1dY",
    },
    {
      id: 10,
      title: "Dragon Raja",
      image:
        "https://i.pinimg.com/736x/0d/8f/c2/0d8fc2200ca2518030164a783bfb2864.jpg",
    },
    {
      id: 11,
      title: "Sausage Man",
      image: "https://cf.shopee.co.id/file/f4f724270d53c7e232f0058b47006998",
    },
    {
      id: 12,
      title: "Ragnarok M: Eternal Love",
      image:
        "https://assets.jalantikus.com/assets/cache/40/40/games/2019/04/24/ragnarok-m-eternal-love-90396.png",
    },
    {
      id: 13,
      title: "Life After",
      image:
        "https://play-lh.googleusercontent.com/IhUVzRkz5MokalaeiLulcloc8rxROw0fSPRC7-Lc5zCF_wIfhbxo3qsOjKxYp524B1dY",
    },
    {
      id: 14,
      title: "Lords Mobile",
      image:
        "https://play-lh.googleusercontent.com/ncXkkngg-Tq5QRtKV-qyIF_ZMQJU1bQDa-0ZXePgH_zF0raIMPNDr6TYRCBiqLXmcYU",
    },
    {
      id: 15,
      title: "Tom and Jerry: Chase",
      image:
        "https://www.kaorinusantara.or.id/wp-content/uploads/2020/12/photo_2020-12-17_22-42-36.jpg",
    },
    {
      id: 16,
      title: "Light Of Thel",
      image:
        "https://kaleoz-media.seagmcdn.com/kaleoz-store/202205/oss-031db3ad2a180b8e4f4a8eb684ff90af.jpg",
    },
    {
      id: 17,
      title: "Marvel Super War",
      image:
        "https://play-lh.googleusercontent.com/c4SxEDCnHLh78ihzLqM3XwdCvrwJKQdhd5opSCMerITWeom5cO0yP3AKolYpqxPzIlo",
    },
    {
      id: 18,
      title: "MU Origin 2",
      image: "https://dl.kaskus.id/i.imgur.com/mdL9eqL.png",
    },
    {
      id: 19,
      title: "Saint Seiya Awakening",
      image:
        "https://play-lh.googleusercontent.com/MbDYuxDvt7HeuBoc-Q-E16uGuheMukWdipq7DNeeLNB4Su9JAXEViiWKRH04oEqUdvR9",
    },
    {
      id: 20,
      title: "One Punch Man",
      image:
        "https://foto.kontan.co.id/sAJ_KiQwebjTVVAuxgup4EkVg8c=/smart/2020/09/22/49553742p.jpg",
    },
    {
      id: 21,
      title: "Omega Legend",
      image:
        "https://play-lh.googleusercontent.com/z0ocjTspaD0n3rNVP-M8M4ka4byVAwuitegC4UG-FchwUyZkKDZqG8pq_Lb-QPU7_7U",
    },
    {
      id: 22,
      title: "MANGA TOON",
      image:
        "https://cdn.unipin.com/images/icon_product_pages/1571814149-icon-1562052922-icon-mangatoon-new.jpg",
    },
    {
      id: 23,
      title: "Teen Patti Gold",
      image:
        "https://play-lh.googleusercontent.com/IhUVzRkz5MokalaeiLulcloc8rxROw0fSPRC7-Lc5zCF_wIfhbxo3qsOjKxYp524B1dY",
    },
    {
      id: 24,
      title: "Capsa City",
      image: "https://cf.shopee.co.id/file/0a020bdf3a0d82b187a4cdd6f2cf764c",
    },
  ];

  // useEffect(() => {
  //   axios
  //     .get("https://caca-db-oura.herokuapp.com/data")
  //     .then((result) => {
  //       const response = result.data.data;
  //       console.log(response);
  //       setState(response);
  //     })
  //     .catch((err) => {
  //       console.log("error", err);
  //     });
  // }, []);

  return (
    <div>
      <SearchHome />
      <div className="py-5 mx-3 md:mx-20 lg:mx-56">
        <TopUp>Top Up</TopUp>
      </div>
      <div className="grid grid-cols-3 gap-1 md:grid-cols-4 lg:grid-cols-6 md:mx-20 lg:mx-56 mx-3 ">
        {state.map((item, index) => (
          <CardProducts item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Products;
