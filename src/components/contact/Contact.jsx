/* eslint-disable*/
import React,{useRef} from 'react'
import classes from './contact.module.css';
import {HiOutlineMail} from "react-icons/hi";
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_r9od1tp', 'template_07f6rxj', form.current, 'W0ncto_os4qna-g10')
    
  // };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r9od1tp', 'template_07f6rxj', form.current, 'W0ncto_os4qna-g10')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Tounch</h5>
      <h2>Contact</h2>
      <div className={`${classes.container}  container ${classes.contact__container}`}>
          <div className={classes.contact__options}>
             <article className={classes.contact__option}>
              <HiOutlineMail className={classes.contact__option_icon}/>
              <h4>Email</h4>
              <h5>shaikareef081@gmail.com</h5>
              <a href='https://shaikareef081@gmail.com'>Send a message</a>
             </article>
             <article className={classes.contact__option}>
              <RiMessengerLine className={classes.contact__option_icon}/>
              <h4>Messenger</h4>
              <h5>shaikareef</h5>
              <a href='https://facebook.com' target='_blank'>Send a message</a>
             </article>
             <article className={classes.contact__option}>
              <BsWhatsapp className={classes.contact__option_icon}/>
              <h4>whatsappp</h4>
              <h5>+919705670696</h5>
              <a href="https://wa.me/919705670696/">Send a message</a>
             </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
              <input type="text" name='name' placeholder='Your Full Name' required />
              <input type='email' name='email' placeholder='Your Email' required/>
              <textarea name='message' rows="7" placeholder='Your Message'></textarea>
              <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
      </div>
    </section>
  )
}

export default Contact