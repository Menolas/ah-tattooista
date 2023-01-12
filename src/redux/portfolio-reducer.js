import { galleryApi } from '../api/galleryApi';

const SET_STYLES = 'SET_STYLES';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const CHANGE_ACTIVE_STYLE = 'CHANGE_ACTIVE_STYLE';
const SHOW_GALLERY_LARGE_IMAGE = 'SHOW_GALLERY_LARGE_IMAGE';
const CLOSE_LARGE_IMAGE = 'CLOSE_LARGE_IMAGE';

let initialState = {
  isFetching: false,
  tattooStyles: [],
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
  activeStyle: null,
  imgLargeUrl: '', 
}

const portfolioReducer = (state = initialState, action) => {
  //debugger;

  switch (action.type) {

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      }

    case SET_STYLES:
      return {
        ...state,
        tattooStyles: action.tattooStyles
      }

    case CHANGE_ACTIVE_STYLE:
      const activeStyle = [...state.tattooStyles].filter(style => style._id === action.styleId)[0];
      
      return {
        ...state,
        activeStyle: activeStyle,
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

//action creators

export const setIsFetching = (isFetching) => (
  {
    type: TOGGLE_IS_FETCHING, isFetching,
  }
);

export const setTattooStyles = (tattooStyles) => (
  {
    type: SET_STYLES, tattooStyles
  }
);

export const changeActiveStyle = (styleId) => (
  {
    type: CHANGE_ACTIVE_STYLE, styleId,
  }
);

export const showGalleryLargeImage = (img) => (
  {
    type: SHOW_GALLERY_LARGE_IMAGE, img,
  }
);

export const closeGalleryLargeImage = () => (
  {
    type: CLOSE_LARGE_IMAGE,
  }
);


//thunks

export const getTattooStyles = () => async (dispatch) => {
  dispatch(setIsFetching(true));
  try {
    let response = await galleryApi.getCategories(); 
    dispatch(setTattooStyles(response.data));
    dispatch(setIsFetching(false));
  } catch (e) {
    console.log(e);
  }
}

export default portfolioReducer;
