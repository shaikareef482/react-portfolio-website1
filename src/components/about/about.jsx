import React from "react";
import classes from "./about.module.css";
import ME from "../../assets/Shaik.png";
import { FiAward } from "react-icons/fi";
import { SiJavascript } from "react-icons/si";
import { HiLightBulb } from "react-icons/hi";

const About = () => {
  return (
    <section id="about">
      <h5>Get TO know</h5>
      <h2>About Me</h2>
      <div className={`container ${classes.about__container}`}>
        <div className={classes.about__me}>
          <div className={classes.about__me_image}>
            <img src={ME} alt="About image1" />
          </div>
        </div>
        <div className={classes.about__content}>
          <div className={classes.about__cards}>
            <article className={classes.about__card}>
              <FiAward className={classes.about__icon} />
              <h5>Experince</h5>
              <small>3+ Years Workings</small>
            </article>
            <article className={classes.about__card}>
              <SiJavascript className={classes.about__icon} />
              <h5>Projects</h5>
              <small>10+ Projects</small>
            </article>
            <article className={classes.about__card}>
              <HiLightBulb className={classes.about__icon} />
              <h5>skills</h5>
              <small>Fullstack Development</small>
            </article>
          </div>
          <p className={classes.p}>
            Dedicated and efficient full stack developer with 2+ years experience in application layers, presentation layers, and databases. Certified in both Frontend and Backend technologies.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talks</a>
        </div>
      </div>
    </section>
  );
};

export default About;
