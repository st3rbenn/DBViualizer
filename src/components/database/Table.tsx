import { Divider, Flex, Grid, Text, createStyles } from '@mantine/core';
import React from 'react';
import { TbTable } from 'react-icons/tb';

type TableProps = {
  name: string;
};

const Table = (props: TableProps) => {
  const { name } = props;
  const { classes } = useStyles();
  return (
    <Grid.Col className={classes.tableContainer}>
      <Divider labelPosition='right' className={classes.table} variant='dashed' color='#D0CECB' />
      <Flex className={classes.tableHover} onClick={() => console.log('clicked')}>
        <TbTable
          color='#D0CECB'
          style={{
            alignSelf: 'center',
          }}
        />
        <Text
          sx={{
            marginLeft: 5,
          }}
          color='#D0CECB'>
          {name}
        </Text>
      </Flex>
    </Grid.Col>
  );
};

const useStyles = createStyles((theme) => ({
  tableContainer: {
    display: 'flex',
    marginTop: '.3rem',
    padding: 0,
    paddingLeft: '.5rem',
    width: '100%',
    overflow: 'hidden',
  },
  table: {
    color: theme.colorScheme === 'dark' ? theme.colors.white : theme.white,
    cursor: 'pointer',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
    marginRight: '.5rem',
  },

  tableHover: {
    borderRadius: theme.radius.sm,
    zIndex: 2,
    '&:hover': {
      backgroundColor: 'rgba(111, 127, 172, .3)',
      paddingRight: '.2rem',
      paddingLeft: '.2rem',
    },
  },
}));

export default Table;
