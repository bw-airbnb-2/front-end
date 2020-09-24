import React, { useState, useEffect } from "react";
import { Typography, Button, Grid, TextField, Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

const useStyles = makeStyles({
  formBox: {
    border: "3px solid white",
    borderRadius: "10px",
  },
  textField: {
    border: "white",
    primary: "white",
  },
  input: {
    color: "white",
  },
});

const initialListing = {
  id: new Date(),
  userId: 1,
  name: "Chris",
  room_type: "large",
  minimum_nights: 3,
  maximum_nights: 6,
  location: "Japan",
  price: 255.99,
  accomodates: 3,
  bathrooms: 2,
  bedrooms: 2,
  beds: 3,
  guests_included: 2,
};

export default function AddListing() {
  const classes = useStyles();
  const [listing, setListing] = useState({});

  const saveListing = () => {
    axiosWithAuth(
      "https://airbnb-bw-backend.herokuapp.com/api/listings"
    ).post();
  };

  return (
    <Grid
      className={classes.formBox}
      item
      container
      alignItems="center"
      direction="column"
    >
      <Typography variant="h2">Add Listing</Typography>
      <form>
        <Grid item container alignItems="center" direction="column">
          <TextField
            className={classes.textField}
            InputProps={{ className: classes.input }}
            name="listing-name"
            label="Name"
            variant="outlined"
            required
          />
          <TextField
            className={classes.textField}
            InputProps={{ className: classes.input }}
            name="room-type"
            label="Room Type"
            variant="outlined"
            required
          />
          <TextField
            className={classes.textField}
            InputProps={{ className: classes.input }}
            name="minimum-nights"
            label="Minimum Nights"
            variant="outlined"
            required
          />
          <TextField
            className={classes.textField}
            InputProps={{ className: classes.input }}
            name="location"
            label="Location"
            variant="outlined"
            required
          />
          <Button>Optimal Price</Button>
          <Button onClick={() => saveListing()}>Save</Button>
        </Grid>
      </form>
    </Grid>
  );
}
