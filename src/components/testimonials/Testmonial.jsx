import React from "react";
import classes from "./testimonial.module.css";
import AVATR1 from "../../assets/avatar1.jpg";
import AVATR2 from "../../assets/avatar2.jpg";
import AVATR3 from "../../assets/avatar3.jpg";
import AVATR4 from "../../assets/avatar4.jpg";
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const data = [
  {
    avatar:  AVATR1,
    name: "Tina Sow",
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus dolorum, sequi, eos quasi dolore magnam cumque, architecto quia repellat eligendi possimus non. Id voluptas sit tempora fugit explicabo distinctio impedit."
  },
  {
    avatar:  AVATR2,
    name: "Jonas Smith",
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus dolorum, sequi, eos quasi dolore magnam cumque, architecto quia repellat eligendi possimus non. Id voluptas sit tempora fugit explicabo distinctio impedit."
  },
  {
    avatar:  AVATR3,
    name: "Lex Wayne",
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus dolorum, sequi, eos quasi dolore magnam cumque, architecto quia repellat eligendi possimus non. Id voluptas sit tempora fugit explicabo distinctio impedit."
  },
  {
    avatar:  AVATR4,
    name: "Lisa Luthor",
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus dolorum, sequi, eos quasi dolore magnam cumque, architecto quia repellat eligendi possimus non. Id voluptas sit tempora fugit explicabo distinctio impedit."
  },  
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review</h5>
      <h2>Testimonials</h2>

      <Swiper className={`${classes.container} ${classes.testimonial__container}`}
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      // navigation
      pagination={{ clickable: true }}>
      {/* // scrollbar={{ draggable: true }} */}
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className={classes.testimonial}>
                <div className={classes.client__avatar}>
                  <img src={avatar} alt={name} />           
                </div>
                <h5 className={classes.client__name}>{name}</h5>
                <small className={classes.client__review}>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </section>
  )
}

export default Testimonials;
