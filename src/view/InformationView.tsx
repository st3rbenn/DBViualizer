import { Flex, createStyles } from '@mantine/core';
import React from 'react';
import MainContainer from '../components/layout/MainContainer';

type InformationViewProps = {};

const InformationView = (props: InformationViewProps) => {
  const {} = props;
  const { classes } = useStyles();
  return <MainContainer>Information</MainContainer>;
};

const useStyles = createStyles((theme) => ({}));

export default InformationView;
