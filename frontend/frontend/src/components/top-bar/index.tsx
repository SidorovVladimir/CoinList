import { AppBar, Grid2, Toolbar, Typography } from '@mui/material';
import React, { FC } from 'react';
// import { useAppSelector } from '../../utils/hook';
import { MenuOutlined } from '@mui/icons-material';

import { useStyles } from './styles';
import FlexBetween from '../flex-between';
import { ITopbarProps } from '../../common/types/topbar';
import ThemeSwitcherComponent from '../theme-switcher';
import SearchBarComponent from '../search-bar';
import { useAppSelector } from '../../utils/hook';

const TopBarComponent: FC<ITopbarProps> = (
  props: ITopbarProps
): JSX.Element => {
  const { user } = useAppSelector((state) => state.auth.user);
  const classes = useStyles();
  const { isOpen, setIsOpen, isNonMobile } = props;
  return (
    <AppBar className={classes.root} position='static'>
      <Toolbar className={classes.toolbar}>
        <Grid2
          container
          justifyContent='space-between'
          alignItems='center'
          width='100%'
        >
          <Grid2 size={{ sm: 3, lg: 3 }}>
            <FlexBetween>
              <MenuOutlined
                className={classes.menuIcon}
                onClick={() => setIsOpen(!isOpen)}
              />
              <Typography variant='h3'>Welcome {user?.firstName}</Typography>
              {/*TODO: fix */}
              {/* <Typography variant='h3'>
                Welcome {sessionStorage.getItem('name')}
              </Typography> */}
            </FlexBetween>
          </Grid2>
          {isNonMobile && (
            <Grid2
              display='flex'
              justifyContent='flex-end'
              size={{ sm: 9, lg: 9 }}
            >
              <ThemeSwitcherComponent />
              <SearchBarComponent />
            </Grid2>
          )}
        </Grid2>
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
