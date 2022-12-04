import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import StoreContext from './StoreContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderEntireTree = (state) => { 
  root.render(
    <BrowserRouter>
      <StoreContext.Provider value = { store }>
        <App
          state = { state }
          dispatch = { store.dispatch.bind(store) }
          store = { store } />
      </StoreContext.Provider>
    </BrowserRouter>
  );
};

renderEntireTree(store.getState());

store.subscribe(() => {
  renderEntireTree(store.getState());
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
