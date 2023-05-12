import { Flex, createStyles, rem } from '@mantine/core';
import React from 'react';

type MainContainerProps = {
  children: React.ReactNode;
};

const MainContainer = (props: MainContainerProps) => {
  const { classes } = useStyles();
  return (
    <Flex className={classes.container}>{props.children}</Flex>
  );
};

const useStyles = createStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100%',
    width: '100%',
    marginRight: 0,
    marginLeft: 0,
    padding: rem(30),
    height: 'fit-content',
  },
}));

export default MainContainer;
