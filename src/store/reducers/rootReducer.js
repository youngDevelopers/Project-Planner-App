import authReducer  from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer } from 'react-redux-firebase';
import { app } from '../../config/firebaseConf';

//const storeReducer = firestoreReducer(app);//how to make redux-firestore automatically detect what firebase project we want to access

const rootReducer = combineReducers({//combining the two diiferent reducers into a root reducer with auth and project properties
    auth: authReducer,
    project: projectReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer // <- needed if using firestore
})

export default rootReducer;