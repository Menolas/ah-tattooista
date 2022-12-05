import React from 'react';
import Sprite from '../../assets/svg/sprite.svg';
import { NavLink } from "react-router-dom";

const Advertisement = (props) => {

  const showBookConsultationModal = () => {
    props.showBookConsultationModal();
  }

  return (
    <section className="advertisement">
      <div className="container">
        <button
          className="btn advertisement__btn"
          onClick={ showBookConsultationModal }>
          BOOK A CONSULTATION
        </button>
      <div className="social-share">
        <span>Share this page</span>
        <ul className="social-share__list list">
          <li className="social-share__item">
            <NavLink to="#" className="social-share__link">
              <svg><use href={`${Sprite}#instagram`}></use></svg>
            </NavLink>
          </li>
          <li className="social-share__item">
            <NavLink to="#" className="social-share__link">
              <svg><use href={`${Sprite}#facebook`}></use></svg>
            </NavLink>
          </li>
          <li className="social-share__item">
            <NavLink to="#" className="social-share__link">
              <svg><use href={`${Sprite}#phone`}></use></svg>
            </NavLink>
          </li>
        </ul>
      </div>
      </div>
    </section>
  )
}

export default Advertisement;
