import { Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { IPropsRegister } from '../../../common/types/auth';

const RegisterPage: React.FC<IPropsRegister> = (
  props: IPropsRegister
): JSX.Element => {
  const { navigate, register, errors } = props;
  return (
    <>
      <Typography variant='h2' fontFamily='Popins' textAlign='center'>
        Регистрация
      </Typography>
      <Typography
        marginBottom={2}
        variant='body1'
        fontFamily='Poppins'
        textAlign='center'
      >
        Введите данные для регистрации
      </Typography>
      <TextField
        error={!!errors.name}
        fullWidth={true}
        margin='normal'
        label='Имя'
        variant='outlined'
        placeholder='Введите ваше имя'
        helperText={errors.name ? `${errors.name.message}` : ''}
        {...register('name')}
      />
      <TextField
        error={!!errors.username}
        fullWidth={true}
        margin='normal'
        label='Username'
        variant='outlined'
        placeholder='Введите ваш username'
        helperText={errors.username ? `${errors.username.message}` : ''}
        {...register('username')}
      />
      <TextField
        error={!!errors.email}
        fullWidth={true}
        margin='normal'
        label='Email'
        variant='outlined'
        placeholder='Введите ваш email'
        helperText={errors.email ? `${errors.email.message}` : ''}
        {...register('email')}
      />
      <TextField
        error={!!errors.password}
        fullWidth={true}
        type='password'
        margin='normal'
        label='Password'
        variant='outlined'
        placeholder='Введите ваш пароль'
        helperText={errors.password ? `${errors.password.message}` : ''}
        {...register('password')}
      />
      <TextField
        error={!!errors.confirmPassword}
        fullWidth={true}
        type='password'
        margin='normal'
        label='Password'
        variant='outlined'
        placeholder='Повторите ваш пароль'
        helperText={
          errors.confirmPassword ? `${errors.confirmPassword.message}` : ''
        }
        {...register('confirmPassword')}
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
        Регистрация
      </Button>
      <Typography variant='body1' sx={{ fontFamily: 'Poppins' }}>
        У вас есть аккаунт?
        <span className='incitingText' onClick={() => navigate('/login')}>
          Авторизация
        </span>
      </Typography>
    </>
  );
};

export default RegisterPage;
