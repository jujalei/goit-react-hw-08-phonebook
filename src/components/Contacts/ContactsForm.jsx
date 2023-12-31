import React from 'react';
import { Formik, Field } from 'formik';
import { FormBox } from './ContactsForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/contacts/operations';
import { Input, Button } from '@chakra-ui/react';

const initialValues = {
  name: '',
  number: '',
};

export const ContactsForm = () => {
  const { items } = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onSubmit = (value, { resetForm }) => {
    handleSubmit(value);

    resetForm();
  };

  const handleSubmit = ({ name, number }) => {
    const isInContacts = items.some(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });

    if (isInContacts) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const newContact = { name, number };
    dispatch(addContact(newContact));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <FormBox>
        <label>
          Name
          <Field
            as={Input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <Field
            as={Input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Number number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <Button type="submit" colorScheme="pink" borderRadius="20px" w="100%">
          Add contact
        </Button>
      </FormBox>
    </Formik>
  );
};
