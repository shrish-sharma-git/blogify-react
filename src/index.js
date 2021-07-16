import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { getFirebase, reactReduxFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import firebaseConfig from './config/firebaseConfig';
import { createFirestoreInstance } from 'redux-firestore';
import firebase from 'firebase';


// Creating REDUX Store
// We pass a Root Reducer in this function which associates the Reducer with the store 
// applyMiddleware is a function which can take list of middlewares/store enhancers for Redux (here, thunk) 
const store = createStore(rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirestore})),
    reduxFirestore(firebase, firebaseConfig),
  )
); 

const rrfProps = {
  firebase,
  config: firebaseConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
    </ReactReduxFirebaseProvider>  
  </Provider>,
  document.getElementById('root')
);

