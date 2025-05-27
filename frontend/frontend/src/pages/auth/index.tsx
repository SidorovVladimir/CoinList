import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LoginPage from './login';
import RegisterPage from './register';
import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../utils/hook';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema, RegisterSchema } from '../../utils/yup';
import { useStyles } from './styles';
import { loginUser, registerUser } from '../../store/thunks/auth';

const AuthRootPage: React.FC = (): JSX.Element => {
  const location = useLocation();
  const classes = useStyles();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<any>({
    resolver: yupResolver(
      location.pathname === '/login' ? LoginSchema : RegisterSchema
    ),
  });
  const dispatch = useAppDispatch();

  const loading = useAppSelector((state) => state.auth.isLoading);
  const handleSubmitForm = async (data: any) => {
    if (location.pathname === '/login') {
      try {
        await dispatch(loginUser(data));
        navigate('/');
      } catch (e) {
        return e;
      }
    } else {
      try {
        await dispatch(registerUser(data));
        navigate('/');
      } catch (e) {
        return e;
      }
    }
  };
  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmit(handleSubmitForm)}>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          flexDirection='column'
          maxWidth={640}
          margin='auto'
          padding={5}
          borderRadius={5}
          boxShadow={'-3px -2px 20px 1px #202020'}
        >
          {location.pathname === '/login' ? (
            <LoginPage
              navigate={navigate}
              register={register}
              errors={errors}
              loading={loading}
            />
          ) : location.pathname === '/register' ? (
            <RegisterPage
              loading={loading}
              navigate={navigate}
              register={register}
              errors={errors}
            />
          ) : null}
        </Box>
      </form>
    </div>
  );
};

export default AuthRootPage;
