import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, RouteComponentProps } from 'react-router-dom';
import { AuthContext } from '@/context/AuthContext';
import { routes } from '@/config/routes';
import ProtectedRoute from '@/modules/auth/ProtectedRoute';

export interface IAppProps {}

const App: React.FC<IAppProps> = () => {
    const [loading, setLoading] = useState(true);
    const user = useContext(AuthContext);

    useEffect(() => {
        setLoading(false);
    }, [user]);

    return (
        <BrowserRouter>
            <Switch>
                {routes.map((route, idx) => (
                    <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        render={(routeProps: RouteComponentProps<any>) => {
                            if (route.protected)
                                return (
                                    <ProtectedRoute>
                                        <route.component {...routeProps} />
                                    </ProtectedRoute>
                                );

                            return <route.component {...routeProps} />;
                        }}
                    />
                ))}
            </Switch>
        </BrowserRouter>
    );
};

export default App;
