import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import getUserReducer from "./getUserReducer";
import getBooksReducer from "./getBooksReducer";
import getBookReducer from "./getBookReducer";

export default combineReducers({
  form: reduxForm,
  auth: getUserReducer,
  allBooks: getBooksReducer,
  book: getBookReducer
});
