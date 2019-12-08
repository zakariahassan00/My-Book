import axios from "axios";
const API = "https://intense-mountain-07471.herokuapp.com/api";
let token = localStorage.getItem("token");

export const GET_BOOK = "get_book";
export const GET_BOOKS_ERROR = "get_books_error";

export const fetchingData = () => {
  return { type: GET_BOOKS_ERROR, payload: "" };
};

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

// ================> User Actions
export const GET_FAV_LIST = "get_favorites_list";
export const GET_READ_LIST = "get_read_list";
export const GET_READING_LIST = "get_reading_list";

export const getFavoritesList = () => async dispatch => {
  const res = await axios.get(`${API}/books/me/favList`, {
    headers: { "x-auth-token": token }
  });

  dispatch({ type: GET_FAV_LIST, payload: res.data });
};

export const getReadList = () => async dispatch => {
  const res = await axios.get(`${API}/books/me/readList`, {
    headers: { "x-auth-token": token }
  });

  dispatch({ type: GET_READ_LIST, payload: res.data });
};

export const getReadingList = () => async dispatch => {
  const res = await axios.get(`${API}/books/me/inReadingList`, {
    headers: { "x-auth-token": token }
  });

  dispatch({ type: GET_READING_LIST, payload: res.data });
};

export const toggleFavorites = content => async dispatch => {
  const updatedUser = await axios.post(
    `${API}/books/favList/${content.bookId}`,
    content,
    {
      headers: { "x-auth-token": token }
    }
  );

  dispatch({ type: GET_USER, payload: updatedUser.data });
};

export const toggleReadList = content => async dispatch => {
  const updatedUser = await axios.post(
    `${API}/books/readList/${content.bookId}`,
    content,
    {
      headers: { "x-auth-token": token }
    }
  );

  dispatch({ type: GET_USER, payload: updatedUser.data });
};
