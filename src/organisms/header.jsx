import React from 'react';

import Grid from '@mui/material/Unstable_Grid2';
import { Avatar, Paper, IconButton } from '@mui/material';
import { PeopleOutlineOutlined, NotificationsNoneOutlined, SearchOutlined } from '@mui/icons-material';

const ICON_STYLES = { color: '#9CA3AF' };

function Header() {
  return (
    <Paper elevation={3}>
      <Grid container sx={{display:'flex', justifyContent:"space-between", alignItems: "center"}} >
        <Grid item>
          <IconButton>
            <SearchOutlined sx={ICON_STYLES} />
          </IconButton>
        </Grid>
        <Grid item >
          <IconButton>
            <PeopleOutlineOutlined sx={ICON_STYLES} />
          </IconButton>
          <IconButton>
            <NotificationsNoneOutlined sx={ICON_STYLES} />
          </IconButton>
          <IconButton>
            <Avatar src="https://cdn.pixabay.com/photo/2021/09/20/23/03/car-6642036_1280.jpg" />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Header;
