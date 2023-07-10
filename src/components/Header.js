import React from "react";
import headerLogo from '../images/header-logo.svg';

function Header() {
  return (
      <img className="header-logo" src={headerLogo} alt="Логотип Mesto"/>
  );
}

export default Header;
