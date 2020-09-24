import React, { useState, useEffect } from "react";
import { Typography, Button, Grid, TextField, Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

//redux
import { connect } from "react-redux";

//actions

import { postListing } from '../../actions/actions'

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
  userId: 0,
  name: "",
  room_type: "",
  location: "",
  price: 100,
  accomodates: 1,
  bathrooms: 1,
  bedrooms: 1,
  beds: 1,
  guests_included: 1,
  minimum_nights: 0,
  maximum_nights: 4,
};

function AddListing(props) {
  const classes = useStyles();
  const [listing, setListing] = useState(initialListing);

  // useEffect(() => {
  //   console.log(props);
  //   console.log(props.user);
  //   console.log(props.user.id);
  //   setListing({
  //     ...listing,
  //     userId: props.user.id,
  //   });
  //   console.log(listing);
  // }, []);

  const saveListing = (e) => {
    e.preventDefault();
    props.postListing(listing);
    // console.log(props)
    // let post = {
    //   ...listing,
    //   userId: props.user.id,
    //   name: props.user.name
    // }
    // console.log(post)
    // axiosWithAuth()
    //   .post("https://airbnb-bw-backend.herokuapp.com/api/listings", post)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  };

  const handleChange = (e) => {
    setListing({
      ...listing,
      [e.target.name]: e.target.value,
    });
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
      <form onSubmit={saveListing}>
        <Grid item container alignItems="center" direction="column">
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

function mapStateToProps(state) {
  return {
    user: {...state.user}
  };
}

export default connect(mapStateToProps, { postListing })(AddListing);
