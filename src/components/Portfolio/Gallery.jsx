import React from 'react';
import { act } from 'react-dom/test-utils';
import GalleryItem from "./GalleryItem";

const Gallery = (props) => {
  const gallery = props.gallery;

  const galleryItems = gallery.map(item => <GalleryItem imgUrl={item} activeStyle={props.activeStyle} />);

  return (
    <section className="gallery page-block container">
      <ul className="gallery__list list">
        {galleryItems}
      </ul>
    </section>
  )
}

export default Gallery;
