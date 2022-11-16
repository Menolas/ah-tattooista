import React from "react";

const Services = () => {
  return (
    <section className="page-block services container">
      <h2 className="page-block__title">Studio services</h2>
      <ul className="services__list list">
        <li className="services__item">
          <article className="services__article">
            <a className="services__link" href="#">
              <div className="services__article-img-wrap"></div>
              <div className="services__article-text-block">
                <h4>COST OF SESSION:</h4>
                <ul className="services__item-list">
                  <li>1000 kr (minimum cost up to one hour)</li>
                  <li>1000 kr/hour (no longer then 4 hours)</li>
                  <li>700 kr/hour cost for each next hour if session longer then 4 hours</li>
                  <li>max session 6 hours</li>
                </ul>
              </div>
            </a>
          </article>
        </li>
        <li className="services__item">
          <article className="services__article">
            <a className="services__link" href="#">
              <div className="services__article-img-wrap"></div>
              <div>
                <h4>CAVER UP:</h4>
                <ul className="services__item-list">
                  <li>1000 kr (minimum cost up to one hour)</li>
                  <li>1000 kr/hour (no longer then 4 hours)</li>
                  <li>700 kr/hour cost for each next hour if session longer then 4 hours</li>
                  <li>max session 6 hours</li>
                </ul>
              </div>
            </a>
          </article>
        </li>
        <li className="services__item">
          <article className="services__article">
            <a className="services__link" href="#">
              <div className="services__article-img-wrap"></div>
              <div>
                <h4>COST OF INDIVIDUAL DESIGN:</h4>
                <ul className="services__item-list">
                  <li>1000 kr (minimum cost up to one hour)</li>
                  <li>1000 kr/hour (no longer then 4 hours)</li>
                  <li>700 kr/hour cost for each next hour if session longer then 4 hours</li>
                  <li>max session 6 hours</li>
                </ul>
              </div>
            </a>
          </article>
        </li>
        <li className="services__item">
          <article className="services__article">
            <a className="services__link" href="#">
              <div className="services__article-img-wrap"></div>
              <div>
                <h4>CONSULTATION:</h4>
                <ul className="services__item-list">
                  <li>1000 kr (minimum cost up to one hour)</li>
                  <li>1000 kr/hour (no longer then 4 hours)</li>
                  <li>700 kr/hour cost for each next hour if session longer then 4 hours</li>
                  <li>max session 6 hours</li>
                </ul>
              </div>
            </a>
          </article>
        </li>
      </ul>
    </section>
  )
}

export default Services;
