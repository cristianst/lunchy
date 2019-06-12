//Firebase Config
import * as firebase from 'firebase';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDddILaOCx3eXW2bVizbeqin0jpKZkcf4c-2c",
    authDomain: "lunchy-1a378.firebaseapp.com",
    databaseURL: "https://lunchy-1a378.firebaseio.com",
    projectId: "lunchy-1a378",
    storageBucket: "lunchy-1a378.appspot.com",
    messagingSenderId: "468437010159",
    appId: "1:468437010159:web:a25331f655a73246",
	persistence: true,
    enableRedirectHandling: true
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();