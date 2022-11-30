import { combineReducers, createStore } from 'redux';
import portfolioReducer from './portfolio-reducer';
import bookingReducer from './booking-reducer';
import mainPageReducer from './mainPage-reducer';

let reducers = combineReducers({
  portfolio: portfolioReducer,
  booking: bookingReducer,
  mainPage: mainPageReducer,
});

let store = createStore(reducers);

export default store;
