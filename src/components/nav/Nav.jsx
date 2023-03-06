/* eslint-disable */
import React from 'react'
import classes from './nav.module.css'
import {AiOutlineHome, AiOutlineUser, AiOutlineContacts} from "react-icons/ai"
import {MdWorkOutline} from "react-icons/md";
import {ImHtmlFive2} from "react-icons/im";
import { useState } from 'react';
const Nav = () => {
  const [activeNav,setActiveNav]=useState('#');
  return (
    <nav className={classes.nav}>
     <a href="#" onClick={()=>setActiveNav('#')} className={activeNav==='#'?classes.active : ''}><AiOutlineHome/></a>
     <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about'?classes.active : ''}><AiOutlineUser/></a>
     <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience'?classes.active : ''}><MdWorkOutline/></a>
     <a href="#service" onClick={()=>setActiveNav('#service')} className={activeNav==='#service'?classes.active : ''}><ImHtmlFive2/></a>
     <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'?classes.active : ''}><AiOutlineContacts/></a>
  
    </nav>
  )
}

export default Nav