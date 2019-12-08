import React, { Fragment, PureComponent } from "react";
import { connect } from "react-redux";
import { signOut } from "./../../actions/index";
import { compose } from "recompose";
import PropTypes from "prop-types";
import {
  Drawer,
  List,
  ListItem,
  Divider,
  Avatar,
  IconButton,
  Button,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import BookIcon from "@material-ui/icons/Book";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import { withStyles } from "@material-ui/core/styles";
import { sideMenuStyles } from "./sideMenuStyles";
import { Link } from "react-router-dom";

const list = [
  {
    text: "All Books",
    link: "/all",
    icon: <LibraryBooksIcon />
  },
  {
    text: "My Books",
    link: "/profile",
    icon: <BookIcon />
  }
];

class SideMenu extends PureComponent {
  state = {
    open: true
  };

  handleSideMenuClose = () => {
    this.props.toggleSideMenu(false);
  };

  logOut = () => {
    this.handleSideMenuClose();
    this.props.signOut();
  };

  render() {
    const { user, classes, showSideMenu } = this.props;

    return (
      <Drawer
        className={classes.sideMenu}
        anchor="right"
        open={showSideMenu}
        onClose={this.handleSideMenuClose}
        classes={{
          paper: classes.sideMenuPaper
        }}
      >
        <div className={classes.sideMenuHeader}>
          <IconButton onClick={this.handleSideMenuClose}>
            <ChevronRightIcon className={classes.whiteIcon} />
          </IconButton>
          {user ? (
            <Fragment>
              <Link to="/profile" onClick={this.handleSideMenuClose}>
                {user.picture ? (
                  <Avatar
                    alt={user.name}
                    src={user.picture}
                    className={classes.avatar}
                  />
                ) : (
                  <Avatar
                    onClick={this.handleSideMenuClose}
                    alt={user.name}
                    className={classes.avatar}
                  >
                    {user.name.charAt(0)}
                  </Avatar>
                )}
              </Link>
              <h4>{user ? user.name : ""}</h4>
            </Fragment>
          ) : (
            <Button href="/login" variant="contained" color="primary">
              Login
            </Button>
          )}
        </div>
        <Divider />
        <List>
          {list.map(item => (
            <Link to={`${item.link}`} key={item.text}>
              <ListItem
                className={classes.listItem}
                button
                onClick={this.handleSideMenuClose}
              >
                <ListItemIcon className={classes.whiteIcon}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </Link>
          ))}

          {/* Logout */}
          <ListItem
            className={classes.listItem}
            button
            onClick={() => this.logOut()}
          >
            <ListItemIcon className={classes.whiteIcon}>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Log Out" />
          </ListItem>
        </List>
      </Drawer>
    );
  }
}

SideMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  showSideMenu: PropTypes.bool.isRequired,
  toggleSideMenu: PropTypes.func.isRequired
};

export default compose(
  withStyles(sideMenuStyles),
  connect(null, { signOut })
)(SideMenu);
