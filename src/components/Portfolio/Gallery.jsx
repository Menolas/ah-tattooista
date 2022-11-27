import React from 'react';
import GalleryItem from "./GalleryItem";

const Gallery = (props) => {
  const gallery = props.gallery;

  const getGalleryItems = () => {
    let i = 0;
    const array = gallery.map(item => {
      i++;
      return (
        <GalleryItem imgUrl={item} key={i} activeStyle={props.activeStyle} />
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
    </section>
  )
}

export default Gallery;
