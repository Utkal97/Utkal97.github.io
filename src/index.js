import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';  // First load bootstrap
import './index.css';                           // Then load custom css

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render( <App />, document.getElementById('root'));

serviceWorker.unregister();
