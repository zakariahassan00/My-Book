import axios from "axios";
const API = "https://intense-mountain-07471.herokuapp.com/api";

export const GET_BOOK = "get_book";
export const GET_BOOKS_ERROR = "get_books_error";

export const getBook = id => async dispatch => {
  const res = await axios.get(`${API}/books/${id}`);

  try {
    dispatch({
      type: GET_BOOK,
      payload: res.data
    });
  } catch (e) {
    return { type: GET_BOOKS_ERROR, payload: "" };
  }
};

export const GET_BOOKS = "get_books";

export const getBooks = (page = 1, query = "") => async dispatch => {
  const res = await axios.get(`${API}/books/all?page=${page}&search=${query}`);

  try {
    dispatch({
      type: GET_BOOKS,
      payload: res.data
    });
  } catch (e) {
    return { type: GET_BOOKS_ERROR, payload: "" };
  }
};

export const GET_USER = "get_user";
export const GET_USER_ERROR = "get_user_error";

export const getUser = () => async dispatch => {
  let token = localStorage.getItem("token");
  if (!token) return dispatch({ type: GET_USER, payload: false });

  const res = await axios.get(`${API}/users/me`, {
    headers: { "x-auth-token": token }
  });

  dispatch({
    type: GET_USER,
    payload: res.data
  });
};

export const signIn = (loginValues, callback) => async dispatch => {
  try {
    const res = await axios.post(`${API}/auth/logIn`, loginValues);

    dispatch({
      type: GET_USER,
      payload: res.data
    });

    localStorage.setItem("token", res.headers["x-auth-token"]);
    callback();
  } catch (e) {
    dispatch({
      type: GET_USER_ERROR,
      payload: "email or password is invalid"
    });
  }
};

export const signUp = (registerValues, callback) => async dispatch => {
  try {
    const res = await axios.post(`${API}/users/SignUp`, registerValues);

    dispatch({
      type: GET_USER,
      payload: res.data
    });

    localStorage.setItem("token", res.headers["x-auth-token"]);
    callback();
  } catch (e) {
    dispatch({
      type: GET_USER_ERROR,
      payload: "email or password is invalid"
    });
  }
};

export const signOut = () => {
  localStorage.removeItem("token");

  return {
    type: GET_USER,
    payload: false
  };
};
