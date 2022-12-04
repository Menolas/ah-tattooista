import { combineReducers, createStore } from 'redux';
import portfolioReducer from './portfolio-reducer';
import bookingReducer from './booking-reducer';
import mainPageReducer from './mainPage-reducer';
import mainNavReducer from './main-nav-reducer';

let reducers = combineReducers({
  portfolio: portfolioReducer,
  booking: bookingReducer,
  mainPage: mainPageReducer,
  mainNav: mainNavReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
