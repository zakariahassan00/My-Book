import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "recompose";
import { toggleReadList } from "../../actions";
import { withStyles } from "@material-ui/core/styles";
import DoneIcon from "@material-ui/icons/Done";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  readList: {
    textAlign: "center",
    margin: "10px auto"
  },
  button: {
    textTransform: "capitalize",
    margin: "auto"
  }
});

class AddReadList extends Component {
  toggle = action => {
    const { toggleReadList, bookId } = this.props;
    const content = {
      id: bookId,
      action
    };

    toggleReadList(content);
  };

  render() {
    const { classes, auth, bookId } = this.props;

    // first check if the user added this content to his/her Watchlist or not!
    const added =
      (auth.user &&
        auth.user.readList.filter(item => item.id === bookId).length > 0) ||
      false;

    return (
      <div className={classes.readList}>
        {added ? (
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className={classes.button}
            startIcon={<DoneIcon />}
            onClick={() => this.toggle("remove")}
          >
            Added to ReadList
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className={classes.button}
            startIcon={<AddIcon />}
            onClick={() => this.toggle("add")}
          >
            Add to ReadList
          </Button>
        )}
      </div>
    );
  }
}

AddReadList.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  bookId: PropTypes.string.isRequired,
  toggleReadList: PropTypes.func.isRequired
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, { toggleReadList })
)(AddReadList);
