import React, { useEffect } from 'react';
import { Box, Flex, Grid } from '@mantine/core';
import SideLeftMenu from './components/SideLeftMenu/SideLeftMenu';
import { post } from './Service/apiService';
import Header from './components/layout/Header';
import DatabaseService from './Service/DatabaseService';

const tabs = ['Information', 'Tables', 'Views', 'Procedures', 'Functions'];

function App() {
  const handleConnect = async () => {
    const credentials = {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT as unknown as number,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
    }
    await DatabaseService.connect(credentials);
  };

  useEffect(() => {
    handleConnect();
  }, []);

  return (
    <Flex>
      <SideLeftMenu />
      <Header tabs={tabs} />
    </Flex>
  );
}

export default App;
