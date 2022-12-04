import { connect } from 'react-redux/es/exports';
import { showGalleryLargeImageActionCreator, closeGalleryLargeImageActionCreator } from '../../redux/portfolio-reducer';
import Gallery from './Gallery';

let mapStateToProps = (state) => {
  return {
    activeStyle: state.portfolio.activeStyle,
    gallery: state.portfolio.gallery,
    imgLargeUrl: state.portfolio.imgLargeUrl,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    showLargeImage: (image) => {
      dispatch(showGalleryLargeImageActionCreator(image));
    },

    closeLargeImage: () => {
      dispatch(closeGalleryLargeImageActionCreator());
    },
  }
}

const GalleryContainer = connect(mapStateToProps, mapDispatchToProps)(Gallery);

export default GalleryContainer;
