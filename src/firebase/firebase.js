import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCTW_6jMcWVNyaiqfUD2daDiiX295Iz2Eo",
    authDomain: "websec-auth.firebaseapp.com",
    databaseURL: "https://websec-auth.firebaseio.com",
    projectId: "websec-auth",
    storageBucket: "websec-auth.appspot.com",
    messagingSenderId: "547583927825"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
const auth_object = firebase.auth;
export {auth, auth_object};
