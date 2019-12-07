import axios from "axios";

export const GET_USER = "get_user";
export const GET_USER_ERROR = "get_user_error";

export const GET_BOOK = "get_book";
export const GET_BOOKS_ERROR = "get_books_error";

export const getBook = id => async dispatch => {
  const res = await axios.get(
    `https://intense-mountain-07471.herokuapp.com/api/books/${id}`
  );

  try {
    dispatch({
      type: GET_BOOK,
      payload: res.data
    });
  } catch (e) {
    return { type: GET_BOOKS_ERROR, payload: "" };
  }
};

export const getUser = () => async dispatch => {
  let token = localStorage.getItem("token");

  // const user = await axios.get("/user", { headers: { "x-auth-token": token } });

  const res = {
    data: {
      user: {
        email: "zakariahassan00@hotmail.com",
        readlist: [],
        reading: []
      }
    }
  };

  dispatch({
    type: GET_USER,
    payload: res.data.user
  });
};

export const GET_BOOKS = "get_books";

export const getBooks = (page = 1, query = "") => async dispatch => {
  const books = await axios.get(
    `https://intense-mountain-07471.herokuapp.com/api/books/all?page=${page}&search=${query}`
  );

  try {
    dispatch({
      type: GET_BOOKS,
      payload: books.data
    });
  } catch (e) {
    return { type: GET_BOOKS_ERROR, payload: "" };
  }
};

export const signIn = (loginValues, callback) => async dispatch => {
  // this should be POST axios request with loginValues
  // should get user values with Token or error
  try {
    const res = await axios.post(
      "https://intense-mountain-07471.herokuapp.com/api/auth/logIn",
      loginValues
    );

    dispatch({
      type: GET_USER,
      payload: res.data
    });

    // localStorage.setItem("token", res.data.token);

    callback();
  } catch (e) {
    dispatch({
      type: GET_USER_ERROR,
      payload: "email or password is invalid"
    });
  }
};

export const signUp = (registerValues, callback) => async dispatch => {
  // this should be POST axios request with registerValues
  // should get user values with Token or error
  try {
    const res = await axios.post(
      "https://intense-mountain-07471.herokuapp.com/api/users/SignUp",
      registerValues
    );

    dispatch({
      type: GET_USER,
      payload: res.data.user
    });
    // localStorage.setItem("token", res.data.token);

    callback();
  } catch (e) {
    dispatch({
      type: GET_USER_ERROR,
      payload: "email or password is invalid"
    });
  }
};

// export const signOut = () => {
//   localStorage.removeItem("token");

//   return {
//     type: GET_USER,
//     payload: false
//   };
// };

//  ======> Books Actions

// export const getNewBooks = () => {
//   // const books = await axios.get("url");
//   // console.log(books);

//   const books = newBooks;

//   return books;
// };
