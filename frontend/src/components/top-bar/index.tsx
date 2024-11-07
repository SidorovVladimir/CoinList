import { Box, Grid2, IconButton, InputBase, useTheme } from '@mui/material';
import React, { useContext } from 'react';
import { useAppSelector } from '../../utils/hook';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { ColorModeContext } from '../../theme';
import { useStyles } from './styles';

const TopBarComponent = () => {
  const { user } = useAppSelector((state) => state.auth.user);
  const theme = useTheme();
  const colorMode: any = useContext(ColorModeContext);
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid2>Welcome {user?.firstName}</Grid2>
      <Box display='flex'>
        <Grid2
          onClick={colorMode.toggleColorMode}
          className={classes.iconThemeBlock}
        >
          <IconButton className={classes.themeIcon}>
            {theme.palette.mode === 'dark' ? (
              <DarkModeIcon />
            ) : (
              <LightModeIcon />
            )}
          </IconButton>
        </Grid2>
        <Grid2 className={classes.iconNotificationsBlock}>
          <IconButton>
            <NotificationsNoneIcon />
          </IconButton>
        </Grid2>
        <Grid2 className={classes.searchBlock}>
          <IconButton className={classes.searchIcon}>
            <SearchIcon />
          </IconButton>
          <InputBase className={classes.searchInput} placeholder='Поиск' />
        </Grid2>
      </Box>
    </Box>
  );
};

export default TopBarComponent;
