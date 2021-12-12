import React from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import IRoute from '@/interfaces/route.interfaces';
import ProtectedRoute from './ProtectedRoute';

export interface IAppRoutesProps {
    routes: IRoute[];
}
const AppRoutes: React.FC<IAppRoutesProps> = ({ routes }) => {
    return (
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
    );
};

export default AppRoutes;
