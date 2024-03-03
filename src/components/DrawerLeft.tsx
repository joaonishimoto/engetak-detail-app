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

import MenuOpen from '@mui/icons-material/MenuOpen';
import ViewInAr from '@mui/icons-material/ViewInAr';

import { partDB } from "@/db/localdb";
import Link from 'next/link';

export default function DrawerLeft() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {partDB.map((text, index) => (
          <ListItem key={text.name} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ViewInAr />
              </ListItemIcon>
              <Link key={text.id} href={`${text.name}-0`}>
                <ListItemText primary={text.name} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><MenuOpen /></Button>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
