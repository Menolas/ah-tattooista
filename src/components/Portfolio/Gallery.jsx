import React from 'react';

const Gallery = () => {
  return (
    <section className="gallery page-block container">
      <ul className="gallery__list list">
        <li className="gallery__item">
          <img src="../assets/img/gallery/blackAndGray.jpg" alt="some alt" />
        </li>
        <li className="gallery__item">
          <img src="../assets/img/gallery/blackWork.jpg" alt="some alt" />
        </li>
        <li className="gallery__item">
          <img src="../assets/img/gallery/fineLine.jpg" alt="some alt" />
        </li>
        <li className="gallery__item">
          <img src="../assets/img/gallery/neoTraditional.jpg" alt="some alt" />
        </li>
        <li className="gallery__item">
          <img src="../assets/img/gallery/realistic.jpg" alt="some alt" />
        </li>
      </ul>
    </section>
  )
}

export default Gallery;
