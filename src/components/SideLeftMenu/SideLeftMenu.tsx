import React, { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Button, Code, Flex, Grid, Group, Navbar, Title, createStyles, rem } from '@mantine/core';
import { Box } from '@mantine/core';
import { get, post } from '../../Service/apiService';
import {TbDatabase, TbTable, TbHome2} from 'react-icons/tb'

type Props = {};

function SideLeftMenu(props: Props) {
  const { classes } = useStyles();
  const [data, setData] = useState<any>(null);

  const handleConnect = async () => {
    await post('DB/connect', {
      host: 'localhost',
      port: 8889,
      user: 'root',
      password: 'root',
    });
  };

  const handleConnect2 = async () => {
    const res = await get('DB/server-informations');
    console.log('RESPONSE : ', res);
  };

  const handleButton3 = async () => {
    const res = await get(`DB/tables/${data.data[1].Database}`);
  };

  return (
    <Navbar height='100vh' width={{ sm: 250 }} p='md' className={classes.navbar}>
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

      <Navbar.Section>
        <Button onClick={handleConnect2}>Hello world!</Button>
        <TbHome2 />
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
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
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
