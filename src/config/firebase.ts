import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from './config';

const Firebase = firebase.initializeApp(firebaseConfig);

export const Providers = {
    google: new firebase.auth.GoogleAuthProvider(),
};

export const auth = firebase.auth();

export default Firebase;
