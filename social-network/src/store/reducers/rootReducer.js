import authReducer from './authReducer';
import postsReducer from './postsReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    auth: authReducer,
    post: postsReducer,
    firestore: firestoreReducer //auto synchs the store with the data base, but we need to do it also in the component so that the reducer know which data to synch
});

export default rootReducer;