import React from "react";
import classes from "./header.module.css";
import CTA from "./CTA";
// import ME from "../../assets/me.png";
import ME from "../../assets/home2.PNG"
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header className={classes.header}>
      <div className={`container ${classes.header__container}`}>
        <h5>Hello I'am</h5>
        <h1>Areef Shaik</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />

        <HeaderSocials />

        <div className={classes.me}>
          <img src={ME} alt="me"></img>
        </div>

        <a href="#contact" className={classes.scroll__down}>
          Scroll Down
        </a>
        
      </div>
    </header>
  );
};

export default Header;
