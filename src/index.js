import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// need 2 steps:
// 1.Make the App component connect to Redux and dispatch actions
// 2.Redux store get state

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducers';

let store = createStore(todoApp);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
