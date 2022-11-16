import React from "react";

const Portfolio = () => {
  return (
    <section className="page-block portfolio container">
      <h2 className="page-block__title">Portfolio</h2>
      <div className="handlers portfolio__list-wrap">
        <div className="handlers__elements portfolio__handlers">
          <span className="handlers__left-arrow"></span>
          <span className="handlers__right-arrow"></span>
        </div>
        <ul className="portfolio__list">
          <li className="portfolio__item active">
            <a className="portfolio__link" href="">
              <h3 className="portfolio__link-title"><span>Black</span><span>&</span><span>gray</span></h3>
            </a>
          </li>
          <li className="portfolio__item active">
            <a className="portfolio__link" href="">
              <h3 className="portfolio__link-title"><span>Black</span><span>Work</span></h3>
            </a>
          </li>
          <li className="portfolio__item">
            <a className="portfolio__link" href="">
              <h3 className="portfolio__link-title"><span>Fine</span><span>Line</span></h3>
            </a>
          </li>
          <li className="portfolio__item active">
            <a className="portfolio__link" href="">
              <h3 className="portfolio__link-title"><span>neo</span><span>traditional</span></h3>
            </a>
          </li>
        </ul>
      </div>
    </section> 
  )
}

export default Portfolio;
