import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app';
import {BrowserRouter} from 'react-router-dom';
import {createStore,compose,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './redux/reducers/rootReducers.js';
import thunk from 'redux-thunk';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({      
    }) : compose;

const storeUsers = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

const application = (
  <Provider store={storeUsers}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);




ReactDOM.render(application,
  document.getElementById('root')
);


