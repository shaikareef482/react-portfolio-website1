import React from 'react'
import classes from './nav.module.css'
import {AiOutlineHome, AiOutlineUser, AiOutlineContacts} from "react-icons/ai"
import {MdWorkOutline} from "react-icons/md";
import {ImHtmlFive2} from "react-icons/im";
import { useState } from 'react';
const Nav = () => {
  return (
    <nav>
     <a href="#" ><AiOutlineHome/></a>
     <a href="#about"><AiOutlineUser/></a>
     <a href="#experience"><MdWorkOutline/></a>
     <a href="#service"><ImHtmlFive2/></a>
     <a href="#contact"><AiOutlineContacts/></a>
  
    </nav>
  )
}

export default Nav