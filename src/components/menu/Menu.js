import React from "react";
import Logo from "../logo/Logo";
import Me from "../me/Me";
import Nav from "../nav/Nav";
import { connect } from "react-redux";

const Menu = ({menuActive, onMenuClick=null}) => {
  
  return (
    <div onClick={onMenuClick} className={`menu js-menu js-close${menuActive ? ' menu--active' : ''}`}>
      <div className="menu__layover js-close"></div>
      <div className="menu__wrapper js-not-close">
        <Me mod="menu__me"/>
        <Nav mod="menu__nav"/>
        <Logo mod="menu__logo"/>
      </div>
    </div>
  )
}

const mstp = ({menuActive}) => {
  return {
    menuActive,
  }
}

export default connect(mstp)(Menu);