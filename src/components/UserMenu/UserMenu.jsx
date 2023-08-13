import { Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperation';
import { selectUserName } from 'redux/auth/authSelector';

import { FaUserAstronaut } from 'react-icons/fa6';

export const UserMenu = () => {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();

  return (
    <Flex align="center">
      <Flex align="center" gap={3}>
        <FaUserAstronaut style={{ fontSize: '45px', color: '#D53F8C' }} />
        <Text color="black" fontSize={['10px', '12px', '14px', '16px']}>
          Welcome, <strong>{userName}</strong>
        </Text>
      </Flex>

      <Button
        type="button"
        colorScheme="pink"
        borderRadius="20px"
        w="full"
        ml={5}
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Logout
      </Button>
    </Flex>
  );
};
