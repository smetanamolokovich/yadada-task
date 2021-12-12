import React, { FormEvent } from 'react';
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Text,
    Icon,
    useColorModeValue,
    ButtonGroup,
} from '@chakra-ui/react';
import { useTextInput } from '@/hooks/useTextInput';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

interface ILoginFormProps {
    submitFn: (email: string, password: string) => Promise<void>;
    popupFn: (provider: string) => Promise<void>;
    loading: boolean;
}

const LoginForm: React.FC<ILoginFormProps> = ({ popupFn, submitFn, loading }) => {
    const email = useTextInput('');
    const password = useTextInput('');

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        await submitFn(email.value, password.value);
    }

    async function handlePopup(provider: string) {
        await popupFn(provider);
    }

    return (
        <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
            <Stack spacing={4}>
                <form onSubmit={handleSubmit}>
                    <FormControl id='email'>
                        <FormLabel>Email address</FormLabel>
                        <Input {...email} type='email' placeholder='hello@hello.com' />
                    </FormControl>
                    <FormControl id='password'>
                        <FormLabel>Password</FormLabel>
                        <Input {...password} type='password' placeholder='••••••••••' />
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
                            isLoading={loading}
                            loadingText='Processing'
                        >
                            Let's go
                        </Button>
                    </Stack>
                </form>
            </Stack>
            <Stack pt={6}>
                <Text align={'center'}>
                    <ButtonGroup variant='outline' spacing='3'>
                        <Button onClick={() => handlePopup('google')}>
                            <Icon as={FcGoogle} />
                        </Button>
                        <Button onClick={() => handlePopup('github')}>
                            <Icon as={FaGithub} />
                        </Button>
                    </ButtonGroup>
                </Text>
            </Stack>
        </Box>
    );
};

export default LoginForm;
