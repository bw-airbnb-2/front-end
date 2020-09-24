import React, { useState, useEffect } from 'react';
//components
import AddListing from './AddListing';
import  Listings from './Listings';

//material UI
import { AppBar, Toolbar, Typography, Button, Grid } from "@material-ui/core";

export default function Dashboard(props) {
  return (
    <Grid container>
      <Grid item xs={false} sm={2} />
      <Grid item container xs={12} sm={8} direction='column' justify='center'>
        <Typography variant='h1'>Dashboard</Typography>
        <AddListing />
        <Listings />
      </Grid>
      <Grid item xs={false} sm={2} />
    </Grid>
  );
}
