import React, { useState } from "react";
import Logo from "./assets/Logo.svg";
import Cart from "./assets/cart.svg";
import CarbSection from "./CarbSection";
import Details from "./Details";
import { conTent } from "./Data";
import { motion } from "framer-motion";

import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import ImgSection from "./ImgSection";

const menu = ["Breakfast", "Lunch", "Dinner"];
const App = () => {
  const [rotate, setRotate] = useState(0);
  const [countedItem, setCountedItem] = useState(1);

  const handleLeft = () => {
    if (countedItem == 1) {
      setRotate(-72);
      setCountedItem(5);
    } else {
      setRotate(rotate - 72);
      setCountedItem(countedItem - 1);
    }
  };

  const handleRight = () => {
    if (countedItem == conTent.length) {
      setRotate(72);
      setCountedItem(1);
    } else {
      setRotate(rotate + 72);
      setCountedItem(countedItem + 1);
    }
  };

  console.log(rotate,countedItem);
  return (
    <div className="componentWrapper relative overflow-hidden h-screen py-10 px-20 mx-auto">
      <div className="flex justify-between items-center ">
        <div>
          <img src={Logo} alt="logo" className="cursor-pointer" />
        </div>

        <ul className="flex justify-center items-center gap-10 font-Poppins">
          {menu?.map((item, index) => {
            return (
              <li key={index} className="cursor-pointer">
                {item}
              </li>
            );
          })}
        </ul>

        <div>
          <img src={Cart} alt="cart" className="cursor-pointer" />
        </div>
      </div>

      <Details countedItem={countedItem}></Details>
      <ImgSection countedItem={countedItem}></ImgSection>

      <div className="actionBtn absolute" style={{ top: "80%", left: "54%" }}>
        <div className="flex justify-center items-center">
          <motion.div  whileTap={{x : [0,10,0,10,0]}}>
          <button
            className="mr-80 bg-logoColor text-2xl px-3 py-2 rounded-3xl text-white"
            onClick={handleLeft}
          >
            <HiArrowNarrowLeft />
          </button>
          </motion.div>
          <motion.div whileTap={{x : [0,10,0,10,0]}}>
          <button
            className=" bg-logoColor text-2xl px-3 py-2 rounded-3xl text-white"
            onClick={handleRight}
          >
            <HiArrowNarrowRight />
          </button>
          </motion.div>
        </div>
      </div>

      <CarbSection rotate={rotate}></CarbSection>
    </div>
  );
};

export default App;
