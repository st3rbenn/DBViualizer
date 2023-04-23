import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MantineProvider, MantineTheme } from '@mantine/core';

const theme: Partial<MantineTheme> = {
  colorScheme: 'dark',
  components: {
    Button: {
      styles: {
        root: {
          backgroundColor: '#144272',
          ':hover': {
            backgroundColor: '#0A2647',
          },
        },
      },
    },
  },
};

const Index = () => {
  return (
    <React.StrictMode>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <App />
      </MantineProvider>
    </React.StrictMode>
  );
};

export default Index;
