import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';//this will act- as a middleware between dispatched action and reducer(state manager)
import { createFirestoreInstance,  getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import { app, db ,firebaseConfig} from '././config/firebaseConf';//this enables our enhancers to know which project we need to access in the firebase database
import 'firebase/compat/auth'
import 'firebase/compat/firestore' 
import firebase from 'firebase/compat/app';

const store = createStore(rootReducer,applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})));//adding 2 properties to the thunk object
  //compose(
    //applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),//adding 2 properties to the thunk object
    //reduxFirestore(app),
    //reactReduxFirebase(app)
  //)  
//)
////this will create a  redux --store and store it in store

// Initialize firebase instance
firebase.initializeApp(firebaseConfig)

// Initialize other services on firebase instance
firebase.firestore() // <- needed if using firestore

//const firebase = app.firestore;

const rrfConfig = {
  userProfile: 'users'
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
          <App />
        </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
