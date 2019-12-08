import { GET_USER, GET_USER_ERROR } from "./../actions/index";
const STATE = {
  user: null,
  error: ""
};

export default (state = STATE, action) => {
  switch (action.type) {
    case GET_USER:
      return { error: "", user: action.payload };
    case GET_USER_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
