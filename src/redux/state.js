const UPDATE_BOOKING_NAME_TEXT = 'UPDATE_BOOKING_NAME_TEXT';
const UPDATE_BOOKING_PHONE_TEXT = 'UPDATE_BOOKING_PHONE_TEXT';
const CHANGE_ACTIVE_STYLE = 'CHANGE_ACTIVE_STYLE';
const SHOW_GALLERY_LARGE_IMAGE = 'SHOW_GALLERY_LARGE_IMAGE';
const CLOSE_LARGE_IMAGE = 'CLOSE_LARGE_IMAGE';
const SHOW_BOOKING_MODAL = 'SHOW_BOOKING_MODAL';
const CLOSE_BOOKING_MODAL = 'CLOSE_BOOKING_MODAL';

let store = {

  _state: {

    tattooStyles: {
      blackWork: "blackWork ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

      blackAndGray: "blackGray ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

      fineLine: "fineLine ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

      neoTradition: "neoTradition ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },

    activeStyle: 'neoTradition',
  
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
  
    faq: [
    
      {
        id: 1,
        question: 'IS IT SAFE TO GET A TATTOO?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
      },
      
      {
        id: 2,
        question: 'HOW TO LOOK AFTER YOU FRESH TATTOO?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
      },
      
      {
        id: 3,
        question: 'RECOMMENDATION BEFORE SESSION?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',  
      },
      
      {
        id: 4,
        question: 'CAN I GET A TATTOO IF I AM UNDER 18?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',  
      },
      
      {
        id: 5,
        question: 'DO YOU PROVIDE ANT ANESTHESIA WHILE TATTOOING?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',  
      },
      
      {
        id: 6,
        question: 'HOW LONG CAN BE A ONE TATTOO SESSION?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
      },
      
      {
        id: 7,
        question: 'DO YOU REMOVING TATTOO?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',  
      },

      {
        id: 8,
        question: 'DO YOU WORK WITH AN ADVANCE PAYMENT?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
      },

      {
        id: 9,
        question: 'HOW TO CHOOSE A DESIGN FOR TATTOO?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
    ],

    services: [
      {
        id: 1,
        imgUrl: 'service.png',
        title: 'TATTOO SESSION',
        points: [
          '1000 kr (minimum cost up to one hour)',
          '1000 kr/hour (no longer then 4 hours)',
          '700 kr/hour cost for each next hour if session longer then 4 hours',
          'max session 6 hours',
        ],
      },

      {
        id: 2,
        imgUrl: 'service.png',
        title: 'CAVER UP',
        points: [
          '1000 kr (minimum cost up to one hour)',
          '1000 kr/hour (no longer then 4 hours)',
          '700 kr/hour cost for each next hour if session longer then 4 hours',
          'max session 6 hours',
        ],
      },
      
      {
        id: 3,
        imgUrl: 'service.png',
        title: 'INDIVIDUAL DESIGN',
        points: [
          '1000 kr (minimum cost up to one hour)',
          '1000 kr/hour (no longer then 4 hours)',
          '700 kr/hour cost for each next hour if session longer then 4 hours',
          'max session 6 hours',
        ],
      },

      {
        id: 4,
        imgUrl: 'service.png',
        title: 'CONSULTATION',
        points: [
          '1000 kr (minimum cost up to one hour)',
          '1000 kr/hour (no longer then 4 hours)',
          '700 kr/hour cost for each next hour if session longer then 4 hours',
          'max session 6 hours',
        ],
      }
    ],

    bookingNameText: '',
    bookingPhoneText: '',
    imgLargeUrl: '',
    bookingModal: false,
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log('State changed');
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    //debugger;

    switch (action.type) {

      case CHANGE_ACTIVE_STYLE:
        this._state.activeStyle = action.style;
        this._callSubscriber(this._state);
        break;
      case UPDATE_BOOKING_NAME_TEXT:
        this._state.bookingNameText = action.text;
        this._callSubscriber(this._state);
        break;
      case UPDATE_BOOKING_PHONE_TEXT:
        this._state.bookingPhoneText = action.number;
        this._callSubscriber(this._state);
        break;
      case SHOW_GALLERY_LARGE_IMAGE:
        const style = this._state.activeStyle;
        const largeImg = this._state.gallery[style][action.img];
        console.log(largeImg);
        this._state.imgLargeUrl = "gallery/" + this._state.activeStyle + "/" + largeImg;
        this._callSubscriber(this._state);
        break;
      case CLOSE_LARGE_IMAGE:
        this._state.imgLargeUrl = '';
        this._callSubscriber(this._state);
        break;
      case SHOW_BOOKING_MODAL:
        this._state.bookingModal = true;
        this._callSubscriber(this._state);
        break;
      case CLOSE_BOOKING_MODAL:
        this._state.bookingModal = false;
        this._callSubscriber(this._state);
        break;
      default: return;
    }
  }
}



export const updateBookingNameTextActionCreator = (text) => (
  {
    type: UPDATE_BOOKING_NAME_TEXT,
    text: text,
  }
);

export const updateBookingPhoneTextTextActionCreator = (number) => (
    {
      type: UPDATE_BOOKING_PHONE_TEXT,
      number: number,
    }
);

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

export const showBookingModalActionCreator = () => (
  {
    type: SHOW_BOOKING_MODAL,
  }
);

export const closeBookingModalActionCreator = () => (
  {
    type: CLOSE_BOOKING_MODAL,
  }
);
  

//window.state = state;

export default store;
