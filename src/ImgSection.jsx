import React from 'react'
import {conTent} from "./Data"





const ImgSection = ({countedItem}) => {
    console.log("counted",countedItem);
  return (
    <div className="actionSection">

    <img src={conTent[countedItem -1].img}/>
    </div>
  )
}

export default ImgSection