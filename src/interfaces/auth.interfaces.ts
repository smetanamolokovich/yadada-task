import firebase from 'firebase/app';

export interface IAuthError {
    code: string;
    message: string;
}

export interface IAuthSuccess {
    providerId: string | null;
    user: firebase.auth.UserCredential;
}
