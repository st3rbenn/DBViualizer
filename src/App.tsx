import React, { useEffect } from 'react';
import { Button, Grid } from '@mantine/core';
import SideLeftMenu from './components/SideLeftMenu/SideLeftMenu';
import { post, get } from './Service/apiService';

function App() {
  const handleConnect = async () => {
    await post('DB/db-connect', {
      host: '127.0.0.1',
      port: 3306,
      user: 'root',
      password: '',
    });
  };
  
  const handleConnect2 = async () => {
    const res = await get('DB/databases');
    console.log(res);
  };
  return (
    <Grid align='center'>
      <SideLeftMenu />
      <Button onClick={handleConnect}>
        Dashboard
      </Button>
      <Button onClick={handleConnect2}>
        Tables
      </Button>
    </Grid>
  );
}

export default App;
