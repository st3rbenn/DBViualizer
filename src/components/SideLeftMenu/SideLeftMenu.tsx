import React, { useEffect, useMemo, useState } from 'react';
import { Box, Button, Code, Flex, Group, Navbar, Text, Title, createStyles, rem } from '@mantine/core';
import { TbDatabase, TbTable, TbHome2 } from 'react-icons/tb';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';
import CustomDatabaseTab from '../database/CustomDatabaseTab';

type Props = {};

function SideLeftMenu(props: Props) {
  const { classes } = useStyles();
  const [dbHover, setDbHover] = useState<boolean>(false);
  const databases = useSelector((state: RootState) => state.databases);
  const loadingDatabases = useSelector((state: RootState) => state.loadingDatabases);

  return (
    <Navbar height='100vh' w={250} p='md' className={classes.navbar}>
      <Navbar.Section className={classes.header}>
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

      <Navbar.Section w='100%'>
        {databases?.map((database: {Database: string}) => (
          <CustomDatabaseTab name={database.Database} />
        ))}
      </Navbar.Section>
    </Navbar>
  );
}

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },
  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    paddingBottom: theme.spacing.md,
    marginBottom: `calc(${theme.spacing.md} * 1.5)`,
    borderBottom: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]}`,
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
