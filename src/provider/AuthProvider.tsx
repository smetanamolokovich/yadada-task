import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import { auth } from '@/config/firebase';
import { AuthContext } from '@/context/AuthContext';

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<firebase.User | null>(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((firebaseUser: any) => {
            setUser(firebaseUser);
        });

        return unsubscribe;
    }, []);

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
