import { GET_FAV_LIST, GET_BOOKS_ERROR } from "../actions";

const STATE = {
  data: [],
  loaded: false
};

export default (state = STATE, action) => {
  switch (action.type) {
    case GET_FAV_LIST:
      return { data: action.payload, loaded: true };
    case GET_BOOKS_ERROR:
      return { ...state, loaded: false };
    default:
      return state;
  }
};
