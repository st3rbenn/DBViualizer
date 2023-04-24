import React, { MouseEvent, useState } from 'react';
import { Box, Button, Grid } from '@mantine/core';
import { get, post } from './Service/apiService';
import SideLeftMenu from './components/SideLeftMenu/SideLeftMenu';
import { MantineTheme } from '@mantine/core';

function App() {

  return (
    <Grid align='center'>
      <SideLeftMenu />
    </Grid>
  );
}

export default App;
