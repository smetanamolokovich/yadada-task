import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { routes } from '@/config/routes';
import AppRoutes from './AppRoutes';
import AppLayout from './layouts/AppLayout';

export interface IAppProps {}

const App: React.FC<IAppProps> = () => {
    const [loading, setLoading] = useState(true);
    const user = useContext(AuthContext);

    useEffect(() => {
        setLoading(false);
    }, [user]);

    return loading ? (
        <div>loading...</div>
    ) : (
        <AppLayout>
            <AppRoutes routes={routes} />
        </AppLayout>
    );
};

export default App;
