import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import App from '@/components/App';
import { AuthProvider } from '@/provider/AuthProvider';
import '@/index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <AuthProvider>
            <ChakraProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ChakraProvider>
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
