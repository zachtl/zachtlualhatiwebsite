import React, { useState } from 'react'
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png'

const Menu = () => (
  <>
    <p><a href="#ZachLualhati">Zach Lualhati</a></p>
    <p><a href="#WhoAmI">Who Am I?</a></p>
    <p><a href="#Experiences">Experiences</a></p>
    <p><a href="#Resume">Resume</a></p>
    <p><a href="#CTA">More</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="mysite__navbar">
      <div className="mysite__navbar-links">
        <div className="mysite__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="mysite__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="mysite__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="mysite__navbar-menu_container scale-up-center">
            <div className="mysite__navbar-menu_container_links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar