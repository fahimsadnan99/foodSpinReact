import React from 'react'
import {conTent} from "./Data"
import { motion } from 'framer-motion'
const Details = ({countedItem}) => {
  return (
    <motion.div className="absolute top-52 w-96 space-y-5" initial={{scale : 0.4, opacity : 0.2, rotate : 90}} animate={{scale : 1, opacity : 1, rotate : 0}} transition={{duration : 2}}>
    <p className="font-Poppins text-[44px] font-semibold text-logoColor">${conTent[countedItem -1].price}</p>
    <div>
      <p className="pr-24 text-[36px] font-Poppins font-medium text-text">{conTent[countedItem -1].name}</p>
    </div>
  
    <p className="text-text text-[13px] font-Poppins pr-16">{conTent[countedItem -1].text}</p>
  
    <button className="bg-logoColor text-white font-semibold px-5 py-2 rounded-3xl text-[16px]">Order Now</button>
  </motion.div>
  )
}

export default Details