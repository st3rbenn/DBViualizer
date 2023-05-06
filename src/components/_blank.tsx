import { createStyles } from '@mantine/core';
import React from 'react';

type Props = {};

const _blank = (props: Props) => {
  const { classes } = useStyles();
  return <div>_blank</div>;
};

const useStyles = createStyles((theme) => ({}));

export default _blank;
