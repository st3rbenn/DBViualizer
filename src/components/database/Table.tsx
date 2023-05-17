import { Divider, Flex, Grid, Text, createStyles, Tooltip } from '@mantine/core';
import React from 'react';
import { TbTable } from 'react-icons/tb';

type TableProps = {
  name: string;
};

const Table = (props: TableProps) => {
  const { name } = props;
  const { classes } = useStyles();

  //check if text is too long and add tooltip

  return (
    <Tooltip
      label={name}
      position="top-start"
      withArrow
      zIndex={5}
      sx={{
        fontSize: '.5rem',
      }}
      openDelay={700}
      closeDelay={300}
      transitionProps={{
        duration: 0.2,
      }}
      >
      <Grid.Col className={classes.tableContainer}>
        <Flex onClick={() => console.log('clicked')}>
          <TbTable
            color='#D0CECB'
            style={{
              alignSelf: 'center',
            }}
            width={15}
            height={15}
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
    </Tooltip>
  );
};

const useStyles = createStyles((theme) => ({
  tableContainer: {
    display: 'flex',
    marginTop: '.3rem',
    padding: 0,
    paddingLeft: '.5rem',
    width: '100%',
    marginLeft: '.5rem',
    '&:hover': {
      backgroundColor: 'rgba(111, 127, 172, .3)',
      marginLeft: '.8rem',
      borderRadius: theme.radius.sm,
    },
  },
  table: {
    color: theme.colorScheme === 'dark' ? theme.colors.white : theme.white,
    cursor: 'pointer',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '.5rem',
  },
}));

export default Table;
