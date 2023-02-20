import React from "react";
import Logo from "./assets/Logo.svg";
import Cart from "./assets/cart.svg";
import CarbSection from "./CarbSection";
import Details from "./Details";



const menu = ["Breakfast", "Lunch", "Dinner"];
const App = () => {
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



   <Details></Details>
 
 
  <CarbSection></CarbSection>
     
    </div>
  );
};

export default App;
