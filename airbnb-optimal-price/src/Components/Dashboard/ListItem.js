import React, { useState, useEffect } from "react";
import "./ListItem.css";

//material-ui
import { Typography, Button, Grid } from "@material-ui/core";

export default function ListItem({ item }) {
  return (
    <Grid item container direction="column" justify='center'>
      <Grid item xs={12} sm={8} className="item-card">
        <Typography variant="h6">{`Room Type: ${item.room_type}`}</Typography>
        <Typography variant="h6">{`Minimum Nights: ${item.minimum_nights}`}</Typography>
        <Typography variant="h6">{`Location: ${item.location}`}</Typography>
      </Grid>
    </Grid>
  );
}
