import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from './config';

const Firebase = firebase.initializeApp(firebaseConfig);

export const Providers: { [key: string]: any } = {
    google: new firebase.auth.GoogleAuthProvider(),
    github: new firebase.auth.GithubAuthProvider(),
};

export const auth = firebase.auth();

export default Firebase;
