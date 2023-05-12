import React from 'react';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import App from './App';
import theme from './utils/theme';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';

const Index = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <Provider store={store}>
        <Notifications />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </MantineProvider>
  );
};

export default Index;
