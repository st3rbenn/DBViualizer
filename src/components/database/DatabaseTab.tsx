import { Box, Divider, Flex, Grid, Text, createStyles } from '@mantine/core';
import React, { MouseEvent, MouseEventHandler, useMemo, useState } from 'react';
import { TbDatabase } from 'react-icons/tb';
import { useAppThunkDispatch } from '../../store';
import { getTablesFromDatabase, useDatabase } from '../../store/mainslice';
import Table from './Table';
import { ECurrentDatabaseSelected, ICurrentDatabaseSelected } from '../interface/Common.interface';
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from 'react-icons/md';

type CustomDatabaseTabProps = {
  name: string;
  handleSelectDatabase: (info: Partial<ICurrentDatabaseSelected>) => void;
  currentDatabaseSelected: Partial<ICurrentDatabaseSelected>[];
};

const CustomDatabaseTab = (props: CustomDatabaseTabProps) => {
  const { name, handleSelectDatabase, currentDatabaseSelected } = props;
  const { classes } = useStyles();
  const dispatch = useAppThunkDispatch();
  const [isSelect, setIsSelect] = useState(false);
  const [tables, setTables] = useState<string[]>([]);

  const currentDBInUse = useMemo(() => {
    return currentDatabaseSelected.find((item) => item.name === name);
  }, [currentDatabaseSelected, name]);

  const getTablesIfNeeded = async () => {
    try {
      if (!tables.length) {
        const res = await dispatch(getTablesFromDatabase(name));
        setTables(res.payload);
        return res;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickSelectDatabase = async (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    try {
      const allTables = await getTablesIfNeeded();
      await dispatch(useDatabase(name))
      handleSelectDatabase({
        name,
        isSelected: ECurrentDatabaseSelected.SELECTED_AND_CURRENT,
        tables: allTables !== undefined ? allTables.payload : tables,
      });
      setIsSelect(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleArrowClick = async (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    try {
      const allTables = await getTablesIfNeeded();
      handleSelectDatabase({
        name,
        isSelected: isSelect ? ECurrentDatabaseSelected.NOT_SELECTED : ECurrentDatabaseSelected.SELECTED,
        tables: allTables !== undefined ? allTables.payload : tables,
        isArrowClicked: true,
      });
      setIsSelect(!isSelect);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Flex
      className={classes.database}
      onClick={handleClickSelectDatabase}
      style={{
        backgroundColor:
          currentDBInUse?.isSelected === ECurrentDatabaseSelected?.SELECTED
            ? 'rgba(59, 74, 109, .3)'
            : currentDBInUse?.isSelected === ECurrentDatabaseSelected?.SELECTED_AND_CURRENT
            ? 'rgba(59, 74, 109, .7)'
            : '',
      }}>
      <Flex
        style={{
          flexDirection: 'row',
        }}>
        <Box className={classes.expendArrowContainer} onClick={handleArrowClick}>
          {isSelect ? (
            <MdKeyboardArrowDown size={15} color='#D0CECB' />
          ) : (
            <MdKeyboardArrowRight size={15} color='#D0CECB' />
          )}
        </Box>
        <TbDatabase
          size={15}
          color='#D0CECB'
          style={{
            alignSelf: 'center',
          }}
        />
        <Flex align='center' justify='space-between' w='100%'>
          <Text className={classes.databaseName}>{name}</Text>
        </Flex>
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
          <Grid className={classes.tableContainer}>
            {currentDBInUse?.tables?.map((table, _) => (
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
    paddingTop: '.3rem',
    paddingBottom: '.3rem',
    cursor: 'pointer',
    marginTop: 5,
    marginBottom: 5,
    overflow: 'hidden',
    position: 'relative',
    zIndex: 1,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.black,
    },
  },

  databaseName: {
    fontSize: 12,
    color: '#D0CECB',
    marginLeft: 10,
  },

  currentDatabaseContainer: {
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 10,
    paddingLeft: 21,
    width: 230,
  },

  tableContainer: {
    paddingBottom: '.3rem',
    paddingTop: '.3rem',
    userSelect: 'none',
  },

  expendArrowContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
    marginLeft: 5,
    borderRadius: theme.radius.sm,
    position: 'relative',
    zIndex: 1,

    '&:hover': {
      backgroundColor: theme.colors.dark[3],
    },
  },
}));

export default CustomDatabaseTab;
