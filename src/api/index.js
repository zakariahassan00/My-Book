import axios from "axios";
import { allBooks, newBooks } from "./fakeData";

const API_URL = "https://intense-mountain-07471.herokuapp.com/api";

export const getBooks = async (page = 1, query = "") => {
  const books = await axios.get(
    `https://intense-mountain-07471.herokuapp.com/api/books/all?page=1&search=a`
  );
  console.log(books);

  // const books = newBooks;

  // return books;
};

// export const getAllBooks = () => {
//   // const books = await axios.get("https://api.itbook.store/1.0/new");
//   // console.log(books);

//   const books = allBooks;

//   return books;
// };
