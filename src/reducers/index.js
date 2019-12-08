import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import getUserReducer from "./getUserReducer";
import getBooksReducer from "./getBooksReducer";
import getBookReducer from "./getBookReducer";
import getFavListReducer from "./getFavListReducer";
import getReadListReducer from "./getReadListReducer";
import getReadingListReducer from "./getReadingListReducer";

export default combineReducers({
  form: reduxForm,
  auth: getUserReducer,
  allBooks: getBooksReducer,
  book: getBookReducer,
  userFavList: getFavListReducer,
  userReadList: getReadListReducer,
  userReadingList: getReadingListReducer
});
