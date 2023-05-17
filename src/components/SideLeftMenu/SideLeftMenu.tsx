import React, { DragEvent, useEffect, useMemo, useState } from 'react';
import { Box, Button, Code, Divider, Flex, Group, Navbar, Text, Title, createStyles, rem } from '@mantine/core';
import { TbDatabase, TbTable, TbHome2 } from 'react-icons/tb';
import { RootState, useAppThunkDispatch } from '../../store';
import { useSelector } from 'react-redux';
import CustomDatabaseTab from '../database/DatabaseTab';
import { connect, retrieveAllDatabase } from '../../store/mainslice';

type Props = {
  navbarWidth: number;
};

function SideLeftMenu(props: Props) {
  const { navbarWidth } = props;
  const { classes } = useStyles();
  const databases = useSelector((state: RootState) => state.databases);

  const dispatch = useAppThunkDispatch();
  const handleConnect = async () => {
    await dispatch(connect());
    await dispatch(retrieveAllDatabase());
  };

  useEffect(() => {
    handleConnect();
  }, []);

  return (
    <Navbar height='100vh' w={navbarWidth} className={classes.navbar}>
      <Navbar.Section className={classes.header} p='md'>
        <Group
          position='apart'
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Title size={25}>SQLNest</Title>
          <Code className={classes.code}>v0.1.0</Code>
        </Group>
      </Navbar.Section>

      <Navbar.Section pl='md' pr='md' sx={{ overflowY: 'auto', flex: 1, marginTop: 10 }}>
        {databases?.map(({ Database }) => (
          <CustomDatabaseTab name={Database} key={Database} />
        ))}
      </Navbar.Section>
    </Navbar>
  );
}

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
    position: 'relative',
  },
  header: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    paddingBottom: theme.spacing.md,
    borderBottom: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]}`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    position: 'sticky',
    top: 0,
    zIndex: 5,
  },
  code: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.black,
    color: theme.colorScheme === 'dark' ? theme.colors.white : theme.white,
    fontWeight: 700,
    alignItems: 'center',
    display: 'inline-flex',
    borderRadius: theme.radius.sm,
    fontSize: '.7rem',
    marginTop: '.2rem',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.black,
    width: 'fit-content',
    height: 'fit-content',
  },
}));

export default SideLeftMenu;
