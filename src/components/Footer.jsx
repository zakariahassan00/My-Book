import React from "react";
import PropTypes from "prop-types";
import { withStyles, Typography, Grid } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

const styles = theme => ({
  footer: {
    width: "100%",
    minHeight: 200,
    padding: "40px 20px 20px",
    backgroundColor: "#fff",
    color: "#333",
    textAlign: "center",
    "& h3": {
      padding: 20,
      letterSpacing: 6
    }
  },
  socialIcon: {
    width: 45,
    height: 45,
    margin: "0px 25px",
    color: "#333",
    borderRadius: "50%",
    border: "2px solid #333",
    padding: 5,
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      margin: "0px 15px"
    }
  },
  social: {
    letterSpacing: 10,
    marginBottom: 50,
    "& p": {
      margin: "20px auto"
    }
  }
});

const Footer = ({ classes }) => {
  return (
    <div className={classes.footer}>
      <Grid container justify="center">
        <Grid item xs={12} sm={6}>
          <div className={classes.logo}>
            <Typography variant="h3">My Book</Typography>
          </div>
        </Grid>

        <Grid item xs={12} sm={6}>
          <div className={classes.social}>
            <p> Follow us on</p>
            <InstagramIcon className={classes.socialIcon} />
            <FacebookIcon className={classes.socialIcon} />
            <TwitterIcon className={classes.socialIcon} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
