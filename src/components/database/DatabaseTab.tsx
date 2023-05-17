import { Box, Divider, Flex, Grid, Text, createStyles } from '@mantine/core';
import React, { useEffect } from 'react';
import { TbDatabase, TbTable } from 'react-icons/tb';
import { RootState, useAppThunkDispatch } from '../../store';
import { useDatabase } from '../../store/mainslice';
import { useSelector } from 'react-redux';
import Table from './Table';

type CustomDatabaseTabProps = {
  name: string;
};

const CustomDatabaseTab = (props: CustomDatabaseTabProps) => {
  const { name } = props;
  const { classes } = useStyles();
  const dispatch = useAppThunkDispatch();
  const currentDatabaseInUse = useSelector((state: RootState) => state.currentDatabase);
  const tables = useSelector((state: RootState) => state.tables);

  const isSelect = currentDatabaseInUse === name;

  const handleSelectDatabase = async () => {
    await dispatch(useDatabase(name));
  };

  return (
    <Flex
      className={classes.database}
      onClick={handleSelectDatabase}
      style={{
        backgroundColor: isSelect ? 'rgba(59, 74, 109, .3)' : '',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,
      }}>
      <Flex
        style={{
          flexDirection: 'row',
        }}>
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
      {isSelect && (
        <Flex className={classes.currentDatabaseContainer}>
          <Divider
            variant='dashed'
            orientation='vertical'
            color='#D0CECB'
            sx={{
              width: 1,
              marginLeft: 10,
            }}
          />
          <Grid
            sx={{
              paddingBottom: '.3rem',
              paddingTop: '.3rem',
            }}>
            {tables?.map((table, _) => (
              <Table name={table} key={_} />
            ))}
          </Grid>
        </Flex>
      )}
    </Flex>
  );
};

const useStyles = createStyles((theme) => ({
  database: {
    color: theme.colorScheme === 'dark' ? theme.colors.white : theme.white,
    fontWeight: 700,
    flexDirection: 'column',
    borderRadius: theme.radius.sm,
    fontSize: '.7rem',
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.black,
    },
    marginTop: 5,
    marginBottom: 5,
  },

  currentDatabaseContainer: {
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 10,
    width: 230,
  },
}));

export default CustomDatabaseTab;
