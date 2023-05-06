import { Flex, Text, createStyles } from '@mantine/core';
import React from 'react';
import { TbDatabase } from 'react-icons/tb';

type CustomDatabaseTabProps = {
  name: string;
};

const CustomDatabaseTab = (props: CustomDatabaseTabProps) => {
  const { name } = props;
  const { classes } = useStyles();
  return (
    <Flex className={classes.database}>
      <TbDatabase size={20} color='#D0CECB' />
      <Text
        style={{
          fontSize: 12,
          color: '#D0CECB',
          marginLeft: 10,
        }}>
        {name}
      </Text>
    </Flex>
  );
};

const useStyles = createStyles((theme) => ({
  database: {
    color: theme.colorScheme === 'dark' ? theme.colors.white : theme.white,
    fontWeight: 700,
    alignItems: 'center',
    display: 'inline-flex',
    borderRadius: theme.radius.sm,
    fontSize: '.7rem',
    padding: '.2rem .5rem',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.black,
    },
  },
}));

export default CustomDatabaseTab;
