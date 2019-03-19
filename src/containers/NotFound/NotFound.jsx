import React, { Component } from 'react';

import './style.scss';


class NotFound extends Component {

  render() {
    return (
      <div className="not-found">
        <h1>Страница не найдена</h1>
        <img
          className="not-found__image"
          src="/assets/images/cat.jpg"
        />
      </div>
    );
  }

}


export default NotFound;
