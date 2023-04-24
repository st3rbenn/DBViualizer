import { Stack } from '@mantine/core'
import React from 'react'

type Props = {
  children?: React.ReactNode;
}

const DrawerLayout = (props: Props) => {
  const {} = props
  return (
    <Stack bg="red">{props.children}</Stack>
  )
}

export default DrawerLayout