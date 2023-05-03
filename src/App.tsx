import React, { useEffect } from 'react';
import { Grid } from '@mantine/core';
import SideLeftMenu from './components/SideLeftMenu/SideLeftMenu';
import { post } from './Service/apiService';
import Header from './components/layout/Header';

const tabs = ['Information', 'Tables', 'Views', 'Procedures', 'Functions'];

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
    <Grid>
      <SideLeftMenu />
      <Header tabs={tabs} 
      />
    </Grid>
  );
}

export default App;
