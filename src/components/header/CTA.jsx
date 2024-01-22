import React from 'react';
import CV from '../../assets/AreefShaikResume3.pdf';
import classes from './header.module.css'

const CTA = () => {
  return (
    <div className={classes.cta}>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="value" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA