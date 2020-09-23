import { axiosWithAuth } from "../utils/axiosWithAuth";

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

export const registerUser = () => (dispatch) => {
  dispatch({ type: REGISTER_START });
  axiosWithAuth()
    .post(
      "https://airbnb-bw-backend.herokuapp.com/api/auth/register",
      registerObj
    )
    .then((response) => {
      //Function from App.js
      console.log(response.data);
      history.push("/log-in");
    })
    .catch((err) => {
      console.log(err);
    });
};
