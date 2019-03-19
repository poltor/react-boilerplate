import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actions as catActions, picSelector, loadingSelector, errorSelector } from '../reducers';


class RandomCatPic extends Component {

  componentWillMount() {
    const { actions: { fetchCat } } = this.props;
    fetchCat();
  }

  componentWillUnmount() {
    const { actions: { clearCat } } = this.props;
    clearCat();
  }

  handleClickRefresh = () => {
    const { actions: { fetchCat } } = this.props;
    fetchCat();
  };

  render() {
    const { pic, loading, error } = this.props;

    return (
      <div>
        <button
          type="button"
          onClick={this.handleClickRefresh}
          disabled={loading}
        >
          Update
        </button>

        {loading && (
          <div>
            Loading...
          </div>
        )}

        {!loading && error && (
          <div>
            Error!
          </div>
        )}

        {!loading && !error && pic && (
          <div>
            <img src={pic} />
          </div>
        )}
      </div>
    );
  }

}


RandomCatPic.propTypes = {
  pic: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};


function mapStateToProps(state) {
  return {
    error: errorSelector(state),
    loading: loadingSelector(state),
    pic: picSelector(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      fetchCat: catActions.fetchCat,
      clearCat: catActions.clear,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomCatPic)
