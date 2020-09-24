import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";

const BASE_URL = "https://airbnb-bw-backend.herokuapp.com/api";

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const GET_LISTINGS_START = "GET_LISTINGS_START";
export const GET_LISTINGS_SUCCESS = "GET_LISTINGS_SUCCESS";
export const GET_LISTINGS_FAILURE = "GET_LISTINGS_FAILURE";

export const POST_LISTING_START = "POST_LISTING_START";
export const POST_LISTING_SUCCESS = "POST_LISTING_SUCCESS";
export const POST_LISTING_FAILURE = "POST_LISTING_FAILURE";

export const PUT_LISTING_START = "PUT_LISTING_START";
export const PUT_LISTING_SUCCESS = "PUT_LISTING_SUCCESS";
export const PUT_LISTING_FAILURE = "PUT_LISTING_FAILURE";

export const DELETE_LISTING_START = "DELETE_LISTING_START";
export const DELETE_LISTING_SUCCESS = "DELETE_LISTING_SUCCESS";
export const DELETE_LISTING_FAILURE = "DELETE_LISTING_FAILURE";

export const registerUser = (registerObj) => (dispatch) => {
  dispatch({ type: REGISTER_START });
  axios
    .post(`${BASE_URL}/auth/register`, registerObj)
    .then((response) => {
      //Function from App.js
      console.log(response.data);
      dispatch({ type: REGISTER_SUCCESS });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: REGISTER_FAILURE });
    });
};

export const loginUser = (loginInfo, history) => (dispatch) => {
  dispatch({ type: LOGIN_START });
  axiosWithAuth()
    .post(`${BASE_URL}/auth/login`, loginInfo)
    .then((res) => {
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      history.push("/dashboard");

      axiosWithAuth()
        .get(`${BASE_URL}/users`)
        .then((res) => {
          console.log(res.data);
          const users = res.data;
          const thisUser = users.filter(
            (user) => user.username === loginInfo.username
          );
          console.log(thisUser[0]);
          localStorage.setItem("clientId", thisUser[0].id);
          localStorage.setItem("clientName", thisUser[0].username);
          dispatch({ type: LOGIN_SUCCESS, payload: thisUser[0] });
        })
        .catch((err) => {
          console.error(err);
        });
    })
    .catch((err) => {
      console.error(err);
      dispatch({ type: LOGIN_FAILURE });
    });
};

export const postListing = (post) => (dispatch) => {
  dispatch({ type: POST_LISTING_START });
  let modifiedPost = {
    ...post,
    userId: localStorage.getItem("clientId"),
    name: localStorage.getItem("clientName"),
  };
  console.log(modifiedPost);
  axiosWithAuth()
    .post(`${BASE_URL}/listings`, modifiedPost)
    .then((res) => {
      console.log(res);
      dispatch({ type: POST_LISTING_SUCCESS });
      axiosWithAuth()
        .get(`${BASE_URL}/listings`)
        .then((res) => {
          console.log(res.data);
          const rawListings = res.data;
          console.log(rawListings);
          const userListings = rawListings.filter((list) => {
            return list.userId == localStorage.getItem("clientId");
          });
          console.log(userListings);
          dispatch({ type: GET_LISTINGS_SUCCESS, payload: userListings });
        })
        .catch((err) => {
          console.error(err);
          dispatch({ type: GET_LISTINGS_FAILURE });
        });
    })
    .catch((err) => {
      console.error(err);
    });
};

export const deleteListing = (id) => (dispatch) => {
  dispatch({ type: DELETE_LISTING_START });
  axiosWithAuth()
    .delete(`${BASE_URL}/listings/${id}`)
    .then((res) => {
      console.log(res);
      dispatch({ type: DELETE_LISTING_SUCCESS });
      axiosWithAuth()
        .get(`${BASE_URL}/listings`)
        .then((res) => {
          console.log(res.data);
          const rawListings = res.data;
          console.log(rawListings);
          const userListings = rawListings.filter((list) => {
            return list.userId == localStorage.getItem("clientId");
          });
          console.log(userListings);
          dispatch({ type: GET_LISTINGS_SUCCESS, payload: userListings });
        })
        .catch((err) => {
          console.error(err);
          dispatch({ type: GET_LISTINGS_FAILURE });
        });
    })
    .catch((err) => {
      console.error(err);
      dispatch({ type: DELETE_LISTING_FAILURE });
    });
};

export const editListing = (id, post) => (dispatch) => {
  dispatch({ type: PUT_LISTING_START });
  axiosWithAuth()
    .put(`${BASE_URL}/listings/${id}`, post)
    .then((res) => {
      console.log(res);
      dispatch({ type: PUT_LISTING_SUCCESS });
      axiosWithAuth()
        .get(`${BASE_URL}/listings`)
        .then((res) => {
          console.log(res.data);
          const rawListings = res.data;
          console.log(rawListings);
          const userListings = rawListings.filter((list) => {
            return list.userId == localStorage.getItem("clientId");
          });
          console.log(userListings);
          dispatch({ type: GET_LISTINGS_SUCCESS, payload: userListings });
        })
        .catch((err) => {
          console.error(err);
          dispatch({ type: GET_LISTINGS_FAILURE });
        });
    })
    .catch((err) => {
      console.error(err);
      dispatch({ type: PUT_LISTING_FAILURE });
    });
};

export const getListings = () => (dispatch) => {
  dispatch({ type: GET_LISTINGS_START });
  axiosWithAuth()
    .get(`${BASE_URL}/listings`)
    .then((res) => {
      console.log(res.data);
      const rawListings = res.data;
      console.log(rawListings);
      const userListings = rawListings.filter((list) => {
        return list.userId == localStorage.getItem("clientId");
      });
      console.log(userListings);
      dispatch({ type: GET_LISTINGS_SUCCESS, payload: userListings });
    })
    .catch((err) => {
      console.error(err);
      dispatch({ type: GET_LISTINGS_FAILURE });
    });
};
