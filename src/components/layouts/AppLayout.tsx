import React from 'react';

import Navbar from '../Navbar';

interface IAppLayoutProps {}

const AppLayout: React.FC<IAppLayoutProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default AppLayout;
