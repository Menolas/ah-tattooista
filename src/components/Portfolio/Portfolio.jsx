import React from 'react';
import Contacts from '../MainPage/Contacts';
import Advertisement from './Advertisement';
import Gallery from './Gallery';
import TattooStyles from './TattooStyles';

const Portfolio = (props) => {
  
  return (
    <main className="site-main">
      <TattooStyles />
      <Advertisement />
      <Gallery />
      <Contacts />
    </main>
  );
}

export default Portfolio;
