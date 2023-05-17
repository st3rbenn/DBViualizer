import { Flex, createStyles } from '@mantine/core';
import React from 'react';

type _BlankProps = {};

const _Blank = (props: _BlankProps) => {
  const {} = props;
  const { classes } = useStyles();
  return <Flex>_blank</Flex>;
};

const useStyles = createStyles((theme) => ({}));

export default _Blank;
