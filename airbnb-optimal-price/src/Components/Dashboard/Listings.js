import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import axios from "axios";

import ListItem from "./ListItem";

//redux
import { connect } from "react-redux";

//actions
import { getListings } from '../../actions/actions';


function Listings(props) {
  // const [listings, setListings] = useState([]);

  useEffect( () => {
    props.getListings()
  }, [])
  // useEffect(() => {
  //   axiosWithAuth()
  //     .get("https://airbnb-bw-backend.herokuapp.com/api/listings")
  //     .then((res) => {
  //       console.log(res)
  //       const rawListings = res.data;
  //       console.log(rawListings)
  //       const userListings = rawListings.filter((list) => {
  //         return list.userId == localStorage.getItem("clientId");
  //       });
  //       console.log(userListings)
  //       setListings(userListings);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);

  return (
    <div>
      {props.listings.map((list) => {
        return <ListItem key={list.id} item={list} />;
      })}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    listings: state.listings,

  };
}

export default connect(mapStateToProps, { getListings })(Listings);
