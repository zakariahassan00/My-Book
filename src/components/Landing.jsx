import React from "react";
import { Link } from "react-router-dom";
import { withStyles, Button, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import image from "../assets/cover.jpg";

const styles = theme => ({
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
  landing_content: {
    width: "80%",
    top: "60%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    zIndex: "4",
    color: "#fff",
    textAlign: "center",
    "& h4": {
      [theme.breakpoints.only("xs")]: {
        fontSize: "1.2rem"
      }
    }
  },
  btn: {
    width: 170,
    margin: 20,
    color: "#fff",
    backgroundColor: "#161616",
    textTransform: "capitalize",
    borderRadius: "15px",
    "&:hover": {
      backgroundColor: "#333"
    }
  }
});

const Landing = ({ classes }) => {
  return (
    <div className={classes.hero}>
      <div className={classes.landing_content}>
        <Typography variant="h4">
          Think before you speak, Read before you think.
        </Typography>

        <Link to="/all">
          <Button
            startIcon={<SearchIcon />}
            className={classes.btn}
            variant="contained"
          >
            Find Book
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default withStyles(styles)(Landing);
