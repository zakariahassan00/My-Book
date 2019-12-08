import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import { getReadList, fetchingData } from "../../../actions/index";
import Loading from "../../common/Loading";
import BooksGrid from "../../common/BooksGrid";

class ReadListTab extends PureComponent {
  state = {
    page: 1
  };

  componentDidMount() {
    this.props.getReadList();
  }

  render() {
    const { userReadList } = this.props;
    const booksLoaded = userReadList.loaded;
    return (
      <Grid container justify="center">
        <Grid item xs={12}>
          {booksLoaded ? <BooksGrid books={userReadList.data} /> : <Loading />}
        </Grid>
      </Grid>
    );
  }
}

ReadListTab.propTypes = {
  userReadList: PropTypes.object.isRequired,
  getReadList: PropTypes.func.isRequired,
  fetchingData: PropTypes.func.isRequired
};

function mapStateToProps({ userReadList }) {
  return { userReadList };
}

export default connect(mapStateToProps, { getReadList, fetchingData })(
  ReadListTab
);
