import React, { useState, useEffect } from "react";
import "./ListItem.css";

//redux
import { connect } from "react-redux";

//actions
import { deleteListing } from "../../actions/actions";

//material-ui
import { Typography, Button, Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

function ListItem(props) {
  const classes = useStyles();
  const [edit, setEdit] = useState(false);

  return (
    <Grid item container direction="column" justify="center">
      {edit === false ? (
        <Grid item xs={12} sm={8} className="item-card">
          <Typography variant="h6">{`Room Type: ${props.item.room_type}`}</Typography>
          <Typography variant="h6">{`Minimum Nights: ${props.item.minimum_nights}`}</Typography>
          <Typography variant="h6">{`Location: ${props.item.location}`}</Typography>
          <Button onClick={() => setEdit(true)}>Edit</Button>
          <Button onClick={() => props.deleteListing(props.item.id)}>Delete</Button>
        </Grid>
      ) : (
        <form>
          <Grid item container alignItems="center" direction="column">
            <TextField
              className={classes.textField}
              InputProps={{ className: classes.input }}
              name="room_type"
              label="Room Type"
              variant="outlined"
              required
              // value={listing.room_type}
              // onChange={handleChange}
            />
            <TextField
              className={classes.textField}
              InputProps={{ className: classes.input }}
              name="minimum_nights"
              label="Minimum Nights"
              variant="outlined"
              required
              // value={listing.minimum_nights}
              // onChange={handleChange}
            />
            <TextField
              className={classes.textField}
              InputProps={{ className: classes.input }}
              name="location"
              label="Location"
              variant="outlined"
              required
              // value={listing.location}
              // onChange={handleChange}
            />
            <Button onClick={ () => setEdit(false) }>Cancel</Button>
            <Button>Optimal Price</Button>
            <Button type="submit">Save</Button>
          </Grid>
        </form>
      )}
    </Grid>
  );
}

function mapStateToProps(state, ownProps) {
  const { item } = ownProps;
  return {
    item: item,
  };
}

export default connect(mapStateToProps, { deleteListing })(ListItem);
