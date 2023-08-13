import { Box, Button, Container } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectFilteredContacts } from 'redux/selectors';
import { Item } from './ContactsList.styled';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';

export const ContactsList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    // <Box alignItems="center">
    <Container
      pl="10px"
      pr="10px"
      className="containerSL"
      maxW={['400px', '450px', '768px', '900px', '1440px']}
    >
      <Box
        as="ul"
        listStyleType="none"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        wordBreak="break-word"
      >
        {filteredContacts.map(item => {
          return (
            <Item key={item.id}>
              <Box as="div" display="flex" alignItems="center" gap="4px">
                <BiUser style={{ fontSize: '20px', color: '#D53F8C' }} />
                {item.name}: {item.number}
              </Box>

              <Button
                minW="auto"
                type="button"
                padding="15px"
                borderRadius="50px"
                colorScheme="pink"
                onClick={() => {
                  dispatch(deleteContact(item.id));
                }}
              >
                <BsFillTrash3Fill
                  style={{ fontSize: '12px', color: 'white' }}
                />
              </Button>
            </Item>
          );
        })}
      </Box>
    </Container>
  );
};
