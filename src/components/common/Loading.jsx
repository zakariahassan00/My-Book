import React from "react";
import Loader from "react-loader-spinner";
import { withStyles } from "@material-ui/core";

const styles = {
  loading: {
    width: "100%",
    height: "100%",
    minWidth: 300,
    minHeight: 500,
    position: "relative"
  },
  circles: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
};

const Loading = ({ classes }) => {
  return (
    <div className={classes.loading}>
      <Loader
        type="Circles"
        color="#000"
        height={60}
        width={60}
        className={classes.circles}
      />
    </div>
  );
};

export default withStyles(styles)(Loading);
