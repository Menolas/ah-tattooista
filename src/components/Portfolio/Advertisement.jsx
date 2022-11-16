import React from 'react';
import Sprite from '../../assets/svg/sprite.svg';

/* const bookingButton = document.querySelector(".main-header__btn");
const modal = document.querySelector(".modal");
const modalCloseBtn = modal.querySelector(".close-button");
const body = document.querySelector("body");

const openModal = (modal) => {
    modal.classList.add("shown");
    body.classList.add("overlay");

}

const closeModal = (modal) => {
    modal.classList.remove("shown");
    body.classList.remove("overlay");
    bookingButton.removeEventListener("click", openModal);
}

bookingButton.addEventListener("click", function () {
    openModal(modal);
});

if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", function () {
        closeModal(modal);
    });
}

const faqList = document.querySelector(".faq__list");

if (faqList) {
    const faqItems = faqList.querySelectorAll(".faq__item");
}
 */


const Advertisement = () => {
  return (
    <section className="advertisement">
      <div className="container">
      <button className="btn btn--light-bg" type="submit">BOOK A CONSULTATION</button>
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
