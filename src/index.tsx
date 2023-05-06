import React from 'react';
import { MantineProvider, Paper } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import App from './App';
import theme from './utils/theme';
import { Provider } from 'react-redux';
import { store } from './store';

const Index = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <Provider store={store}>
        <Notifications />
        <Paper>
          <App />
        </Paper>
      </Provider>
    </MantineProvider>
  );
};

export default Index;
