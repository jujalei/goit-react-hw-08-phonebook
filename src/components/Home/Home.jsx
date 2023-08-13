import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelector';
import Lottie from 'lottie-react';
import phonebookicon from './icon/phonebookicon.json';

export const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Flex
        h="100vh"
        bg="rgba(255,182,214,0.4)"
        justify="center"
        alignItems="flex-start"
      >
        {isLoggedIn ? (
          <Link to={'contacts'}>
            <Box
              rounded="md"
              fontFamily={'Dancing Script'}
              fontSize={['30px', '40px', '50px', '60px']}
            >
              <Flex flexDirection="column" alignItems="center">
                Create new contact !
                <Lottie
                  animationData={phonebookicon}
                  loop={true}
                  style={{ height: 390 }}
                />
              </Flex>
            </Box>
          </Link>
        ) : (
          <Link to={'register'}>
            <Box
              rounded="md"
              fontFamily={'Dancing Script'}
              fontSize={['30px', '40px', '50px', '60px']}
            >
              <Flex flexDirection="column" alignItems="center">
                Create new contact !
                <Lottie
                  animationData={phonebookicon}
                  loop={true}
                  style={{ height: 390 }}
                />
              </Flex>
            </Box>
          </Link>
        )}
      </Flex>
    </>
  );
};
