import React, { PureComponent } from "react";
import { withRouter, Link } from "react-router-dom";
import { getUser } from "./../../actions/index";
import { connect } from "react-redux";
import { compose } from "recompose";
import { headerStyles } from "./headerStyles";
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Button,
  withWidth,
  Hidden,
  IconButton
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PersonIcon from "@material-ui/icons/Person";
import MenuIcon from "@material-ui/icons/Menu";
import SideMenu from "../sideMenu";

class Header extends PureComponent {
  state = {
    showSideMenu: false,
    scrolled: false
  };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      let scrolled = window.scrollY > 60;
      if (scrolled) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });

    // fire action that make request to the server to check if the user is logged in or not
    this.props.getUser();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  renderLoginButton() {
    const { auth, location, classes } = this.props;

    switch (auth.user) {
      case null:
        return;
      case false:
        return (
          !(location.pathname === "/login") && (
            <Link to="/login">
              <Button
                variant="contained"
                color="primary"
                startIcon={<PersonIcon />}
              >
                Login
              </Button>
            </Link>
          )
        );

      default:
        return (
          <div className={this.props.classes.profile}>
            {auth.user.picture ? (
              <Avatar
                alt={auth.user.name}
                src={auth.user.picture}
                className={classes.avatar}
                onClick={() => this.toggleSideMenu(true)}
              />
            ) : (
              <Avatar
                alt={auth.user.name}
                className={classes.avatar}
                onClick={() => this.toggleSideMenu(true)}
              >
                {auth.user.name.charAt(0)}
              </Avatar>
            )}
          </div>
        );
    }
  }

  toggleSideMenu = value => {
    this.setState({ showSideMenu: value });
  };

  render() {
    const { classes, auth, location } = this.props;
    const { scrolled } = this.state;
    const whiteBG = location.pathname === "/" || location.pathname === "/all";

    return (
      <div>
        <AppBar
          position="fixed"
          className={
            scrolled || !whiteBG ? classes.solidNavbar : classes.clearNavbar
          }
        >
          <Toolbar>
            <Typography variant="h5" className={classes.brand}>
              <Link to="/">My Books</Link>
            </Typography>

            <Hidden smDown>
              <React.Fragment>{this.renderLoginButton()}</React.Fragment>
            </Hidden>
            <Hidden mdUp>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                onClick={() => this.toggleSideMenu(true)}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          </Toolbar>
        </AppBar>
        <SideMenu
          user={auth.user}
          toggleSideMenu={this.toggleSideMenu}
          showSideMenu={this.state.showSideMenu}
        />
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default compose(
  withWidth(),
  withStyles(headerStyles),
  withRouter,
  connect(mapStateToProps, { getUser })
)(Header);
