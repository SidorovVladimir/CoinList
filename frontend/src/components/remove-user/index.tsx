import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid2,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useStyles } from './styles';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../utils/hook';
import { removeUser } from '../../store/thunks/auth';

const RemoveUserComponent = () => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleRemove = () => {
    dispatch(removeUser());
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('name');
    navigate('/login');
  };

  return (
    <Grid2 container className={classes.root}>
      <Grid2 className={classes.tabHeading}>
        <Typography variant='h2'>Удаление аккаунта</Typography>
      </Grid2>
      <Grid2 className={classes.alertMessage}>
        <Typography variant='body1'>
          Удаляя данный аккаунт, вы удаляете всю персональную информацию. После
          удаления вся сохраненная вами информация будет недоступна.
        </Typography>
      </Grid2>
      <Grid2 className={classes.checkBoxBlock}>
        <FormGroup>
          <FormControlLabel
            sx={{ justifyContent: 'center' }}
            control={
              <Checkbox
                onChange={() => setChecked(!checked)}
                className={classes.checkbox}
              />
            }
            label='Подтверждаю согласие на удаление аккаунта'
          />
        </FormGroup>
      </Grid2>
      <Grid2 className={classes.buttonBlock}>
        <Button
          onClick={handleRemove}
          color='success'
          variant='outlined'
          disabled={!checked}
        >
          Удалить аккаунт
        </Button>
      </Grid2>
    </Grid2>
  );
};

export default RemoveUserComponent;
