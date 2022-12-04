import React from 'react';
import Sprite from '../../assets/svg/sprite.svg';

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
            <a href="#" className="social-share__link">
              <svg><use href={`${Sprite}#instagram`}></use></svg>
            </a>
          </li>
          <li className="social-share__item">
            <a href="#" className="social-share__link">
              <svg><use href={`${Sprite}#facebook`}></use></svg>
            </a>
          </li>
          <li className="social-share__item">
            <a href="#" className="social-share__link">
              <svg><use href={`${Sprite}#phone`}></use></svg>
            </a>
          </li>
        </ul>
      </div>
      </div>
    </section>
  )
}

export default Advertisement;
