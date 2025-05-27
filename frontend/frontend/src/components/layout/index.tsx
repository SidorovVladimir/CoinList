import React, { FC, useEffect, useState } from 'react';
import TopBarComponent from '../top-bar';
import { Outlet, useLocation } from 'react-router-dom';
import { Box, useMediaQuery } from '@mui/material';
import SidebarComponent from '../sidebar';
import { useStyles } from './styles';
import { useAppDispatch } from '../../utils/hook';
import { getPublicUser } from '../../store/thunks/auth';

const LayoutComponent: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isNonMobile = useMediaQuery('(min-width:760px)');
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPublicUser());
  }, [dispatch]);

  return location.pathname === '/login' || location.pathname === '/register' ? (
    <>
      <Outlet />
    </>
  ) : (
    <>
      <Box
        display={isNonMobile ? 'flex' : 'block'}
        width='100%'
        height='100%'
        justifyContent='space-between'
      >
        <SidebarComponent
          isNonMobile={isNonMobile}
          drawerWidth='250px'
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <Box className={classes.mainSection}>
          <TopBarComponent
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            isNonMobile={isNonMobile}
          />
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default LayoutComponent;
