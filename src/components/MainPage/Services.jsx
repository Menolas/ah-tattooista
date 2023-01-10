import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux/es/exports';

const Services = (props) => {

  const ServiceItem = (props) => {
    const Point = (props) => {
      return (
        <li>{ props.text }</li>
      )
    }
    let i = 0;
    const points = props.points.map(item => {
      i++;
      return <Point text = { item } key = { i } />
    });

    return (
      <li className="services__item">
        <article className="services__article">
          <NavLink className="services__link" to="#">
            <div className="services__article-img-wrap"></div>
            <div className="services__article-text-block">
              <h4>{ props.title }:</h4>
              <ul className="services__item-list">
                { points }
              </ul>
            </div>
          </NavLink>
        </article>
      </li>
    )
  }

  const servicesArray = props.services.map(item => {
    return (
      <ServiceItem key = {item.id} title = {item.title} points = {item.points} />
    )
  });

  return (
    <section className="page-block services container">
      <h2 className="page-block__title">Studio services</h2>
      <ul className="services__list list">
        { servicesArray }
      </ul>
    </section>
  );
}

let mapStateToProps = (state) => {
  return {
    services: state.mainPage.services,
  };
};

export default connect(mapStateToProps, {})(Services);
