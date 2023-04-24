import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MantineProvider, MantineTheme } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import theme from './utils/theme';

const Index = () => {
  return (
    <React.StrictMode>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <Notifications />
        <App />
      </MantineProvider>
    </React.StrictMode>
  );
};

export default Index;
