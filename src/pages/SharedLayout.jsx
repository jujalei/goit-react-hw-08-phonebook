import { UserMenu } from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelector';
import { Button, Box, Flex, Container } from '@chakra-ui/react';
import Footer from 'components/Footer/Footer';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Box
        as="header"
        w="100%"
        bgGradient="linear-gradient(0deg, rgba(255,182,214,0.4990371148459384) 0%, rgba(205,184,223,1) 48%, rgba(148,187,233,1) 100%)"
      >
        <Container
          pl="10px"
          pr="10px"
          className="containerSL"
          maxW={['400px', '450px', '768px', '900px', '2400px']}
        >
          <Flex
            pt={5}
            pb={5}
            as="nav"
            justifyContent={isLoggedIn ? 'space-between' : 'flex-end'}
          >
            {isLoggedIn && (
              <Button colorScheme="pink" borderRadius="20px" mr={5}>
                <Link to={'contacts'}>Contacts</Link>
              </Button>
            )}
            {isLoggedIn ? (
              <UserMenu />
            ) : (
              <div>
                <Button colorScheme="pink" borderRadius="20px" mr={5}>
                  <Link to={'register'}>Register</Link>
                </Button>
                <Button colorScheme="pink" borderRadius="20px">
                  <Link to={'login'}>Login</Link>
                </Button>
              </div>
            )}
          </Flex>
        </Container>
      </Box>

      <Outlet />

      <Footer />
    </>
  );
};
