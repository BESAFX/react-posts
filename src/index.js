import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Bootstrap dependencies:
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min'

//QZ Tray
import 'rsvp/dist/rsvp';
import 'sha/index';
import 'qz-tray/qz-tray';


//Providing the Store for Redux:
import store from './redux/store'
import { Provider } from   'react-redux';

ReactDOM.render(
  <React.StrictMode>
      <Provider store={ store }>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
