import { createContext, useState, useMemo } from 'react';
import { createTheme } from '@mui/material';

export const tokens = (mode: string) => ({
  ...(mode === 'dark'
    ? {
        accentBlue: {
          DEFAULT: '#1900D5',
          950: '#9B8EFF',
          900: '#8979FF',
          800: '#6550FF',
          700: '#4128FF',
          600: '#1E00FE',
          500: '#1900D5',
          400: '#12009D',
          300: '#0C0065',
          200: '#05002D',
          100: '#000000',
          50: '#000000',
        },
        lime: {
          DEFAULT: '#C1EF00',
          950: '#EEFFA8',
          900: '#EAFF93',
          800: '#E2FF6A',
          700: '#DBFF42',
          600: '#D3FF19',
          500: '#C1EF00',
          400: '#94B700',
          300: '#667F00',
          200: '#394700',
          100: '#0C0F00',
          50: '#000000',
        },
        cinnabar: {
          DEFAULT: '#E8502F',
          950: '#FADBD4',
          900: '#F8CCC2',
          800: '#F4AD9D',
          700: '#F08E78',
          600: '#EC6F54',
          500: '#E8502F',
          400: '#C93616',
          300: '#962811',
          200: '#641B0B',
          100: '#310D05',
          50: '#180603',
        },
        primary: {
          DEFAULT: '#000000',
          100: '#000000',
          200: '#000000',
          300: '#000000',
          400: '#000000',
          500: '#0F0F0F',
          600: '#232323',
          700: '#3D3D3D',
          800: '#525252',
          900: '#5C5C5C',
        },
        secondary: {
          DEFAULT: '#7C7C7C',
        },
        black: {
          DEFAULT: '#000000',
          950: '#5C5C5C',
          900: '#525252',
          800: '#3D3D3D',
          700: '#292929',
          600: '#141414',
          500: '#0F0E0E',
          400: '#000000',
          300: '#000000',
          200: '#000000',
          100: '#000000',
          50: '#000000',
        },
        mineShaft: {
          DEFAULT: '#3C3C3C',
          950: '#989898',
          900: '#8E8E8E',
          800: '#797979',
          700: '#656565',
          600: '#505050',
          500: '#3C3C3C',
          400: '#202020',
          300: '#040404',
          200: '#000000',
          100: '#000000',
          50: '#000000',
        },
        grey: {
          DEFAULT: '#7C7C7C',
          950: '#D8D8D8',
          900: '#CECECE',
          800: '#B9B9B9',
          700: '#A5A5A5',
          600: '#909090',
          500: '#7C7C7C',
          400: '#606060',
          300: '#444444',
          200: '#282828',
          100: '#0C0C0C',
          50: '#000000',
        },
        mintGreen: {
          DEFAULT: '#A9FFA7',
          950: '#FFFFFF',
          900: '#FFFFFF',
          800: '#FFFFFF',
          700: '#F9FFF9',
          600: '#D1FFD0',
          500: '#A9FFA7',
          400: '#72FF6F',
          300: '#3BFF37',
          200: '#06FE00',
          100: '#04C600',
          50: '#04AA00',
        },
        white: {
          DEFAULT: '#FFFFFF',
          100: '#F7F7F7',
        },
        accentMain: '#0F0E0E',
        borderColor: '#3C3C3C',
      }
    : {
        accentBlue: {
          DEFAULT: '#1900D5',
          50: '#9B8EFF',
          100: '#8979FF',
          200: '#6550FF',
          300: '#4128FF',
          400: '#1E00FE',
          500: '#1900D5',
          600: '#12009D',
          700: '#0C0065',
          800: '#05002D',
          900: '#000000',
          950: '#000000',
        },
        lime: {
          DEFAULT: '#C1EF00',
          50: '#EEFFA8',
          100: '#EAFF93',
          200: '#E2FF6A',
          300: '#DBFF42',
          400: '#D3FF19',
          500: '#C1EF00',
          600: '#94B700',
          700: '#667F00',
          800: '#394700',
          900: '#0C0F00',
          950: '#000000',
        },
        cinnabar: {
          DEFAULT: '#E8502F',
          50: '#FADBD4',
          100: '#F8CCC2',
          200: '#F4AD9D',
          300: '#F08E78',
          400: '#EC6F54',
          500: '#E8502F',
          600: '#C93616',
          700: '#962811',
          800: '#641B0B',
          900: '#310D05',
          950: '#180603',
        },
        black: {
          DEFAULT: '#000000',
          50: '#5C5C5C',
          100: '#525252',
          200: '#3D3D3D',
          300: '#292929',
          400: '#141414',
          500: '#0F0E0E',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
          950: '#000000',
        },
        mineShaft: {
          DEFAULT: '#3C3C3C',
          50: '#989898',
          100: '#8E8E8E',
          200: '#797979',
          300: '#656565',
          400: '#505050',
          500: '#3C3C3C',
          600: '#202020',
          700: '#040404',
          800: '#000000',
          900: '#000000',
          950: '#000000',
        },
        grey: {
          DEFAULT: '#7C7C7C',
          50: '#D8D8D8',
          100: '#CECECE',
          200: '#B9B9B9',
          300: '#A5A5A5',
          400: '#909090',
          500: '#7C7C7C',
          600: '#606060',
          700: '#444444',
          800: '#282828',
          900: '#0C0C0C',
          950: '#000000',
        },
        mintGreen: {
          DEFAULT: '#A9FFA7',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#F9FFF9',
          400: '#D1FFD0',
          500: '#A9FFA7',
          600: '#72FF6F',
          700: '#3BFF37',
          800: '#06FE00',
          900: '#04C600',
          950: '#04AA00',
        },
        white: {
          DEFAULT: '#FFFFFF',
          100: '#F7F7F7',
          200: '#D1D1D1',
        },
        primary: {
          DEFAULT: '#FFFFFF',
          600: '#F7F7F7',
        },
        secondary: {
          DEFAULT: '#7C7C7C',
        },
        accentMain: '#F7F7F7',
        borderColor: '#D1D1D1',
      }),
});

export const themeSettings: any = (mode: string) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
            primary: {
              main: colors.black.DEFAULT,
            },
            secondary: {
              main: colors.secondary.DEFAULT,
            },
            neutral: {
              dark: colors.black[500],
              light: colors.white[100],
            },
          }
        : {
            primary: {
              main: colors.white.DEFAULT,
            },
            secondary: {
              main: colors.secondary.DEFAULT,
            },
            neutral: {
              dark: colors.black[500],
              light: colors.white[100],
            },
          }),
    },
    typography: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
      fontSize: 14,
      fontWeight: 500,
      h1: {
        fontFamily: ['Poppins', 'sans-serif'].join(','),
        fontSize: 28,
        fontWeight: 600,
      },
      h2: {
        fontFamily: ['Poppins', 'sans-serif'].join(','),
        fontSize: 20,
        fontWeight: 600,
      },
      h3: {
        fontFamily: ['Poppins', 'sans-serif'].join(','),
        fontSize: 18,
        fontWeight: 600,
      },
      p: {
        fontFamily: ['Poppins', 'sans-serif'].join(','),
        fontSize: 14,
        fontWeight: 500,
      },
    },
  };
};

export const ColorModeContext: any = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState('dark');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
    }),
    []
  );
  const theme: any = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [colorMode, theme];
};
