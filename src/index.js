import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider, useSelector } from 'react-redux';
import thunk from 'redux-thunk';
import { getFirebase, reactReduxFirebase, ReactReduxFirebaseProvider, isLoaded } from 'react-redux-firebase';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import firebaseConfig from './config/firebaseConfig';
import { createFirestoreInstance } from 'redux-firestore';
import firebase from 'firebase';
import preloader from './preloader.gif';

// Creating REDUX Store
// We pass a Root Reducer in this function which associates the Reducer with the store 
// applyMiddleware is a function which can take list of middlewares/store enhancers for Redux (here, thunk) 
const store = createStore(rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirestore})),
    reduxFirestore(firebase, firebaseConfig)
  )
); 

const rrfConfig={
  userProfile:'users',
  useFirestoreForProfile:true,
  attachAuthIsReady:true
}

const rrfProps = {
  dispatch:store.dispatch,
  config:rrfConfig,
  createFirestoreInstance,
  firebase,
}

function AuthIsReady({ children, state }){
  // const auth = state.firebase.auth;
  const auth = useSelector(state=>state.firebase.auth);
  if(isLoaded(auth)){
    return children;
  } 
  else{
    return <div className="preloader"><img className="img-load" src={preloader} alt="Loading..." /></div>
  }
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
    <React.StrictMode>
      <AuthIsReady>
        <App />
      </AuthIsReady>  
    </React.StrictMode>    
    </ReactReduxFirebaseProvider>  
  </Provider>,
  document.getElementById('root')
);

