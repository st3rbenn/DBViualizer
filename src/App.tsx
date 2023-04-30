import React, { useEffect } from 'react';
import { Button, Grid } from '@mantine/core';
import SideLeftMenu from './components/SideLeftMenu/SideLeftMenu';
import { post, get } from './Service/apiService';

function App() {
  const handleConnect = async () => {
    await post('DB/connect', {
      host: '127.0.0.1',
      port: 3306,
      user: 'root',
      password: '',
    });
  };

  useEffect(() => {
    handleConnect();
  }, []);

  return (
    <Grid align='center'>
      <SideLeftMenu />
    </Grid>
  );
}

export default App;
