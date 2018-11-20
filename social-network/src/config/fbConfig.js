import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDRmo9pZJ5BoEMfD8BLIpe3nX4YTjGIva4", //can be visible its only a id of fb project
    authDomain: "social-network-74583.firebaseapp.com",
    databaseURL: "https://social-network-74583.firebaseio.com",
    projectId: "social-network-74583",
    storageBucket: "social-network-74583.appspot.com",
    messagingSenderId: "592500966009"
};

firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;