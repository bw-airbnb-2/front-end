import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import axios from "axios";

import ListItem from "./ListItem";

//redux
import { connect } from "react-redux";

function Listings(props) {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("https://airbnb-bw-backend.herokuapp.com/api/listings")
      .then((res) => {
        const rawListings = res.data;
        const userListings = rawListings.filter((list) => {
          return list.id === localStorage.getItem("clientId");
        });
        setListings(userListings);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      {listings.map((list) => {
        return <ListItem key={list.id} item={list} />;
      })}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps, {})(Listings);
