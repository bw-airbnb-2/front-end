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
  id: 0,
  userId: 0,
  name: "",
  room_type: "",
  minimum_nights: 0,
  maximum_nights: 0,
  location: "",
  price: 0,
  accomodates: 0,
  bathrooms: 0,
  bedrooms: 0,
  beds: 0,
  guests_included: 0,
};

export default function AddListing() {
  const classes = useStyles();
  const [listing, setListing] = useState(initialListing);

  const saveListing = (e) => {
    e.preventDefault();
    axiosWithAuth().post(
      "https://airbnb-bw-backend.herokuapp.com/api/listings",
      listing
    );
  };

  const handleChange = (e) => {
    setListing({
      ...listing,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Grid
      className={classes.formBox}
      item
      container
      alignItems="center"
      direction="column"
    >
      <Typography variant="h2">Add Listing</Typography>
      <form onSubmit={saveListing}>
        <Grid item container alignItems="center" direction="column">
          <TextField
            className={classes.textField}
            InputProps={{ className: classes.input }}
            name="name"
            label="Name"
            variant="outlined"
            required
            value={listing.name}
            onChange={handleChange}
          />
          <TextField
            className={classes.textField}
            InputProps={{ className: classes.input }}
            name="room_type"
            label="Room Type"
            variant="outlined"
            required
            value={listing.room_type}
            onChange={handleChange}

          />
          <TextField
            className={classes.textField}
            InputProps={{ className: classes.input }}
            name="minimum_nights"
            label="Minimum Nights"
            variant="outlined"
            required
            value={listing.minimum_nights}
            onChange={handleChange}

          />
          <TextField
            className={classes.textField}
            InputProps={{ className: classes.input }}
            name="location"
            label="Location"
            variant="outlined"
            required
            value={listing.location}
            onChange={handleChange}
          />
          <Button>Optimal Price</Button>
          <Button type="submit">Save</Button>
        </Grid>
      </form>
    </Grid>
  );
}
