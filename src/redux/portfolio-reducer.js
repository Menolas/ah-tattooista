const CHANGE_ACTIVE_STYLE = 'CHANGE_ACTIVE_STYLE';
const SHOW_GALLERY_LARGE_IMAGE = 'SHOW_GALLERY_LARGE_IMAGE';
const CLOSE_LARGE_IMAGE = 'CLOSE_LARGE_IMAGE';

let initialState = {
  tattooStyles: {
    blackWork: "blackWork ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    blackAndGray: "blackGray ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    fineLine: "fineLine ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    neoTradition: "neoTradition ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  gallery: {
    blackAndGray: [
      '1.jpg',
      '2.jpg',
      '3.jpg',
      '4.jpg',
      '5.jpg',
      '6.jpg',
      '7.jpg',
      '8.jpg',
    ],
    fineLine: [
      '1.jpg',
      '2.jpg',
      '3.jpg',
    ],
    blackWork: [
      '1.jpg',
    ],
    neoTradition: [
      '1.jpg',
      '2.jpg',
      '3.jpg',
      '4.jpg',
      '5.jpg',
    ],
    realistic: [
      'realistic.jpg',
    ]
  },
  activeStyle: 'neoTradition',
  imgLargeUrl: '', 
}

const portfolioReducer = (state = initialState, action) => {

  switch (action.type) {

    case CHANGE_ACTIVE_STYLE:

      return {
        ...state,
        activeStyle: action.style
      };
    
    case SHOW_GALLERY_LARGE_IMAGE:
      const style = state.activeStyle;
      const largeImg = state.gallery[style][action.img];

      return {
        ...state,
        imgLargeUrl: "gallery/" + state.activeStyle + "/" + largeImg,
      };
    
    case CLOSE_LARGE_IMAGE:

      return {
        ...state,
        imgLargeUrl: '',
      };
  
    default: return {
      ...state
    };
  }
}

export const changeActiveStyleActionCreator = (style) => (
  {
    type: CHANGE_ACTIVE_STYLE,
    style: style,
  }
);

export const showGalleryLargeImageActionCreator = (img) => (
  {
    type: SHOW_GALLERY_LARGE_IMAGE,
    img: img,
  }
);

export const closeGalleryLargeImageActionCreator = () => (
  {
    type: CLOSE_LARGE_IMAGE,
  }
);

export default portfolioReducer;
