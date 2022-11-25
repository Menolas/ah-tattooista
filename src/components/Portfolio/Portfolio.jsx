import React from 'react';
import Contacts from '../MainPage/Contacts';
import Advertisement from './Advertisement';
import Gallery from './Gallery';
import TattooStyle from './TattooStyle';

const Portfolio = (props) => {
  return (
    <main className="site-main">
      <TattooStyle tattooStyles={props.tattooStyles} activeStyle={props.activeStyle} />
      <Advertisement />
      <Gallery gallery={props.gallery} activeStyle={props.activeStyle} />
      <Contacts />
    </main>
  )
}

export default Portfolio;
