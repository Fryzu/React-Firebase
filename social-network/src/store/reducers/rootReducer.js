import authReducer from './authReducer';
import postsReducer from './postsReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    post: postsReducer,
    firestore: firestoreReducer, //auto synchs the store with the data base, but we need to do it also in the component so that the reducer know which data to synch
    firebase: firebaseReducer //for auth
});

export default rootReducer;