import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { changeActiveStyle } from './redux/state';

export const renderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <App state={state} changeActiveStyle={changeActiveStyle} />
  );
};


