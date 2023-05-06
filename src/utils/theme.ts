import { MantineTheme } from '@mantine/core';

const dark = [
  '#8091C1',
  '#6F7FAC',
  '#5E6D97',
  '#4C5B82',
  '#3B4A6D',
  '#23314F',
  '#1C2F4C',
  '#101B38',
  '#000820',
];
const white = ['#FDF6E3'];

const theme: Partial<MantineTheme> = {
  colorScheme: 'dark',
  colors: {
    //@ts-ignore
    dark,
    //@ts-ignore
    white,
  },
  components: {
    Paper: {
      styles: {
        root: {
          minHeight: '100vh',
        },
      },
    },
    Button: {
      styles: {
        root: {
          backgroundColor: '#144272',
        },
      },
    },
    Title: {
      styles: {
        root: {
          color: '#D0CECB',
        },
      },
    },
  },
};

export default theme;
