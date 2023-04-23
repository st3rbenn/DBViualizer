import React, { MouseEvent, useState } from 'react';
import { Button, Grid } from '@mantine/core';
import { get, post } from './Service/apiService';

function App() {
  const [data, setData] = useState([]);
  const handleClick = async (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const res = await post('DB/db-connect', {
      host: 'localhost',
      port: 8889,
      user: 'root',
      password: 'root',
    });
    console.log(res);
  };

  const handleClick2 = async (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const res = await get('DB/databases');
    setData(res.result);
  };

  const handleClick3 = async (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const res = await get('DB/disconnect');
    setData([]);
    console.log(res);
  };

  return (
    <Grid justify='center' align='center'>
      <Grid.Col span={4}>
        <Button onClick={(event) => handleClick(event)}>Connect MySQL</Button>
      </Grid.Col>
      <Grid.Col span={4}>
        <Button onClick={(event) => handleClick2(event)}>Show Database</Button>
      </Grid.Col>
      <Grid.Col span={4}>
        <Button onClick={(event) => handleClick3(event)} bg='red'>
          disconnect
        </Button>
      </Grid.Col>
      {data?.map((item: any, index: number) => (
        <Grid.Col span={4} key={index}>
          <p>{item.Database}</p>
        </Grid.Col>
      ))}
    </Grid>
  );
}

export default App;
