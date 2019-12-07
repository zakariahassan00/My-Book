import React, { Fragment, PureComponent } from "react";
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
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
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
          {/* Logout button */}
          <a href="/api/logout">
            <ListItem className={classes.listItem} button>
              <ListItemIcon className={classes.whiteIcon}>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Log Out" />
            </ListItem>
          </a>
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

export default withStyles(sideMenuStyles)(SideMenu);
