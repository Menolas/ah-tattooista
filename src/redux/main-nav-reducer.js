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
  //debugger;

  switch (action.type) {
    case SHOW_MAIN_MENU:
      let status = true;

      if (action.status) {
        status = false;
      }

      return {
        ...state,
        mainNavMenuModal: status,
      };
    
    case HIDE_MAIN_MENU:

      return {
        ...state,
        mainNavMenuModal: false,
      };
    
    default: return {
      ...state
    };
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
