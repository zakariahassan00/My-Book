import React from "react";
import BooksCard from "./BooksCard";
import { withStyles } from "@material-ui/core";

const styles = {
  booksGrid: {
    width: "100%",
    maxWidth: 1250,
    margin: "auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "#fff",
    marginBottom: 50
  }
};

const BooksGrid = ({ classes, books }) => {
  return (
    <div className={classes.booksGrid}>
      {books.map(book => (
        <BooksCard key={book._id} book={book} />
      ))}
    </div>
  );
};

export default withStyles(styles)(BooksGrid);
