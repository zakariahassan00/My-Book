import { GET_READING_LIST, GET_BOOKS_ERROR } from "../actions";

const STATE = {
  data: [],
  loaded: false
};

export default (state = STATE, action) => {
  switch (action.type) {
    case GET_READING_LIST:
      return { ...state, loaded: true, reading: action.payload };
    case GET_BOOKS_ERROR:
      return { ...state, loaded: false };
    default:
      return state;
  }
};
