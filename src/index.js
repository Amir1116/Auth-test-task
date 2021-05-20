import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app';
import {BrowserRouter} from 'react-router-dom';

const application = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// const loggerMiddleware = (store) = (next) = (action) =>{
//   const result = next(action);
//   return result;
// };



// const composeEnhancers =
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//       // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//     }) : compose;

ReactDOM.render(application,
  document.getElementById('root')
);


