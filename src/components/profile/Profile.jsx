import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "recompose";
import { Avatar, Typography, Slide } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import UserTabs from "./UserTabs";
import { profileStyles } from "./profileStyles";

const Profile = ({ classes, auth }) => {
  const renderUser = () => {
    return (
      <Fragment>
        <div className={classes.user_info}>
          <Avatar alt={auth.user.name} className={classes.avatar}>
            {auth.user.name.charAt(0)}
          </Avatar>

          <Typography variant="h5">{auth.user && auth.user.name}</Typography>
          <Typography variant="caption" style={{ color: "#808080" }}>
            {auth.user && auth.user.email}
          </Typography>
        </div>
        <div className={classes.user_books}>
          <UserTabs />
        </div>
      </Fragment>
    );
  };

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.profile}>{auth.user && renderUser()}</div>
    </Slide>
  );
};

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default compose(
  connect(mapStateToProps),
  withStyles(profileStyles)
)(Profile);
