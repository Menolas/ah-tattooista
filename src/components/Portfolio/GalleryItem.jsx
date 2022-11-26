import React from 'react';

const showLarge = (evt) => {
  
  const galleryItems = document.querySelectorAll(".gallery__item");
  for (let i = 0; i < galleryItems.length; i++) {
    if (galleryItems[i].classList.contains("active")) {
      galleryItems[i].classList.remove("active");
    }
  }
  document.querySelector("body").classList.add("overlay");
  const largeImage = evt.currentTarget;
  const closeBtn = largeImage.querySelector(".gallery__item-close-btn");
  console.log(closeBtn);
  largeImage.classList.add("active");
  closeBtn.addEventListener("click", () => {
  
    largeImage.classList.remove("active");
  });
} 

const GalleryItem = (props) => {
  const imgUrl = "gallery/" + props.activeStyle + "/" + props.imgUrl;

  return (
    <li className="gallery__item" onClick={showLarge}>
      <img src={imgUrl} />
      <div className="gallery__item-large">
        <button className="close-btn gallery__item-close-btn"></button>
        <img src={imgUrl} />
      </div>
    </li>
  )
}

export default GalleryItem;
