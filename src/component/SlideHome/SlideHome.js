import React from 'react'
import {Link} from "react-router-dom"
import { Button } from 'antd';
import slideImg from "../img/slideHome.jpg"
import "../SlideHome/slideHome.css"

function SlideHome() {
  return (
      <Link to={"/"}>
    <div className='home'>
    <div 
    className='headerContainer'
    style={{backgroundImage:`url(${slideImg})`}}>
        <div className='clipDiscount'>
        UP TO $200 VALUE
        </div>
        <div className='titlebannerHome'>
        <h1>
        FREE BRACELET
      </h1>
      
      <Link to="/menu">
      <Button type="primary">ORDER NOW</Button></Link>
      <p>Free Sterling Silver Limited Edition Bangle&nbsp;(retail value $85) with your $150+ purchase or Free 14K Rose Gold-Plated T-Bar Bracelet (retail value $200) with your $325+ purchase.</p>
        </div>
     
    </div>
  </div>
  </Link>
  )
}

export default SlideHome