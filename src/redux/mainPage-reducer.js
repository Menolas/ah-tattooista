const SHOW_MAIN_MENU = 'SHOW_MAIN_MENU';

let initialState = {
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

  mainNavMenu: false,
}

const mainPageReducer = (state = initialState, action) => {

  switch (action.type) {

    case SHOW_MAIN_MENU:
      if (!action.status) {
        state.mainNavMenu = true;
      } else {
        state.mainNavMenu = false;
      }
      
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

export default mainPageReducer;
