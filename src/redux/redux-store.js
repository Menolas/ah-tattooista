import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from "redux-thunk";
import portfolioReducer from './portfolio-reducer';
import bookingReducer from './booking-reducer';
import mainPageReducer from './mainPage-reducer';
import customersReducer from './customers-reducer';
import myClientsReducer from './myClients-reducer';
import profileReducer from './profile-reducer';
import authReducer from './auth-reducer';
import adminReducer from './admin-reducer';

let reducers = combineReducers({
  portfolio: portfolioReducer,
  booking: bookingReducer,
  mainPage: mainPageReducer,
  customers: customersReducer,
  myClients: myClientsReducer,
  profile: profileReducer,
  auth: authReducer,
  admin: adminReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
