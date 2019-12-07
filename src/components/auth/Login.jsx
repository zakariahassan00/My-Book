import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { compose } from "recompose";
import { Link } from "react-router-dom";
import { signIn } from "../../actions";
import { Paper, Button, Typography, Slide } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import MuiTextFields from "../common/MuiTextField";
import Logged from "../common/Logged";
import { authStyles } from "./authStyles";

class Login extends PureComponent {
  onSubmit = values => {
    this.props.signIn(values, () => {
      this.props.history.push("/");
    });
  };

  renderLogin = () => {
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
              Log in to your Account
            </Typography>

            <Typography className={classes.error} variant="subtitle2">
              {auth.error}
            </Typography>
            <form onSubmit={handleSubmit(values => this.onSubmit(values))}>
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
                Sign in
              </Button>
            </form>

            <div className={classes.divider}></div>

            <div>
              <Link to="/register">Create a new account</Link>
            </div>
          </Paper>
        </div>
      </Slide>
    );
  };

  render() {
    const { auth } = this.props;
    return <div>{auth.user ? <Logged /> : this.renderLogin()}</div>;
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
  // getUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default compose(
  withStyles(authStyles),
  reduxForm({
    form: "login"
  }),
  connect(mapStateToProps, { signIn })
)(Login);
