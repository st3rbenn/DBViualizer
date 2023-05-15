import React, { useEffect } from 'react';
import { Flex, Paper } from '@mantine/core';
import SideLeftMenu from './components/SideLeftMenu/SideLeftMenu';
import Header from './components/header/Header';
import { useAppThunkDispatch } from './store';
import { connect, retrieveAllDatabase } from './store/mainslice';
import { TbDatabaseExport, TbDatabaseImport, TbHome2, TbScript, TbServer2, TbSettings } from 'react-icons/tb';
import { Tabs } from '@mantine/core';
import { Outlet, Route, Routes } from 'react-router-dom';
import InformationView from './view/InformationView';

export interface ITabs {
  name: string;
  icon: JSX.Element;
}

const tabs: ITabs[] = [
  { name: 'Information', icon: <TbHome2 color='#D0CECB' /> },
  { name: 'Status', icon: <TbServer2 color='#D0CECB' /> },
  { name: 'SQL', icon: <TbScript color='#D0CECB' /> },
  { name: 'Export', icon: <TbDatabaseExport color='#D0CECB' /> },
  { name: 'Import', icon: <TbDatabaseImport color='#D0CECB' /> },
  { name: 'Settings', icon: <TbSettings color='#D0CECB' /> },
];

function App() {
  return (
    <Paper
      style={{
        display: 'flex',
        height: '100vh',
        width: '100vw',
      }}>
      <SideLeftMenu />
      <Flex direction='column' style={{ width: '100%', height: '100%', position: 'relative', zIndex: 100 }}>
        <Header tabs={tabs} />
        <Routes>
          <Route path='/' element={<Flex>Home</Flex>} index />
          <Route path='information' element={<InformationView />} />
        </Routes>
      </Flex>
    </Paper>
  );
}

export default App;
