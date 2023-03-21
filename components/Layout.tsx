import NavBar from './NavBar';
import React, { ReactNode } from 'react';
import Stack from '@mui/material/Stack';
import Notify from './Notify';

export default function Layout({ children }: { children: ReactNode }) {
  return ( 
    <Stack>
      <NavBar />
      <Notify />
      {children}
    </Stack>
  )
} 
