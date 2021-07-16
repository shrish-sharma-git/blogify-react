import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// Creating REDUX Store
// We pass a Root Reducer in this function which associates the Reducer with the store 
// applyMiddleware is a function which can take list of middlewares/store enhancers for Redux (here, thunk) 
const store = createStore(rootReducer, applyMiddleware(thunk)); 

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

