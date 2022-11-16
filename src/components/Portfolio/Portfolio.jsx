import React from 'react';
import Contacts from '../MainPage/Contacts';
import Advertisement from './Advertisement';
import Gallery from './Gallery';
import TattooStyle from './TattooStyle';

const Portfolio = (props) => {
  return (
    <main className="site-main">
      <TattooStyle />
      <Advertisement />
      <Gallery />
      <Contacts />
    </main>
  )
}

export default Portfolio;
