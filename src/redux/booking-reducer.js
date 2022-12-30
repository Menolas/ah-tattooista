const SHOW_BOOKING_MODAL = 'SHOW_BOOKING_MODAL';
const CLOSE_BOOKING_MODAL = 'CLOSE_BOOKING_MODAL';

let initialState = {
  bookingModal: false,
}

const bookingReducer = (state = initialState, action) => {
  
  switch (action.type) {

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
