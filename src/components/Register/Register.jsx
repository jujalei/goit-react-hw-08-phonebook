import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperation';
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { useState } from 'react';
import { signupSchema } from 'components/service/YapValidation';
import { ErrorMsgStyled } from 'components/service/YapValidation.styled';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const Register = () => {
  //
  const dispatch = useDispatch();

  const onSubmit = ({ name, email, password }, { resetForm }) => {
    dispatch(register({ name, email, password }));

    resetForm();
  };

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Flex
      bg="rgba(255,182,214,0.4)"
      justify="center"
      h="100vh"
      alignItems="flex-start"
    >
      <Box p={10} m={10} rounded="md">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={signupSchema}
        >
          <Form>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label>
                Name
                <Field
                  as={Input}
                  type="text"
                  name="name"
                  borderColor="black"
                  borderRadius="20px"
                />
                <ErrorMsgStyled component="span" name="name" />
              </label>
              <label>
                Email
                <Field
                  as={Input}
                  type="email"
                  name="email"
                  borderColor="black"
                  borderRadius="20px"
                />
                <ErrorMsgStyled component="span" name="email" />
              </label>
              <label>
                Password
                <InputGroup size="md">
                  <Field
                    as={Input}
                    pr="4.5rem"
                    type={show ? 'text' : 'password'}
                    name="password"
                    borderColor="black"
                    borderRadius="20px"
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      borderRadius="50px"
                      colorScheme="transparent"
                      onClick={handleClick}
                    >
                      {show ? (
                        <AiOutlineEyeInvisible
                          style={{ fontSize: '20px', color: 'black' }}
                        />
                      ) : (
                        <AiOutlineEye
                          style={{ fontSize: '20px', color: 'black' }}
                        />
                      )}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <ErrorMsgStyled component="span" name="password" />
              </label>
            </div>
            <Button
              type="submit"
              colorScheme="pink"
              borderRadius="20px"
              w="full"
              mt={5}
            >
              Sign Up
            </Button>
          </Form>
        </Formik>
      </Box>
    </Flex>
  );
};
