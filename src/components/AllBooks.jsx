import React, { Component } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { getBooks } from "../actions/index";
import { withStyles, Slide, Typography } from "@material-ui/core";
import BooksGrid from "./common/BooksGrid";
import SearchBar from "./SearchBar";
import PaginationBar from "./PaginationBar";
import NotFound from "./common/NotFound";
import Loading from "./common/Loading";
import image from "../assets/allbooks.jpg";

const styles = theme => ({
  allBooks: {
    width: "100%",
    height: "100%"
  },
  hero: {
    width: "100vw",
    height: 500,
    position: "relative",
    backgroundImage: `linear-gradient(to bottom, rgba(2,2,2, .8), rgba(0,0,0, .8)) , url(${image})`,
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.only("xs")]: {
      height: 250
    }
  },
  hero_content: {
    width: "100%",
    position: "absolute",
    top: "65%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#fff",
    textAlign: "center"
  }
});

class AllBooks extends Component {
  state = {
    page: 1
  };

  componentDidMount() {
    this.props.getBooks();
  }

  handleQueryChange = values => {
    this.props.getBooks(1, values);
  };

  handlePageChange = page => {
    this.setState({ page });
    console.log("make new Request");
  };

  renderBooks = () => {
    const { allBooks } = this.props;

    return allBooks.data.count > 0 ? (
      <BooksGrid books={allBooks.data.book} />
    ) : (
      <NotFound />
    );
  };

  render() {
    const { classes, allBooks } = this.props;
    const { page } = this.state;

    return (
      <Slide in={true} direction="left" mountOnEnter unmountOnExit>
        <div className={classes.allBooks}>
          <div className={classes.hero}>
            <div className={classes.hero_content}>
              <Typography variant="h4"> Find The Right Book! </Typography>
              <SearchBar onQueryChange={this.handleQueryChange} />
            </div>
          </div>

          <div>{allBooks.loaded ? this.renderBooks() : <Loading />}</div>

          <PaginationBar
            onPageChange={this.handlePageChange}
            itemsCount={allBooks.data.count}
            currentPage={page}
          />
        </div>
      </Slide>
    );
  }
}

function mapStateToProps({ allBooks }) {
  return { allBooks };
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, { getBooks })
)(AllBooks);
