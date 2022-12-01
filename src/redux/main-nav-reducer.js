const SHOW_MAIN_MENU = 'SHOW_MAIN_MENU';
const HIDE_MAIN_MENU = 'HIDE_MAIN_MENU';

let initialState = {
  mainNavMenuModal: false,
  mainNavList: [
    {
      text: 'Portfolio',
      url: './portfolio',
    },
    {
      text: 'Tattoo Artist',
      url: './portfolio',
    },
    {
      text: 'Studio Services',
      url: './portfolio',
    },
    {
      text: 'F.A.Q',
      url: './portfolio',
    },
    {
      text: 'Booking',
      url: './portfolio',
    },
    {
      text: 'Contacts',
      url: './portfolio',
    },
  ]
}

const mainNavReducer = (state = initialState, action) => {

  switch (action.type) {
    case SHOW_MAIN_MENU:
      if (!action.status) {
        state.mainNavMenuModal = true;
      } else {
        state.mainNavMenuModal = false;
      }
      return state;
    
    case HIDE_MAIN_MENU:
      state.mainNavMenuModal = false;
      return state;
    
    default: return state;
  }
}

export const showMainMenuActionCreator = (status) => (
  {
    type: SHOW_MAIN_MENU,
    status: status,
  }
);

export const hideMainMenuActionCreator = () => (
  {
    type: HIDE_MAIN_MENU,
  }
);

export default mainNavReducer;
