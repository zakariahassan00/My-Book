import React from "react";
import { Typography, withStyles } from "@material-ui/core";

const styles = {
  notfound: {
    width: "100%",
    height: "100%",
    display: "flex",
    minWidth: 300,
    minHeight: 500,
    padding: 20,
    justifyContent: "center",
    "& h5": {
      display: "inline-block",
      alignSelf: "center"
    }
  }
};

const NotFound = ({ classes }) => {
  return (
    <div className={classes.notfound}>
      <Typography align="center" variant="h5">
        Sorry, this content is not available now
      </Typography>
    </div>
  );
};

export default withStyles(styles)(NotFound);
