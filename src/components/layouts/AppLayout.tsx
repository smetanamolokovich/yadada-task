import React from 'react';
import { Container } from '@chakra-ui/react';
import Navbar from '../Navbar';

interface IAppLayoutProps {}

const AppLayout: React.FC<IAppLayoutProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            <Container maxW='container.lg'>{children}</Container>
        </>
    );
};

export default AppLayout;
