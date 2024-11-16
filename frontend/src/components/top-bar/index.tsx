import {
  AppBar,
  Box,
  Grid2,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import React, { FC, useContext } from 'react';
// import { useAppSelector } from '../../utils/hook';
import {
  DarkMode,
  LightMode,
  Search,
  NotificationsNone,
  MenuOutlined,
} from '@mui/icons-material';
import { ColorModeContext } from '../../theme';
import { useStyles } from './styles';
import FlexBetween from '../flex-between';
import { ITopbarProps } from '../../common/types/topbar';

const TopBarComponent: FC<ITopbarProps> = (
  props: ITopbarProps
): JSX.Element => {
  // const { user } = useAppSelector((state) => state.auth.user);
  const theme = useTheme();
  const colorMode: any = useContext(ColorModeContext);
  const classes = useStyles();
  const { isOpen, setIsOpen } = props;
  return (
    <AppBar className={classes.root} position='static'>
      <Toolbar className={classes.toolbar}>
        <FlexBetween>
          <MenuOutlined
            className={classes.menuIcon}
            onClick={() => setIsOpen(!isOpen)}
          />
          {/* <Typography variant='h3'>Welcome {user?.firstName}</Typography> */}
          {/*TODO: fix */}
          <Typography variant='h3'>
            Welcome {sessionStorage.getItem('name')}
          </Typography>
        </FlexBetween>
        <Box display='flex'>
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
          <Grid2 className={classes.searchBlock}>
            <IconButton className={classes.searchIcon}>
              <Search />
            </IconButton>
            <InputBase className={classes.searchInput} placeholder='Поиск' />
          </Grid2>
        </Box>
      </Toolbar>
    </AppBar>
    // <Box className={classes.root}>
    //   <Grid2>Welcome {user?.firstName}</Grid2>
    //   <Box display='flex'>
    //     <Grid2
    //       onClick={colorMode.toggleColorMode}
    //       className={classes.iconThemeBlock}
    //     >
    //       <IconButton className={classes.themeIcon}>
    //         {theme.palette.mode === 'dark' ? (
    //           <DarkModeIcon />
    //         ) : (
    //           <LightModeIcon />
    //         )}
    //       </IconButton>
    //     </Grid2>
    //     <Grid2 className={classes.iconNotificationsBlock}>
    //       <IconButton>
    //         <NotificationsNoneIcon />
    //       </IconButton>
    //     </Grid2>
    //     <Grid2 className={classes.searchBlock}>
    //       <IconButton className={classes.searchIcon}>
    //         <SearchIcon />
    //       </IconButton>
    //       <InputBase className={classes.searchInput} placeholder='Поиск' />
    //     </Grid2>
    //   </Box>
    // </Box>
  );
};

export default TopBarComponent;
