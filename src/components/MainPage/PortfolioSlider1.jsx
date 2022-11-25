import React from "react";

const PortfolioSlider1 = () => {
  return (
    <section className="page-block portfolio-slider1 container">
      <h2 className="page-block__title">Portfolio</h2>
      <div className="handlers portfolio-slider1__list-wrap">
        <div className="handlers__elements portfolio-slider1__handlers">
          <span className="handlers__left-arrow"></span>
          <span className="handlers__right-arrow"></span>
        </div>
        <ul className="portfolio-slider1__list">
          <li className="portfolio-slider1__item active">
            <a className="portfolio-slider1__link" href="">
              <h3 className="portfolio-slider1__link-title"><span>Black&</span><span>gray</span></h3>
            </a>
          </li>
          <li className="portfolio-slider1__item active">
            <a className="portfolio-slider1__link" href="">
              <h3 className="portfolio-slider1__link-title"><span>Black</span><span>Work</span></h3>
            </a>
          </li>
          <li className="portfolio-slider1__item">
            <a className="portfolio-slider1__link" href="">
              <h3 className="portfolio-slider1__link-title"><span>Fine</span><span>Line</span></h3>
            </a>
          </li>
          <li className="portfolio-slider1__item active">
            <a className="portfolio-slider1__link" href="">
              <h3 className="portfolio-slider1__link-title"><span>neo</span><span>traditional</span></h3>
            </a>
          </li>
        </ul>
      </div>
    </section> 
  )
}

export default PortfolioSlider1;
