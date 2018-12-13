import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'; //for asynchrous calls in redux
import { getFirestore, reduxFirestore } from 'redux-firestore'; //firestore API
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase'; //firebase API
import fbConfig from './config/fbConfig';

const store = createStore(rootReducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig, {useFirestoreForProfile: true, userProfile: "users", attachAuthIsReady: true}) //auth ready - doesnt render before auth is linked with server, useFirestoreForProfile ads profile additional info looks for in userProfile collection
    )
); // creating storage with additional thunk features to coop with database - extraargument allows additional arguments for actions functions

store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
    
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: http://bit.ly/CRA-PWA
    serviceWorker.unregister();
})

