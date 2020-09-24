import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_LISTINGS_START,
  GET_LISTINGS_SUCCESS,
  GET_LISTINGS_FAILURE,
  POST_LISTING_START,
  POST_LISTING_SUCCESS,
  POST_LISTING_FAILURE,
  PUT_LISTING_START,
  PUT_LISTING_SUCCESS,
  PUT_LISTING_FAILURE,
  DELETE_LISTING_START,
  DELETE_LISTING_SUCCESS,
  DELETE_LISTING_FAILURE,
} from "../actions/actions";

export const initialState = {
  user: {},
  error: "",
  isLoggedIn: false,
  isRegistering: false,
  isLoggingIn: false,
  isGettingListings: false,
  isPostingListing: false,
  isPuttingListing: false,
  isDeleteingListing: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_START:
      return {
        ...state,
        isRegistering: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isRegistering: false
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        error: 'register failed'
      };
    case LOGIN_START:
      return {
        ...state,
        isLoggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isLoggingIn: false
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: 'login failed',
        isLoggingIn: false
      };
    case GET_LISTINGS_START:
      return {
        ...state,
        isGettingListings: true,
      };
    case GET_LISTINGS_SUCCESS:
      return {
        ...state,
        listings: action.payload,
        isGettingListings: false,

      };
    case GET_LISTINGS_FAILURE:
      return {
        ...state,
        isGettingListings: false,
        error: 'get listings failed'
      };
    case POST_LISTING_START:
      return {
        ...state,
        isPostingListing: true
      };
    case POST_LISTING_SUCCESS:
      return {
        ...state,
        isPostingListing: false
      };
    case POST_LISTING_FAILURE:
      return {
        ...state,
        isPostingListing: false,
        error: 'post listing failed'
      };
    case PUT_LISTING_START:
      return {
        ...state,
        isPuttingListing: true
      };
    case PUT_LISTING_SUCCESS:
      return {
        ...state,
        isPuttingListing: false
      };
    case PUT_LISTING_FAILURE:
      return {
        ...state,
        isPuttingListing: false,
        error: 'put listing failed'
      };
    case DELETE_LISTING_START:
      return {
        ...state,
        isDeleteingListing: true
      };
    case DELETE_LISTING_SUCCESS:
      return {
        ...state,
        isDeleteingListing: false
      };
    case DELETE_LISTING_FAILURE:
      return {
        ...state,
        isDeleteingListing: false,
        error: 'delete listing failed'
      };
    default:
      return { ...state };
  }
};
