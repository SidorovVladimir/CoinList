import { makeStyles } from '@mui/styles';
import { tokens } from '../../theme';
import { Theme } from '@mui/material';

export const useStyles = makeStyles((theme: Theme) => {
  const colors = tokens(theme.palette.mode);
  return {
    searchBlock: {
      display: 'flex',
      maxHeight: '45px',
      borderRadius: '8px',
      backgroundColor: `${colors.primary[600]}`,
    },
    searchIcon: {
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    searchInput: {
      padding: '12px 18px',
    },
  };
});
