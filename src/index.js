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


// Creating REDUX Store
// We pass a Root Reducer in this function which associates the Reducer with the store 
// applyMiddleware is a function which can take list of middlewares/store enhancers for Redux (here, thunk) 
const store = createStore(rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirestore})),
    reduxFirestore(firebase, firebaseConfig)
  )
); 

const rrfProps = {
  firebase,
  config: firebaseConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

function AuthIsReady({ children, state }){
  // const auth = state.firebase.auth;
  const auth = useSelector(state=>state.firebase.auth);

  console.log(auth)
  if(isLoaded(auth)){
    return children;
  } 
  else{
    return <div className="loading"> <img src="https://media.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif" alt="Loading... " /></div>
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

