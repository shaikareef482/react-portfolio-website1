/* eslint-disable */
import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {SiGithub} from 'react-icons/si';
import {FiDribbble} from 'react-icons/fi';
import classes from './header.module.css'
const HeaderSocials = () => {
  return (
    <div className={classes.header__socials}>
        <a href="https://linkedin.com" target="_blank">
            <BsLinkedin/>
        </a>
        <a href="https://github.com" target='_blank'>
            <SiGithub/>
        </a>
        <a href="https://dribble.com" target='_blank'>
            <FiDribbble/>
        </a>
    </div>
  )
}

export default HeaderSocials