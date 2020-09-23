<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React, { useState, useEffect } from "react";
>>>>>>> c8bf888fe8a0594b8ce014a3441e872acef33a08

//components
import AddListing from './AddListing';


//material UI
import { AppBar, Toolbar, Typography, Button, Grid } from "@material-ui/core";

export default function Dashboard(props) {
  return (
    <Grid container>
      <Grid item xs={false} sm={2} />
      <Grid item container xs={12} sm={8} justify='center'>
        <Typography variant='h1'>Dashboard</Typography>
        <AddListing />
      </Grid>
      <Grid item xs={false} sm={2} />
    </Grid>
  );
}
