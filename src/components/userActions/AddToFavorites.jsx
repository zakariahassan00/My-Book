import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "recompose";
import { toggleFavorites } from "../../actions";
import { withStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const styles = theme => ({
  favorite: {
    width: 35,
    height: 35,
    color: "#E50914",
    cursor: "pointer"
  },
  addToFavorite: {
    width: 50,
    margin: "auto"
  }
});

class AddToFavorites extends PureComponent {
  state = {};

  toggle = action => {
    const { toggleFavorites, bookId } = this.props;
    const content = {
      id: bookId,
      action
    };

    toggleFavorites(content);
  };

  renderFavoritesIcon = () => {
    const { classes, auth, bookId } = this.props;
    const added =
      (auth.user &&
        auth.user.favList.filter(item => item.id === bookId).length > 0) ||
      false;

    return added ? (
      <FavoriteIcon
        onClick={() => this.toggle("remove")}
        className={classes.favorite}
      />
    ) : (
      <FavoriteBorderIcon
        onClick={() => this.toggle("add")}
        className={classes.favorite}
      />
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.addToFavorite}>{this.renderFavoritesIcon()}</div>
    );
  }
}

AddToFavorites.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  bookId: PropTypes.string.isRequired,
  toggleFavorites: PropTypes.func.isRequired
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, { toggleFavorites })
)(AddToFavorites);
