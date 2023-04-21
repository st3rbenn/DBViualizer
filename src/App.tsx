import React, { MouseEvent } from 'react';
import { Button, Grid } from '@mantine/core';
import { get, post } from './Service/apiService';

function App() {
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
    </Grid>
  );
}

export default App;
