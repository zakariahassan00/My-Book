import React, { Component } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withStyles, Button } from "@material-ui/core";
import BooksGrid from "./common/BooksGrid";
import { getBooks } from "../actions";
import Loading from "./common/Loading";
import NotFound from "./common/NotFound";

const styles = {
  books: {
    width: "100%",
    minHeight: 500,
    textAlign: "center",
    backgroundColor: "#fff",
    margin: "auto",
    marginBottom: 50,
    maxWidth: 1250
  },

  btn: {
    width: 170,
    margin: "20px auto",
    color: "#fff",
    backgroundColor: "#161616",
    textTransform: "capitalize",
    borderRadius: "15px",
    "&:hover": {
      backgroundColor: "#333"
    }
  }
};

class NewBooks extends Component {
  state = {};

  componentDidMount() {
    this.props.getBooks();
  }

  renderBooks = () => {
    const { allBooks } = this.props;

    return allBooks.data.length > 0 ? (
      <BooksGrid books={allBooks.data} />
    ) : (
      <NotFound />
    );
  };

  render() {
    const { classes, allBooks } = this.props;

    return (
      <div className={classes.books}>
        {allBooks.loaded ? this.renderBooks() : <Loading />}

        <Link to="/all">
          <Button className={classes.btn}>Show All Books</Button>
        </Link>
      </div>
    );
  }
}

function mapStateToProps({ allBooks }) {
  return { allBooks };
}

export default compose(
  connect(mapStateToProps, { getBooks }),
  withStyles(styles)
)(NewBooks);
