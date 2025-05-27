import { TextField, Typography } from '@mui/material';
import React from 'react';
import { IPropsRegister } from '../../../common/types/auth';
import { useStyles } from './styles';
import AppLoadingButton from '../../../components/loading-button';

const RegisterPage: React.FC<IPropsRegister> = (
  props: IPropsRegister
): JSX.Element => {
  const { navigate, register, errors, loading } = props;
  const classes = useStyles();
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
        error={!!errors.firstName}
        fullWidth={true}
        margin='normal'
        label='Имя'
        variant='outlined'
        placeholder='Введите ваше имя'
        helperText={errors.firstName ? `${errors.firstName.message}` : ''}
        {...register('firstName')}
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
      <AppLoadingButton
        loading={loading}
        type='submit'
        variant='contained'
        sx={{
          marginTop: 2,
          marginBottom: 2,
        }}
      >
        Регистрация
      </AppLoadingButton>
      <Typography variant='body1' sx={{ fontFamily: 'Poppins' }}>
        У вас есть аккаунт?
        <span
          className={classes.incitingText}
          onClick={() => navigate('/login')}
        >
          Авторизация
        </span>
      </Typography>
    </>
  );
};

export default RegisterPage;
