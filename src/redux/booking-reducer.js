const UPDATE_BOOKING_NAME_TEXT = 'UPDATE_BOOKING_NAME_TEXT';
const UPDATE_BOOKING_PHONE_TEXT = 'UPDATE_BOOKING_PHONE_TEXT';
const SHOW_BOOKING_MODAL = 'SHOW_BOOKING_MODAL';
const CLOSE_BOOKING_MODAL = 'CLOSE_BOOKING_MODAL';

let initialState = {
  bookingNameText: '',
  bookingPhoneText: '',
  bookingModal: false,
}

const bookingReducer = (state = initialState, action) => {

  switch (action.type) {

    case UPDATE_BOOKING_NAME_TEXT:
      state.bookingNameText = action.text;
      return state;
    case UPDATE_BOOKING_PHONE_TEXT:
      state.bookingPhoneText = action.number;
      return state;
    case SHOW_BOOKING_MODAL:
      state.bookingModal = true;
      return state;
    case CLOSE_BOOKING_MODAL:
      state.bookingModal = false;
      return state;
    default: return state;
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
