import React, { Fragment } from 'react';
import { TextField, Typography } from '@mui/material';
import { IPropsLogin } from '../../../common/types/auth';
import { useStyles } from './styles';
// import AppButton from '../../app-button';
import AppLoadingButton from '../../../components/loading-button';

const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
  const { navigate, register, errors, loading } = props;
  const classes = useStyles();
  return (
    <>
      <Typography
        variant='h2'
        fontFamily='Popins'
        textAlign='center'
        fontSize={32}
      >
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
        placeholder='Введите ваш password'
        helperText={errors.password ? `${errors.password.message}` : ''}
        {...register('password')}
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
        Войти
      </AppLoadingButton>
      <Typography variant='body1' sx={{ fontFamily: 'Poppins' }}>
        У вас нет аккаунта?
        <span
          className={classes.incitingText}
          onClick={() => navigate('/register')}
        >
          Регистрация
        </span>
      </Typography>
    </>
  );
};

export default LoginPage;
