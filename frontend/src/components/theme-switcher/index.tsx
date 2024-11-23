import { DarkMode, LightMode, NotificationsNone } from '@mui/icons-material';
import { Grid2, IconButton, useTheme } from '@mui/material';
import React, { useContext } from 'react';
import { ColorModeContext } from '../../theme';
import { useStyles } from './styles';

const ThemeSwitcherComponent = () => {
  const theme = useTheme();
  const colorMode: any = useContext(ColorModeContext);
  const classes = useStyles();
  return (
    <>
      <Grid2
        onClick={colorMode.toggleColorMode}
        className={classes.iconThemeBlock}
      >
        <IconButton className={classes.themeIcon}>
          {theme.palette.mode === 'dark' ? <DarkMode /> : <LightMode />}
        </IconButton>
      </Grid2>
      <Grid2 className={classes.iconNotificationsBlock}>
        <IconButton>
          <NotificationsNone />
        </IconButton>
      </Grid2>
    </>
  );
};

export default ThemeSwitcherComponent;
