import React, { useState } from 'react';
import { Flex, Stack, Heading, useColorModeValue } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { AuthServices } from '@/services/auth.services';
import LoginForm from '@/components/LoginForm';

const Login: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const router = useHistory();

    async function handleSubmit(email: string, password: string) {
        try {
            setLoading(true);
            const res = await AuthServices.login(email, password);

            if (res?.user) {
                const { user } = res;
                console.log('User: ' + user.email);
                router.push('/');
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    async function handleSignInWithPopup(provider: string) {
        const res = await AuthServices.loginWithPopup(provider);

        if (res?.user) {
            const { user } = res;
            console.log('User: ' + user.email);
            router.push('/');
        }
    }

    return (
        <Flex minH={'100vh'} align={'center'} justify={'center'}>
            <Stack spacing={8} mt='-10rem' mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Log in to your account</Heading>
                </Stack>

                <LoginForm
                    loading={loading}
                    popupFn={handleSignInWithPopup}
                    submitFn={handleSubmit}
                />
            </Stack>
        </Flex>
    );
};

export default Login;
