import React from 'react';
import { connect } from 'react-redux/es/exports';
import { showGalleryLargeImage, closeGalleryLargeImage } from '../../redux/portfolio-reducer';

const Gallery = (props) => {

  const showLargeImage = (evt) => {
    const image = evt.currentTarget.getAttribute('data');
    props.showLargeImage(image);
  }

  const closeLargeImage = () => {
    props.closeLargeImage();
  }

  const getGalleryItems = () => {
    const activeStyle = props.activeStyle;
    const gallery = props.gallery;

    const array = gallery[activeStyle].map((item, i) => {

      const imgUrl = "gallery/" + props.activeStyle + "/" + item;

      return (
        <li key={i} className="gallery__item" data={i} onClick={showLargeImage}>
          <img src={imgUrl} alt={props.activeStyle} />
        </li>
      )
    });
    return array;
  }

  const galleryItems = getGalleryItems();

  return (
    <section className="gallery page-block container">
      <ul className="gallery__list list">
        {galleryItems}
      </ul>
      {
        props.imgLargeUrl &&
        <div className="gallery__large-wrap modal-wrap">
          <div className="gallery__large">
            <button className="close-btn gallery__item-close-btn" onClick={closeLargeImage}></button>
            <img src={props.imgLargeUrl} alt={props.activeStyle} />
          </div>
        </div>
      }
      
    </section>
  );
}

let mapStateToProps = (state) => {
  return {
    activeStyle: state.portfolio.activeStyle,
    gallery: state.portfolio.gallery,
    imgLargeUrl: state.portfolio.imgLargeUrl,
  }
}

export default connect(mapStateToProps, {
  showGalleryLargeImage,
  closeGalleryLargeImage
})(Gallery);
