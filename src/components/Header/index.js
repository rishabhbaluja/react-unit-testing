import React from "react";
import Logo from "../../assets/images/logo.png";
import "./style.scss";

const Header = (props) => {
  return (
    <header className="headerComponent" data-test="headerComponent">
      <div className="wrap">
        <div className="logo">
          <img data-test="logoImg" src={Logo} alt="Logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
