import React from "react";

const HandleSlider = (event) => {

  //const height = container.clientHeight;
  let activeSlideIndex = 0;
  const container = event.currentTarget;
  const height = container.clientHeight;
  const mainSlide = container.querySelector('.main-slide');
  const slidesCount = mainSlide.querySelectorAll('div').length;
  const sidebar = container.querySelector('.portfolio-slider__sidebar');
  sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;
  let direction = "";

  const changeSlide = (direction) => {
    if (direction === 'up') {
      activeSlideIndex++;
      if (activeSlideIndex === slidesCount) {
        activeSlideIndex = 0;
      }
    } else if (direction === 'down') {
      activeSlideIndex--;
      if (activeSlideIndex < 0) {
        activeSlideIndex = slidesCount - 1;
      }
    }
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
  }

  if (event.target.classList.contains("fa-arrow-up")) {
    direction = "up";
  }

  if (event.target.classList.contains("fa-arrow-down")) {
    direction = "down";
  }

  changeSlide(direction);

}

const PortfolioSlider = () => {
  return (
    <section className="portfolio-slider">
      <div className="portfolio-slider__container container" onClick={HandleSlider}>
        <div className="portfolio-slider__sidebar">
          <div>
            <h2 className="title title--secondary portfolio-slider__title">Neotradition</h2>
          </div>
          <div>
            <h2 className="title title--secondary portfolio-slider__title">FineLine</h2>
          </div>
          <div>
            <h2 className="title title--secondary portfolio-slider__title">BlackWork</h2>
          </div>
          <div>
            <h2 className="title title--secondary portfolio-slider__title">Black&Gray</h2>
          </div>
        </div>
        <div className="portfolio-slider__main-slide main-slide">
          <div className="portfolio-slider__item"></div>
          <div className="portfolio-slider__item"></div>
          <div className="portfolio-slider__item"></div>
          <div className="portfolio-slider__item"></div>
        </div>
        <div className="controls">
          <button className="down-button">
            <i className="fas fa-arrow-down"></i>
          </button>
          <button className="up-button">
            <i className="fas fa-arrow-up"></i>
          </button>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSlider;
