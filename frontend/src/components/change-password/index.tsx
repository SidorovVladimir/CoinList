import { Box, Grid2, TextField } from '@mui/material';
import React, { FC, useState } from 'react';
import { useStyles } from './styles';
import { useAppDispatch } from '../../utils/hook';
import AppLoadingButton from '../loading-button';
import { updateUserPassword } from '../../store/thunks/auth';

const ChangePasswordComponent: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setnewPassword] = useState('');

  const handleChangePassword = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const data = {
      oldPassword,
      newPassword,
    };

    dispatch(updateUserPassword(data));
  };
  return (
    <Grid2
      className={classes.root}
      component='form'
      noValidate
      autoComplete='off'
      onSubmit={handleChangePassword}
    >
      <Box className={classes.formWrapper}>
        <TextField
          className={classes.inputField}
          type='password'
          label='Старый пароль'
          variant='outlined'
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <TextField
          className={classes.inputField}
          type='password'
          label='Новый пароль'
          variant='outlined'
          value={newPassword}
          onChange={(e) => setnewPassword(e.target.value)}
        />
        <Box className={classes.buttonBlock}>
          <AppLoadingButton type='submit'>Сохранить</AppLoadingButton>
        </Box>
      </Box>
    </Grid2>
  );
};

export default ChangePasswordComponent;
