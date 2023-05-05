import { Container, Tabs, createStyles, rem } from '@mantine/core';
import React from 'react';

type HeaderProps = {
  tabs: string[];
};

function Header(props: HeaderProps) {
  const { tabs } = props;
  const { classes } = useStyles();

  const items = tabs.map((tab) => (
    <Tabs.Tab value={tab} key={tab} className={classes.tabs}>
      {tab}
    </Tabs.Tab>
  ));

  return (
    <Container className={classes.container}>
      <Tabs display='flex' dir='column' defaultValue='Information'>
        {items}
      </Tabs>
    </Container>
  );
}

const useStyles = createStyles((theme) => ({
  tabs: {
    margin: 0,
    padding: theme.spacing.md,
    paddingTop: rem(24.27),
    paddingBottom: rem(24.27),
    '&:hover': {
    },
    '&:active': {
      borderBottom: 'none',
    },
  },
  container: {
    maxWidth: '100%',
    width: '100%',
    marginRight: 0,
    marginLeft: 0,
    padding: 0,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    height: 'fit-content',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    borderBottom: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]}`,
  },
}));

export default Header;
