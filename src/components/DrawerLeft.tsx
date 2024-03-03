'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import ViewInAr from '@mui/icons-material/ViewInAr';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

import { partDB } from "@/db/localdb";

import Link from 'next/link';

import '@/app/globals.css'






export default function DrawerLeft() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box 
      sx={{ width: 300 }} 
      role="presentation" 
      onClick={toggleDrawer(false)}
    >
      <List className='' >
        {partDB.map((part, index) => (
          <Link
            key={part.id}
            href={`/home/checklist/${part.name}`} 
          >
            <ListItem 
              key={part.name} 
              disablePadding 
              className='text-teal-700'
            >
              <ListItemButton>
                <ListItemIcon className='text-teal-800 -mr-4'>
                  <RadioButtonUncheckedOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary={part.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
    </Box>
  );





  return (
    <div className='size-16 flex items-center justify-center'>
      <Button 
        onClick={toggleDrawer(true)} 
        className='group hover:bg-teal-100' 
      >
        <ArrowCircleLeftIcon 
          className='group-hover:text-teal-900 text-teal-700 size-12'
        />
      </Button>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
