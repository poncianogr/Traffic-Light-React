import React from "react";
import './TraficLight.css';
import {useState} from 'react';

const TraficLight=()=>{
     
    const [brillar,setBrillar]= useState({estadoRoja:"",estadoAmarillo:"",estadoGreen:""});
        
    return(
        <>
        <div className="trafficTop">
        </div>
        <div className="container"> 
            <div onClick={()=>{setBrillar({estadoRoja:"selected",estadoAmarillo:"",estadoGreen:""})}} className={`red ${brillar.estadoRoja}`}></div>
            <div onClick={()=>{setBrillar({estadoRoja:"",estadoAmarillo:"selected",estadoGreen:""})}} className={`yellow ${brillar.estadoAmarillo}`}></div>
            <div onClick={()=>{setBrillar({estadoRoja:"",estadoAmarillo:"",estadoGreen:"selected"})}} className={`green ${brillar.estadoGreen}`}></div>
        </div>
        </>
    )
}


export default TraficLight;