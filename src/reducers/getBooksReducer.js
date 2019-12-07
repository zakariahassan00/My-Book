import { GET_BOOKS, GET_BOOKS_ERROR } from "./../actions";
const STATE = {
  data: [],
  loaded: false
};

export default (state = STATE, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return { data: action.payload, loaded: true };
    case GET_BOOKS_ERROR:
      return { ...state, loaded: false };
    default:
      return state;
  }
};
