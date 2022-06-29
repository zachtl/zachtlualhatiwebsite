import React from 'react'
import './zachlualhati.css';
import me from '../../assets/me.png'

const ZachLualhati = () => {
  return (
    <div className="mysite__zachlualhati section_padding" id="ZachLualhati">
      <div className="mysite__zachlualhat-content">
        <h1 className="gradient__text">Zach Lualhati</h1>
      </div>
      <div className="mywebsite__zachlualhati-me">
        <img src={me} alt="Me :)"/> 
      </div>
    </div>
  )
}

export default ZachLualhati