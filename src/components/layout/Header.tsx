import { Container, Tabs, createStyles } from '@mantine/core';
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
      <Tabs display='flex' dir='column'>
        {items}
      </Tabs>
    </Container>
  );
}

const useStyles = createStyles((theme) => ({
  container: {
    marginRight: 0,
    marginLeft: 0,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    height: 'fit-content',
    padding: 5,
  },
  tabs: {
    padding: 0,
    margin: 0,
    '&:hover': {
      borderBottom: 'none',
    },
  },
}));


export default Header;
