const CHANGE_ACTIVE_STYLE = 'CHANGE_ACTIVE_STYLE';
const SHOW_GALLERY_LARGE_IMAGE = 'SHOW_GALLERY_LARGE_IMAGE';
const CLOSE_LARGE_IMAGE = 'CLOSE_LARGE_IMAGE';
const BLACK_WORK = 'BLACK_WORK';
const BLACK_AND_GRAY = 'BLACK_AND_GRAY';
const FINE_LINE = 'FINE_LINE';
const NEO_TRADITION = 'NEO_TRADITION';
const REALISTIC = 'REALISTIC';
const DESIGNS = 'DESIGNS';

let initialState = {
  tattooStyles: [
    {
      style: BLACK_WORK,
      writtenName: "BlackWork",
      img: "blackWork.jpg",
      description: "blackWork ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      style: BLACK_AND_GRAY,
      writtenName: "Black&Gray",
      img: "blackAndGray.jpg",
      description: "blackGray ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
    },
    {
      style: FINE_LINE,
      writtenName: "FineLine",
      img: "fineLine.jpg",
      description: "fineLine ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      style: NEO_TRADITION,
      writtenName: "NeoTradition",
      img: "neoTraditional.jpg",
      description: "neoTradition ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      style: REALISTIC,
      writtenName: "Realistic",
      img: "realistic.jpg",
      description: "neoTradition ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      style: DESIGNS,
      writtenName: "Designs",
      img: "realistic.jpg",
      description: "designes ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },  
  ],
  gallery: {
    BLACK_AND_GRAY: [
      '1.jpg',
      '2.jpg',
      '3.jpg',
      '4.jpg',
      '5.jpg',
      '6.jpg',
      '7.jpg',
      '8.jpg',
    ],
    FINE_LINE: [
      '1.jpg',
      '2.jpg',
      '3.jpg',
    ],
    BLACK_WORK: [
      '1.jpg',
    ],
    NEO_TRADITION: [
      '1.jpg',
      '2.jpg',
      '3.jpg',
      '4.jpg',
      '5.jpg',
    ],
    REALISTIC: [
      'realistic.jpg',
    ],
    DESIGNS: [
      'realistic.jpg',
    ]
  },
  activeStyle: NEO_TRADITION,
  imgLargeUrl: '', 
}

const portfolioReducer = (state = initialState, action) => {
  //debugger;

  switch (action.type) {

    case CHANGE_ACTIVE_STYLE:
      console.log(action.style);
      return {
        ...state,
        activeStyle: action.style,
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
