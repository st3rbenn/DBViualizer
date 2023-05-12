import { createStyles } from '@mantine/core';
import React from 'react';

type _BlankProps = {};

const _Blank = (props: _BlankProps) => {
  const { classes } = useStyles();
  return <div>_blank</div>;
};

const useStyles = createStyles((theme) => ({}));

export default _Blank;
