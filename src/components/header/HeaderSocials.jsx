/* eslint-disable */
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import { FiDribbble } from "react-icons/fi";
import classes from "./header.module.css";
const HeaderSocials = () => {
  return (
    <div className={classes.header__socials}>
      <a
        href="https://www.linkedin.com/in/areef-shaik-291b89225/
"
        target="_blank"
        className={classes.icons}
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/shaikareef482"
        target="_blank"
        className={classes.icons}
      >
        <SiGithub />
      </a>
      <a
        href="https://shaikareef081@gmail.com"
        target="_blank"
        className={classes.icons}
      >
        <FiDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
