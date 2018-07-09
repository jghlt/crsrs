import 'raf/polyfill';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './styles/index.scss';
import data from './data';
import config from './config';

ReactDOM.render(
  <App {...data} config={config} />,
  document.querySelector('#root')
);
