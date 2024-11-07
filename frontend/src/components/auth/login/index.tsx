import React, { Fragment } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { IPropsLogin } from '../../../common/types/auth';

const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
  const { setEmail, setPassword, navigate } = props;
  return (
    <>
      <Typography variant='h2' fontFamily='Popins' textAlign='center'>
        Авторизация
      </Typography>
      <Typography
        marginBottom={2}
        variant='body1'
        fontFamily='Poppins'
        textAlign='center'
      >
        Введите ваш логин и пароль
      </Typography>
      <TextField
        fullWidth={true}
        margin='normal'
        label='Email'
        variant='outlined'
        placeholder='Введите ваш email'
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        fullWidth={true}
        type='password'
        margin='normal'
        label='Password'
        variant='outlined'
        placeholder='Введите ваш password'
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        type='submit'
        variant='contained'
        sx={{
          fontFamily: 'Poppins',
          marginTop: 2,
          width: '60%',
          marginBottom: 2,
        }}
      >
        Войти
      </Button>
      <Typography variant='body1' sx={{ fontFamily: 'Poppins' }}>
        У вас нет аккаунта?
        <span className='incitingText' onClick={() => navigate('/register')}>
          Регистрация
        </span>
      </Typography>
    </>
  );
};

export default LoginPage;
