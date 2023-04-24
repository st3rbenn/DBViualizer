import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Code, Group, Navbar, Title, createStyles } from '@mantine/core';

type Props = {};

function SideLeftMenu(props: Props) {
  const {} = props;
  const { classes } = useStyles();

  return (
    <Navbar
      height="100vh"
      width={{ sm: 300 }}
      p="md"
      className={classes.navbar}
    >
      <Navbar.Section className={classes.header}>
        <Group style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <Title size={25}>
            SQLNest
          </Title>
          <Code className={classes.code}>v0.1.0</Code>
        </Group>
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
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[2]
    }`
  },
  code: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.black,
    color: theme.colorScheme === 'dark' ? theme.colors.white : theme.white,
    fontWeight: 700,
    alignItems: 'center',
    display: 'inline-flex',
    borderRadius: theme.radius.sm,
    fontSize: theme.fontSizes.xs,
    marginTop: '.2rem',
  }
}));

export default SideLeftMenu;
