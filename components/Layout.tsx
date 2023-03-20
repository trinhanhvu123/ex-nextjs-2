import NavBar from './NavBar';
import React, { ReactNode } from 'react';
import Stack from '@mui/material/Stack';

export default function Layout({ children }: { children: ReactNode }) {
  return ( 
    <Stack>
      <NavBar />
      {children}
    </Stack>
  )
} 
