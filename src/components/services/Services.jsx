import React from 'react'
import classes from './services.module.css';
import {BiCheck} from "react-icons/bi";
const Services = () => {
  return (
    <section id='service'>
      <h5>What I Offer</h5>
      <h2>Service</h2>
      <div className={`container ${classes.services__container}`}>   
        <article className={classes.service}>
            <div className={classes.service__head}>
              <h3>UI/UX Design</h3>
            </div> 
            <ul className={classes.service_list}>
            <li><BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li><BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            
          </ul>
        </article>
        {/* END OF Web Development */}
        
        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li><BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services