import React, { PureComponent, Fragment } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { getBook } from "../actions";
import Loading from "./common/Loading";
import Rating from "@material-ui/lab/Rating";
import { withStyles, CardMedia, Typography, Slide } from "@material-ui/core";

const styles = theme => ({
  book: {
    width: "100%",
    height: "100%",
    minHeight: 400,
    maxWidth: 1000,
    margin: "80px auto",
    padding: 15,
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "#fff"
  },
  book_img: {
    width: 250,
    height: "100%",
    [theme.breakpoints.only("xs")]: {
      margin: "auto",
      width: 200
    }
  },
  media: {
    height: 375,
    [theme.breakpoints.only("xs")]: {
      height: 300
    }
  },
  book_info: {
    padding: "30px 20px",
    width: "55%",
    flexGrow: 1,
    "& p": {
      margin: "20px auto"
    },
    "& h6 span": {
      color: "red",
      fontSize: 18
    }
  }
});

class Book extends PureComponent {
  state = {};

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getBook(id);
  }

  renderBook = () => {
    const { classes, book } = this.props;

    return (
      <Fragment>
        <div className={classes.book_img}>
          <CardMedia
            className={classes.media}
            image={book.data.image}
            title={book.data.title}
          />
        </div>
        <div className={classes.book_info}>
          <Typography variant="h5">{book.data.title}</Typography>

          <Typography variant="subtitle2" gutterBottom>
            by <span>kylie simpson</span>
          </Typography>

          <Rating name="read-only" value={5} readOnly />

          <Typography variant="body1" gutterBottom>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
            facilis quo voluptatum nemo incidunt est assumenda odio delectus
            nesciunt deserunt nobis recusandae esse dolore a fugiat
            reprehenderit, quasi rerum tenetur!
          </Typography>

          <Typography variant="h5">$15.00</Typography>
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

function mapStateToProps({ book }) {
  return { book };
}

export default compose(
  connect(mapStateToProps, { getBook }),
  withStyles(styles)
)(Book);
