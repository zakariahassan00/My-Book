import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Loading from "../../common/Loading";
import { Grid } from "@material-ui/core";
import { getFavoritesList, fetchingData } from "./../../../actions/index";
import BooksGrid from "../../common/BooksGrid";

class FavoritesListTab extends PureComponent {
  state = {
    page: 1
  };

  componentDidMount() {
    this.props.getFavoritesList();
  }

  handlePageChange = page => {
    this.props.fetchingData();
    this.props.getFavoritesList(page);
    this.setState({ page });
  };

  render() {
    const { userFavList } = this.props;
    const booksLoaded = userFavList.loaded;
    return (
      <Grid container justify="center">
        <Grid item xs={12}>
          {booksLoaded ? <BooksGrid books={userFavList.data} /> : <Loading />}
        </Grid>
      </Grid>
    );
  }
}

FavoritesListTab.propTypes = {
  userFavList: PropTypes.object.isRequired,
  getFavoritesList: PropTypes.func.isRequired,
  fetchingData: PropTypes.func.isRequired
};

function mapStateToProps({ userFavList }) {
  return { userFavList };
}

export default connect(mapStateToProps, { getFavoritesList, fetchingData })(
  FavoritesListTab
);
