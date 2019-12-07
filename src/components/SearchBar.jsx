import React from "react";
import PropTypes from "prop-types";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  searchbar: {
    width: "50%",
    margin: "25px auto 50px",
    [theme.breakpoints.down("xs")]: {
      width: "75%",
      margin: "5px auto 30px"
    }
  },
  search: {
    position: "relative",
    borderRadius: 100,
    backgroundColor: "#fff",
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 1)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#000"
  },
  inputRoot: {
    color: "#000",
    width: "100%"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "100%"
    }
  }
});

const SearchBar = React.memo(function SearchBar({ classes, onQueryChange }) {
  return (
    <div className={classes.searchbar}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          inputProps={{ "aria-label": "search" }}
          onChange={event => onQueryChange(event.target.value)}
        />
      </div>
    </div>
  );
});

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
  onQueryChange: PropTypes.func.isRequired
};

export default withStyles(styles)(SearchBar);
