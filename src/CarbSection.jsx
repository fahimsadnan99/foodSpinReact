import React from 'react'
import {conTent } from "./Data"
import Border from "./assets/Border.svg"
import Img1 from "./assets/1.svg"
import Img2 from "./assets/2.svg"
import Img3 from "./assets/3.svg"
import Img4 from "./assets/4.svg"
import Img5 from "./assets/5.svg"



const CarbSection = ({rotate}) => {
  
  let degree = Number(rotate)
  return (
    <div className='carbSection'
    >

    <div className='foodSection'>
    
     <div className='ringChild' style={{rotate : `${degree}deg`}}>
      <span>
        <img src={Img1} />
      </span>
      <span>
        <img src={Img2} />
      </span>
      <span>
        <img src={Img3} />
      </span>
      <span>
        <img src={Img4} />
      </span>
      <span>
        <img src={Img5} />
      </span>
    

     </div>
    </div>
    </div>
  )
}

export default CarbSection