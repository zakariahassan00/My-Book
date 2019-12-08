import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { compose } from "recompose";
import { connect } from "react-redux";
import { getBook } from "../../actions";
import Loading from "../common/Loading";
import AddToFavorites from "../userActions/AddToFavorites";
import AddToReadList from "../userActions/AddToReadList";
import Rating from "@material-ui/lab/Rating";
import { withStyles, CardMedia, Typography, Slide } from "@material-ui/core";
import { bookStyles } from "./bookStyls";

class Book extends PureComponent {
  state = {};

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getBook(id);
  }

  renderBook = () => {
    const { classes, book, match } = this.props;

    return (
      <Fragment>
        <div className={classes.book_img}>
          <CardMedia
            className={classes.media}
            image={book.data.image}
            title={book.data.title}
          />

          <AddToReadList bookId={match.params.id} />
        </div>
        <div className={classes.book_info}>
          <Typography variant="h5">{book.data.title}</Typography>

          <Typography variant="subtitle2" gutterBottom>
            by <span>{book.data.publisher}</span>
          </Typography>

          <Rating name="read-only" value={book.data.rating} readOnly />

          <Typography variant="body1" gutterBottom>
            {book.data.desc}
          </Typography>

          <Typography variant="h5">$15.00</Typography>

          <div className={classes.favIcon}>
            <AddToFavorites bookId={match.params.id} />
          </div>
        </div>
      </Fragment>
    );
  };

  render() {
    const { classes, book } = this.props;
    return (
      <Slide in={true} direction="up">
        <div className={classes.book}>
          {book.loaded ? this.renderBook() : <Loading />}
        </div>
      </Slide>
    );
  }
}

Book.propTypes = {
  classes: PropTypes.object.isRequired,
  book: PropTypes.object.isRequired,
  getBook: PropTypes.func.isRequired
};

function mapStateToProps({ book }) {
  return { book };
}

export default compose(
  connect(mapStateToProps, { getBook }),
  withStyles(bookStyles)
)(Book);
