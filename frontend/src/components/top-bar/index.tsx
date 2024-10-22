import { Box, Grid2, IconButton, InputBase, useTheme } from '@mui/material';
import React, { useContext } from 'react';
import { useAppSelector } from '../../utils/hook';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { ColorModeContext, tokens } from '../../theme';
import { useStyles } from './styles';

const TopBarComponent = () => {
	const { user } = useAppSelector((state) => state.auth.user);
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const colorMode: any = useContext(ColorModeContext);
	const classes = useStyles();
	return (
		<Box display='flex' justifyContent='space-between' px='32px' py='24px'>
			<Grid2>Welcome {user?.firstName}</Grid2>
			<Box display='flex'>
				<Grid2 onClick={colorMode.toggleColorMode}>
					<IconButton sx={{ mr: '45px' }}>
						{theme.palette.mode === 'dark' ? (
							<DarkModeIcon />
						) : (
							<LightModeIcon />
						)}
					</IconButton>
				</Grid2>
				<Grid2
					sx={{
						pr: '37px',
						borderRight: `1px solid ${colors.mineShaft.DEFAULT}`,
					}}
				>
					<IconButton>
						<NotificationsNoneIcon />
					</IconButton>
				</Grid2>
				<Grid2
					sx={{
						display: 'flex',
						backgroundColor: `${colors.primary[600]}`,
						borderRadius: '8px',
						ml: '28px',
					}}
				>
					<IconButton className={classes.root}>
						<SearchIcon />
					</IconButton>
					<InputBase sx={{ px: '18px', py: '12px' }} placeholder='Поиск' />
				</Grid2>
			</Box>
		</Box>
	);
};

export default TopBarComponent;
