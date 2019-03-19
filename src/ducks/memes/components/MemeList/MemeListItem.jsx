import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


class MemeListItem extends PureComponent {

  render() {
    const { url } = this.props;

    return (
      <div>
        <img src={url} />
      </div>
    );
  }

}


MemeListItem.propTypes = {
  url: PropTypes.string.isRequired,
};


export default MemeListItem;
