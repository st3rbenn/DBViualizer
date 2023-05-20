import { Box, Divider, Flex, Grid, Text, createStyles } from '@mantine/core';
import React, { useEffect, useMemo, useState } from 'react';
import { TbDatabase, TbTable } from 'react-icons/tb';
import { RootState, useAppThunkDispatch } from '../../store';
import { getTablesFromDatabase, useDatabase } from '../../store/mainslice';
import { useSelector } from 'react-redux';
import Table from './Table';
import { ECurrentDatabaseSelected, ICurrentDatabaseSelected } from '../interface/Common.interface';
import useClickDetector from '../../hook/useClickAndDoubleClick';
import AnimatedBubbleText from '../animation/AnimatedBubbleText';

type CustomDatabaseTabProps = {
  name: string;
  handleSelectDatabase: (info: Partial<ICurrentDatabaseSelected>) => void;
  currentDatabaseSelected: Partial<ICurrentDatabaseSelected>[];
};

const CustomDatabaseTab = (props: CustomDatabaseTabProps) => {
  const { name, handleSelectDatabase, currentDatabaseSelected } = props;
  const { classes } = useStyles();
  const dispatch = useAppThunkDispatch();
  const animationDelay = 250;
  const [isSelect, setIsSelect] = useState(false);
  const [isCurrent, setIsCurrent] = useState(false);
  const [tables, setTables] = useState<string[]>([]);

  const currentDBInUse = useMemo(() => {
    return currentDatabaseSelected.find((item) => item.name === name);
  }, [currentDatabaseSelected]);

  useEffect(() => {
    setIsSelect(
      currentDBInUse?.isSelected === ECurrentDatabaseSelected.SELECTED ||
        currentDBInUse?.isSelected === ECurrentDatabaseSelected.SELECTED_AND_CURRENT
        ? true
        : false,
    );
    setIsCurrent(currentDBInUse?.isSelected === ECurrentDatabaseSelected.SELECTED_AND_CURRENT ? true : false);
  }, [currentDatabaseSelected, currentDBInUse]);

  const getTablesIfNeeded = async () => {
    if (!tables.length) {
      const res = await dispatch(getTablesFromDatabase(name));
      setTables(res.payload);
    }
  };

  useEffect(() => {
    if (tables.length > 0) {
      // Do something after tables state has been updated
      handleSelectDatabase({ name, isSelected: ECurrentDatabaseSelected.SELECTED, tables });
    }
  }, [tables]); // Depend on tables state, so this useEffect will run every time tables state changes

  const handleSingleClick = async () => {
    await getTablesIfNeeded();
    handleSelectDatabase({
      name,
      isSelected: isSelect ? ECurrentDatabaseSelected.NOT_SELECTED : ECurrentDatabaseSelected.SELECTED,
      tables,
    });
  };

  const handleDoubleClick = async () => {
    await getTablesIfNeeded();
    if (currentDBInUse?.isSelected === ECurrentDatabaseSelected.SELECTED) {
      //find the current selected database and set it to SELECTED_AND_CURRENT
      currentDBInUse.isSelected = ECurrentDatabaseSelected.SELECTED_AND_CURRENT;
      console.log('handleDoubleClick', currentDBInUse);
    }
    handleSelectDatabase({
      name,
      isSelected: !isCurrent ? ECurrentDatabaseSelected.SELECTED_AND_CURRENT : ECurrentDatabaseSelected.SELECTED,
      tables,
    });
  };

  const handleClick = useClickDetector({
    singleClickCallback: handleSingleClick,
    doubleClickCallback: handleDoubleClick,
  });

  return (
    <Flex
      className={classes.database}
      onClick={handleClick}
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
        <TbDatabase size={15} color='#D0CECB' style={{
          alignSelf: 'center',
        }}/>
        <Flex align='center' justify='space-between' w='100%'>
          <Text
            style={{
              fontSize: 12,
              color: '#D0CECB',
              marginLeft: 10,
            }}>
            {name}
          </Text>
          {/* {isSelect && (
            <Box pr='md'>
              <AnimatedBubbleText text='SQLNest' delay={animationDelay} />
            </Box>
          )} */}
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
          <Grid
            sx={{
              paddingBottom: '.3rem',
              paddingTop: '.3rem',
              userSelect: 'none',
            }}>
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
    paddingLeft: 10,
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

  currentDatabaseContainer: {
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 10,
    width: 230,
  },
}));

export default CustomDatabaseTab;
