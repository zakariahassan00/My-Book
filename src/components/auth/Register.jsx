import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { compose } from "recompose";
import { Link } from "react-router-dom";
import { signUp } from "../../actions";
import { Paper, Button, Typography, Slide } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import MuiTextFields from "../common/MuiTextField";
import Logged from "../common/Logged";
import { authStyles } from "./authStyles";

class Register extends Component {
  onSubmit = values => {
    this.props.signUp(values, () => {
      this.props.history.push("/");
    });
  };

  renderRegisterPage = () => {
    const { classes, handleSubmit, auth } = this.props;

    return (
      <Slide direction="left" in={true} mountOnEnter unmountOnExit>
        <div className={classes.modLogin}>
          <Paper className={classes.paper}>
            <Typography
              className={classes.typography}
              variant="h4"
              gutterBottom
            >
              Create a new account
            </Typography>

            <Typography className={classes.error} variant="subtitle2">
              {auth.error}
            </Typography>

            <form onSubmit={handleSubmit(values => this.onSubmit(values))}>
              <Field
                name="name"
                type="text"
                label="Full Name"
                component={MuiTextFields}
              />
              <Field
                name="email"
                type="email"
                label="Email"
                component={MuiTextFields}
              />
              <Field
                name="password"
                type="password"
                label="Password"
                component={MuiTextFields}
              />

              <Button
                type="submit"
                size="large"
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Sign Up
              </Button>
            </form>

            <div className={classes.divider}></div>

            <div>
              <Link to="/login">Back To Login</Link>
            </div>
          </Paper>
        </div>
      </Slide>
    );
  };

  render() {
    const { auth } = this.props;
    return <div>{auth.user ? <Logged /> : this.renderRegisterPage()}</div>;
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
  // getUser: PropTypes.func.isRequired,
  auth: PropTypes.object
};

export default compose(
  withStyles(authStyles),
  reduxForm({
    form: "register"
  }),
  connect(mapStateToProps, { signUp })
)(Register);
