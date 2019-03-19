import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actions as memesActions } from '../reducers';
import MemeList from '../components/MemeList/MemeList';


class Memes extends Component {

  componentWillMount() {
    const { actions: { fetchMemes } } = this.props;
    fetchMemes();
  }

  render() {
    const { memes, loading } = this.props;

    // console.log(this.props);
    return (
      <div>
        {!loading && (<MemeList memes={memes} />)}

      </div>
    );
  }

}

function mapStateToProps(state) {
  const {memes} = state;

  return {
    ...memes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      fetchMemes: memesActions.fetchMemes,
      resetMemes: memesActions.reset,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Memes);
