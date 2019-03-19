import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import MemeListItem from './MemeListItem';


class MemeList extends PureComponent {

  render() {
    const { memes } = this.props;

    return (
      <div>
        {memes.map(meme => (
          <MemeListItem
            key={meme.id}
            {...meme}
          />
        ))}
      </div>
    );
  }

}


MemeList.propTypes = {
  memes: PropTypes.array.isRequired,
};


export default MemeList;
