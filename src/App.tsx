import React, { DragEvent, useCallback, useEffect, useRef, useState } from 'react';
import { Divider, Flex, Paper, createStyles } from '@mantine/core';
import SideLeftMenu from './components/SideLeftMenu/SideLeftMenu';
import Header from './components/header/Header';
import { useAppThunkDispatch } from './store';
import { connect, retrieveAllDatabase } from './store/mainslice';
import { TbDatabaseExport, TbDatabaseImport, TbHome2, TbScript, TbServer2, TbSettings } from 'react-icons/tb';
import { Tabs } from '@mantine/core';
import { Outlet, Route, Routes } from 'react-router-dom';
import InformationView from './view/InformationView';
import CustomGrabResizer from './components/common/CustomGrabResizer';

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
  const { classes } = useStyles();
  const [navbarWidth, setNavbarWidth] = useState(300);

  return (
    <Paper
      style={{
        display: 'flex',
        height: '100vh',
      }}>
      <SideLeftMenu navbarWidth={navbarWidth} />
      <CustomGrabResizer navbarWidth={navbarWidth} setNavbarWidth={setNavbarWidth} />
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

const useStyles = createStyles((theme) => ({}));

export default App;
