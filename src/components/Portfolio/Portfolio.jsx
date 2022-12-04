import React from 'react';
import Contacts from '../MainPage/Contacts';
import AdvertisementContainer from './AdvertisementContainer';
import GalleryContainer from './GalleryContainer';
import TattooStyleContainer from './TattooStyleContainer';

const Portfolio = (props) => {
  
  return (
    <main className="site-main">
      <TattooStyleContainer />
      <AdvertisementContainer />
      <GalleryContainer />
      <Contacts />
    </main>
  );
}

export default Portfolio;
