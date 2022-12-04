const UPDATE_BOOKING_NAME_TEXT = 'UPDATE_BOOKING_NAME_TEXT';
const UPDATE_BOOKING_PHONE_TEXT = 'UPDATE_BOOKING_PHONE_TEXT';
const UPDATE_BOOKING_CONCENT = 'UPDATE_BOOKING_CONCENT';
const SHOW_BOOKING_MODAL = 'SHOW_BOOKING_MODAL';
const CLOSE_BOOKING_MODAL = 'CLOSE_BOOKING_MODAL';

let initialState = {
  bookingNameText: '',
  bookingPhoneText: '',
  bookingConcent: false,
  bookingModal: false,
}

const bookingReducer = (state = initialState, action) => {
  
  switch (action.type) {

    case UPDATE_BOOKING_NAME_TEXT:

      return {
        ...state,
        bookingNameText: action.text
      };
    
    case UPDATE_BOOKING_PHONE_TEXT:

      return {
        ...state,
        bookingPhoneText: action.number,
      };
    
    case UPDATE_BOOKING_CONCENT:

      return {
        ...state,
        bookingConcent: action.checkbox,
      };

    case SHOW_BOOKING_MODAL:

      return {
        ...state,
        bookingModal: true,
      };
    
    case CLOSE_BOOKING_MODAL:

      return {
        ...state,
        bookingModal: false,
      };
    
    default: return {
      ...state
    };
  }
}

export const updateBookingNameTextActionCreator = (text) => (
  {
    type: UPDATE_BOOKING_NAME_TEXT,
    text: text,
  }
);

export const updateBookingPhoneTextActionCreator = (number) => (
    {
      type: UPDATE_BOOKING_PHONE_TEXT,
      number: number,
    }
);

export const updateBookingConcentActionCreator = (checkbox) => (
  {
    type: UPDATE_BOOKING_CONCENT,
    checkbox: checkbox,
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

export default bookingReducer;
