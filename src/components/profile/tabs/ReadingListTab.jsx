import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import { getReadingList, fetchingData } from "../../../actions/index";
import Loading from "../../common/Loading";
import BooksGrid from "../../common/BooksGrid";

class ReadingListTab extends PureComponent {
  state = {
    page: 1
  };

  componentDidMount() {
    this.props.getReadingList();
  }

  render() {
    const { userReadingList } = this.props;
    const booksLoaded = userReadingList.loaded;
    return (
      <Grid container justify="center">
        <Grid item xs={12}>
          {booksLoaded ? (
            <BooksGrid books={userReadingList.data} />
          ) : (
            <Loading />
          )}
        </Grid>
      </Grid>
    );
  }
}

ReadingListTab.propTypes = {
  userReadingList: PropTypes.object.isRequired,
  getReadingList: PropTypes.func.isRequired,
  fetchingData: PropTypes.func.isRequired
};

function mapStateToProps({ userReadingList }) {
  return { userReadingList };
}

export default connect(mapStateToProps, { getReadingList, fetchingData })(
  ReadingListTab
);
