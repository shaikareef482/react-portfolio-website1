/* eslint-disable */
import React from "react";
import classes from "./Footer.module.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <footer>
      <a href="#" className={classes.footer__logo}>
        AS
      </a>
      <ul className={classes.permalinks}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className={classes.footer__socials}>
        <a
          href="https://www.linkedin.com/in/areef-shaik-291b89225/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/shaikareef482" target="_blank">
          <BsGithub />
        </a>
        <a href="https://leetcode.com" target="_blank">
          <SiLeetcode />
        </a>
      </div>

      <div className={classes.footer__copyright}>
        <small> {year}Areef Shaik</small>
      </div>
    </footer>
  );
};

export default Footer;
