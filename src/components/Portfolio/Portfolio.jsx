import React from 'react';
import Contacts from '../MainPage/Contacts';
import Advertisement from './Advertisement';
import Gallery from './Gallery';
import TattooStyle from './TattooStyle';

const Portfolio = (props) => {
  
  return (
    <main className="site-main">
      <TattooStyle
        tattooStyles={props.state.tattooStyles}
        activeStyle={props.state.activeStyle}
        dispatch={props.dispatch} />
      <Advertisement />
      <Gallery
        gallery={props.state.gallery}
        activeStyle={props.state.activeStyle}
        imgLargeUrl={props.state.imgLargeUrl}
        dispatch={props.dispatch} />
      <Contacts />
    </main>
  )
}

export default Portfolio;
