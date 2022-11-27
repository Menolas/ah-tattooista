import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';


export const renderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <App
      state={store.getState()}
      changeActiveStyle={store.changeActiveStyle.bind(store)}
      updateBookingNameText={store.updateBookingNameText.bind(store)}
      updateBookingPhoneText={store.updateBookingPhoneText.bind(store)} />
  );
};

renderEntireTree();

store.subscribe(renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
