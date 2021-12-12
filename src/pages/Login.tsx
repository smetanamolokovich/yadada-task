import React, { FormEvent, useState } from 'react';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    Icon,
    useColorModeValue,
    ButtonGroup,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { useTextInput } from '@/hooks/useTextInput';
import { auth, Providers } from '@/config/firebase';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const Login: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const email = useTextInput('');
    const password = useTextInput('');
    const router = useHistory();

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        setLoading(true);
        const res = await auth.signInWithEmailAndPassword(email.value, password.value);
        if (res.user) {
            const { user } = res;
            console.log('User: ' + user.email);
            router.push('/');
        }
    }

    async function handleSignInWithPopup(provider: string) {
        const res = await auth.signInWithPopup(Providers[provider]);

        if (res.user) {
            const { user } = res;
            console.log('User: ' + user.email);
            router.push('/');
        }
    }

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}
        >
            <Stack spacing={8} mt='-10rem' mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Log in to your account</Heading>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}
                >
                    <Stack spacing={4}>
                        <form onSubmit={handleSubmit}>
                            <FormControl id='email'>
                                <FormLabel>Email address</FormLabel>
                                <Input {...email} type='email' placeholder='hello@hello.com' />
                            </FormControl>
                            <FormControl id='password'>
                                <FormLabel>Password</FormLabel>
                                <Input
                                    {...password}
                                    type='password'
                                    placeholder='••••••••••'
                                />
                            </FormControl>
                            <Stack spacing={10}>
                                <Stack
                                    direction={{ base: 'column', sm: 'row' }}
                                    align={'start'}
                                    justify={'space-between'}
                                ></Stack>
                                <Button
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}
                                    type='submit'
                                >
                                    Let's go
                                </Button>
                            </Stack>
                        </form>
                    </Stack>
                    <Stack pt={6}>
                        <Text align={'center'}>
                            <ButtonGroup variant='outline' spacing='3'>
                                <Button onClick={() => handleSignInWithPopup('google')}>
                                    <Icon as={FcGoogle} />
                                </Button>
                                <Button onClick={() => handleSignInWithPopup('github')}>
                                    <Icon as={FaGithub} />
                                </Button>
                            </ButtonGroup>
                        </Text>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
};

export default Login;
