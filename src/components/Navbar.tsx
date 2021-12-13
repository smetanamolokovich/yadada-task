import { ReactNode, useContext } from 'react';
import {
    Box,
    Flex,
    Avatar,
    Link,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { AuthContext } from '@/context/AuthContext';
import { useHistory } from 'react-router-dom';
import { auth } from '@/config/firebase';

const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}
    >
        {children}
    </Link>
);

export default function Nav() {
    const router = useHistory();
    const { colorMode, toggleColorMode } = useColorMode();
    const user = useContext(AuthContext);

    async function handleLogout() {
        await auth.signOut();
    }

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Button variant='ghost' onClick={() => router.push('/')}>
                        yadada-task
                    </Button>

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>

                            {user && (
                                <Menu>
                                    <MenuButton
                                        as={Button}
                                        rounded={'full'}
                                        variant={'link'}
                                        cursor={'pointer'}
                                        minW={0}
                                    >
                                        <Avatar
                                            size={'sm'}
                                            src={
                                                user.photoURL ||
                                                'https://via.placeholder.com/40x40?text=?'
                                            }
                                        />
                                    </MenuButton>
                                    <MenuList alignItems={'center'}>
                                        <br />
                                        <Center>
                                            <Avatar
                                                size={'2xl'}
                                                src={
                                                    user.photoURL ||
                                                    'https://via.placeholder.com/128x128?text=?'
                                                }
                                            />
                                        </Center>
                                        <br />
                                        <Center>
                                            <p>{user.displayName || user.email}</p>
                                        </Center>
                                        <br />
                                        <MenuDivider />
                                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                                    </MenuList>
                                </Menu>
                            )}
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}
