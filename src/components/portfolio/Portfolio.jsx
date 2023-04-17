/* eslint-disable */
import React from "react";
import classes from "./portfolio.module.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "myNotes",
    github: "https://github.com",
    demo: "https://mynotes.com/",
  },
  {
    id: 2,
    image: IMG2,
    title: "AiRT",
    github: "https://github.com",
    demo: "https://airt.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "AI CodeX",
    github: "https://github.com",
    demo: "https://aicodex.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Daily Journal",
    github: "https://github.com",
    demo: "https://daily-journal.com",
  },
  {
    id: 5,
    image: IMG5,
    title: "Weather App",
    github: "https://github.com",
    demo: "https://weather-app.com",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>
      <div className={`container ${classes.portfolio__container}`}>
        {data.map(({id,image,title,github,demo}) => {
          return (
            <article key={id} className={classes.portfolio__item}>
              <div className={classes.portfolio__item_image}>
                <img src={image} alt={title}/>
              </div>
              <h3>{title}</h3>
              <div className={classes.portfolio_item_cta}>
                <a href={github} className="btn" target="_blank" >Github</a>
                <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
