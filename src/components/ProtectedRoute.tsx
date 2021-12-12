import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '@/context/AuthContext';

interface IProtectedRouteProps {}

const ProtectedRoute: React.FC<IProtectedRouteProps> = ({ children }) => {
    const currentUser = useContext(AuthContext);

    if (!currentUser) {
        return <Redirect to='/auth/login' />;
    }
    return <>{children}</>;
};

export default ProtectedRoute;
