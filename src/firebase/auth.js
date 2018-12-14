import {auth, auth_object} from './firebase.js';


export const signUp_Email = (email, passwd) =>
  auth.createUserWithEmailAndPassword(email, passwd);

export let signIn_Email = (email, passwd) =>
  auth.signInWithEmailAndPassword(email, passwd);

export const signOut = () =>
  auth.signOut();

export const signIn_Github = () =>
  auth.signInWithPopup(new auth_object.GithubAuthProvider());

export const signIn_Google = () =>
  auth.signInWithPopup(new auth_object.GoogleAuthProvider());
