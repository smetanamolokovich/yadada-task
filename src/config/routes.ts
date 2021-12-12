import IRoute from '@/interfaces/route.interfaces';
import Homepage from '@/pages/Homepage';
import Login from '@/pages/Login';

export const routes: IRoute[] = [
    {
        path: '/auth/login',
        exact: true,
        component: Login,
        name: 'Login',
        protected: false,
    },
    {
        path: '/',
        exact: true,
        component: Homepage,
        name: 'Homepage',
        protected: true,
    },
];
