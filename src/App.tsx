import React, { useEffect } from 'react';
import { Flex } from '@mantine/core';
import SideLeftMenu from './components/SideLeftMenu/SideLeftMenu';
import Header from './components/layout/Header';
import { useAppThunkDispatch } from './store';
import { connect, retrieveAllDatabase } from './store/mainslice';
import { TbDatabaseExport, TbDatabaseImport, TbHome2, TbScript, TbServer2, TbSettings } from 'react-icons/tb';

export interface ITabs {
  name: string;
  icon: JSX.Element;
}

const tabs: ITabs[] = [
  { name: 'Information', icon: <TbHome2 /> },
  { name: 'Status', icon: <TbServer2 /> },
  { name: 'SQL', icon: <TbScript /> },
  { name: 'Export', icon: <TbDatabaseExport /> },
  { name: 'Import', icon: <TbDatabaseImport /> },
  { name: 'Settings', icon: <TbSettings /> },
]

function App() {
  const dispatch = useAppThunkDispatch();
  const handleConnect = async () => {
    await dispatch(connect());
    await dispatch(retrieveAllDatabase());
  };

  useEffect(() => {
    handleConnect();
  });

  return (
    <Flex>
      <SideLeftMenu />
      <Header tabs={tabs} />
    </Flex>
  );
}

export default App;
