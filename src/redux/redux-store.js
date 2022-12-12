import { combineReducers, createStore } from 'redux';
import portfolioReducer from './portfolio-reducer';
import bookingReducer from './booking-reducer';
import mainPageReducer from './mainPage-reducer';
import mainNavReducer from './main-nav-reducer';
import customersReducer from './customers-reducer';
import myClientsReducer from './myClients-reducer';
import profileReducer from './profile-reducer';
import authReducer from './auth-reducer';

let reducers = combineReducers({
  portfolio: portfolioReducer,
  booking: bookingReducer,
  mainPage: mainPageReducer,
  mainNav: mainNavReducer,
  customers: customersReducer,
  myClients: myClientsReducer,
  profile: profileReducer,
  auth: authReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
