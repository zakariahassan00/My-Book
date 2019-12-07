import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

const styles = theme => ({
  card: {
    margin: 5,
    overflow: "hidden",
    width: 200,
    transition: ".3s ease-in-out",
    borderRadius: 0,
    backgroundColor: "rgba(0 , 0, 0 , 0)",
    boxShadow: "none",
    position: "relative",
    bottom: 0,
    "&:hover": {
      bottom: 15
    },
    [theme.breakpoints.only("xs")]: {
      width: 120
    }
  },
  media: {
    width: "100%",
    height: 300,
    [theme.breakpoints.only("xs")]: {
      height: 180
    }
  }
});

const BooksCard = ({ book: { title, image, _id }, classes }) => {
  return (
    <Link to={`/books/${_id}`}>
      <div className={classes.card}>
        <Card className={classes.card} key={title}>
          <CardActionArea>
            <CardMedia className={classes.media} image={image} title={title} />
          </CardActionArea>
        </Card>
      </div>
    </Link>
  );
};

export default withStyles(styles)(BooksCard);
