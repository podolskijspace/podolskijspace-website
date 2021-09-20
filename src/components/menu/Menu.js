import React from "react";
import Logo from "../logo/Logo";
import Me from "../me/Me";
import Nav from "../nav/Nav";

const Menu = () => {
  return (
    <div className="menu js-menu js-close">
      <div className="menu__layover js-close"></div>
      <div className="menu__wrapper js-not-close">
        <Me mod="menu__me"/>
        <Nav mod="menu__nav"/>
        <Logo mod="menu__logo"/>
      </div>
    </div>
  )
}

export default Menu;