import React from 'react'
import classes from './experience.module.css';
import {FaBootstrap, FaCss3, FaHtml5, FaNodeJs, FaReact} from 'react-icons/fa'
import {IoLogoJavascript} from "react-icons/io";
import {SiJquery, SiExpress, SiMongodb, SiMysql, SiSpringboot} from "react-icons/si";
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I Have</h5>
      <h2>My Experience</h2>
      <div className={`container ${classes.experience__container}`}>
        <div className={classes.experience__frontend}>
          <h3>Frontend Development</h3>
          <div className={classes.experience__content}>
            <article className={classes.experience__details}>
              <FaHtml5 className={classes.experience_details_icon}/>
                <div>
                  <h5>HTML</h5>
                </div>
            </article>
            <article className={classes.experience__details}>
              <FaCss3 className={classes.experience_details_icon}/>
                <div>
                  <h5>CSS</h5>
                </div>
            </article>
            <article className={classes.experience__details}>
              <IoLogoJavascript className={classes.experience_details_icon}/>
                <div>
                  <h5>JAVASCRIPT</h5>
                </div>
            </article>
            <article className={classes.experience__details}>
              <FaReact className={classes.experience_details_icon}/>
                <div>
                  <h5>REACT</h5>
                </div>
            </article>
            <article className={classes.experience__details}>
              <FaBootstrap className={classes.experience_details_icon}/>
                <div>
                  <h5>BOOTSTRAP</h5>
                </div>
            </article>
            <article className={classes.experience__details}>
              <SiJquery className={classes.experience_details_icon}/>
                <div>
                  <h5>JQUERY</h5>
                </div>
            </article>

          </div>

        </div>
        <div className={classes.experience__backend}>
          <h3>Backend Development</h3>
          <div className={classes.experience__content}>
            <article className={classes.experience__details}>
              <FaNodeJs className={classes.experience_details_icon}/>
                <div>
                  <h5>NODE.js</h5>
                </div>
            </article>
            <article className={classes.experience__details}>
              <SiExpress className={classes.experience_details_icon}/>
                <div>
                  <h5>Express.js</h5>
                </div>
            </article>
            <article className={classes.experience__details}>
              <SiMongodb className={classes.experience_details_icon}/>
                <div>
                  <h5>Mongodb</h5>
                </div>
            </article>
            <article className={classes.experience__details}>
              <FaReact className={classes.experience_details_icon}/>
                <div>
                  <h5>REACT</h5>
                </div>
            </article>
            <article className={classes.experience__details}>
              <SiMysql className={classes.experience_details_icon}/>
                <div>
                  <h5>MySQL</h5>
                </div>
            </article>
            <article className={classes.experience__details}>
              <SiSpringboot className={classes.experience_details_icon}/>
                <div>
                  <h5>SpringBoot</h5>
                </div>
            </article>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Experience