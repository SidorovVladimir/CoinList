import { Box, Grid2, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';
import { useAppDispatch, useAppSelector } from '../../utils/hook';
import AppLoadingButton from '../loading-button';
import { updateUserInfo } from '../../store/thunks/auth';

const SettingsPersonalInfoCpmponent = () => {
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const { user } = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    if (user) {
      setName(user.firstName);
      setUsername(user.username);
      setEmail(user.email);
    }
  }, [user]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      firstName: name,
      username,
      email,
    };

    dispatch(updateUserInfo(data));
  };
  return (
    <Grid2
      className={classes.root}
      component='form'
      noValidate
      autoComplete='off'
      onSubmit={handleSubmit}
    >
      <Box className={classes.formWrapper}>
        <TextField
          className={classes.inputField}
          type='text'
          label='Имя'
          variant='outlined'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          className={classes.inputField}
          type='text'
          label='Username'
          variant='outlined'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <TextField
          className={classes.inputField}
          type='text'
          label='Email'
          variant='outlined'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Box className={classes.buttonBlock}>
          <AppLoadingButton type='submit'>Сохранить</AppLoadingButton>
        </Box>
      </Box>
    </Grid2>
  );
};

export default SettingsPersonalInfoCpmponent;
