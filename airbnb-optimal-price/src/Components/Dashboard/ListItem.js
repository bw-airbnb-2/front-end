import React, { useState, useEffect } from "react";
import "./ListItem.css";

//material-ui
import { Typography, Button, Grid } from "@material-ui/core";

//redux
import { connect } from "react-redux";

//actions
import { deleteListing } from '../../actions/actions';


function ListItem(props) {
  return (
    <Grid item container direction="column" justify='center'>
      <Grid item xs={12} sm={8} className="item-card">
        <Typography variant="h6">{`Room Type: ${props.item.room_type}`}</Typography>
        <Typography variant="h6">{`Minimum Nights: ${props.item.minimum_nights}`}</Typography>
        <Typography variant="h6">{`Location: ${props.item.location}`}</Typography>
        <Button>Edit</Button>
        <Button onClick={ () => props.deleteListing(props.item.id)} > Delete </Button>
      </Grid>
    </Grid>
  );
}

function mapStateToProps(state, ownProps) {
    const { item } = ownProps;
    return {
        item: item,
    }
}
  
  export default connect(mapStateToProps, { deleteListing })(ListItem);