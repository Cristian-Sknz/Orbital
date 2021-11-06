import React from 'react';
import ReactDOM from 'react-dom';
import './styles/reset.css';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core';
import ApplicationIcons from './lib/ApplicationIcons';

ApplicationIcons.forEach((item) => {
  library.add(item);
}) ;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);