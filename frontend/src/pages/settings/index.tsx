import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Grid2, Tab, useTheme } from '@mui/material';
import React, { useEffect } from 'react';
import { useStyles } from './styles';
import { tokens } from '../../theme';
import SettingsPersonalInfoCpmponent from '../../components/settings-personal-info';
import { useAppDispatch } from '../../utils/hook';
import { getPublicUser } from '../../store/thunks/auth';
import ChangePasswordComponent from '../../components/change-password';
import RemoveUserComponent from '../../components/remove-user';

const SettingsPage = () => {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const classes = useStyles();
  const [value, setValue] = React.useState('1');

  useEffect(() => {
    dispatch(getPublicUser());
  }, [dispatch]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Grid2 className={classes.root}>
      <TabContext value={value}>
        <Box className={classes.tabsWrapper}>
          <TabList
            centered
            textColor='secondary'
            TabIndicatorProps={{
              style: {
                backgroundColor: colors.blue,
              },
            }}
            onChange={handleChange}
            aria-label='Settings tabs'
          >
            <Tab label='Персональные данные' value='1' />
            <Tab label='Изменить пароль' value='2' />
            <Tab label='Удалить аккаунт' value='3' />
          </TabList>
        </Box>
        <TabPanel value='1'>
          <SettingsPersonalInfoCpmponent />
        </TabPanel>
        <TabPanel value='2'>
          <ChangePasswordComponent />
        </TabPanel>
        <TabPanel value='3'>
          <RemoveUserComponent />
        </TabPanel>
      </TabContext>
    </Grid2>
  );
};

export default SettingsPage;
