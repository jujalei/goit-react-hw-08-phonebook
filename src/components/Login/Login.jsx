import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperation';
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useToast } from '@chakra-ui/react';
import { loginSchema } from 'components/service/YapValidation';
import { ErrorMsgStyled } from 'components/service/YapValidation.styled';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const initialValues = {
  email: '',
  password: '',
};

export const Login = () => {
  const dispatch = useDispatch();
  const toast = useToast();

  const onSubmit = ({ email, password }, { resetForm }) => {
    dispatch(login({ email, password }))
      .unwrap()
      .then(() =>
        toast({
          title: `Success login`,
          status: 'success',
          isClosable: true,
          position: 'top',
        })
      )
      .catch(() =>
        toast({
          title: `Try again with another email or password`,
          status: 'error',
          isClosable: true,
          position: 'top',
        })
      );
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
          validationSchema={loginSchema}
        >
          <Form>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
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
                      onClick={handleClick}
                      colorScheme="transparent"
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
              </label>
            </div>
            <ErrorMsgStyled component="span" name="password" />
            <Button
              type="submit"
              colorScheme="pink"
              borderRadius="20px"
              w="full"
              mt={5}
            >
              Login
            </Button>
          </Form>
        </Formik>
      </Box>
    </Flex>
  );
};
