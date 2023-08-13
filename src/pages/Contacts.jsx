import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactsForm } from 'components/Contacts/ContactsForm';
import { ContactsList } from 'components/Contacts/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Box, Flex, Text, Container } from '@chakra-ui/react';

export const Contacts = () => {
  const { items, isLoading, error } = useSelector(selectContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container pl="0px" pr="0px" className="containerSL" maxW="100% ">
        <Flex
          bg="rgba(255,182,214,0.4)"
          justify="center"
          alignItems="flex-start"
          p={5}
        >
          <Box p="10px" borderRadius="10px">
            {error && <p>{error}</p>}
            <Text
              as="h1"
              color="black"
              fontSize="50"
              mb={5}
              textAlign="center"
              fontFamily={'Dancing Script'}
            >
              Phonebook
            </Text>
            <ContactsForm />
            <Text
              as="h1"
              color="black"
              fontSize="40"
              m={5}
              textAlign="center"
              fontFamily={'Dancing Script'}
            >
              Contacts
            </Text>
            {isLoading && <p>Loading...</p>}
            {items.length > 0 ? (
              <>
                <Filter />
                <ContactsList />
              </>
            ) : (
              !isLoading && <div> No contacts found</div>
            )}
          </Box>
        </Flex>
      </Container>
    </>
  );
};
