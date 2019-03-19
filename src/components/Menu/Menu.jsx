import React, { PureComponent } from 'react';
import { withRouter } from 'react-router';
import MenuItem from './MenuItem';

import './style.scss';


const menuItems = [
  {
    to: '/',
    label: 'Random Cat Pic',
    exact: true,
  },
  {
    to: '/memes/',
    label: 'Memes',
    exact: true,
  },
];


class Menu extends PureComponent {

  render() {
    return (
      <ul className="menu">
        {menuItems.map(menuItem => (
          <MenuItem
            {...menuItem}
            key={menuItem.to}
          />
        ))}
      </ul>
    );
  }

}





export default withRouter(Menu);
