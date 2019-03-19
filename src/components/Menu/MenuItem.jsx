import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';



class MenuItem extends PureComponent {

  render() {
    const { to, label, exact } = this.props;

    return (
      <li>
        <NavLink
          to={to}
          exact={exact}
          activeClassName="-active"
        >
          {label}
        </NavLink>
      </li>
    );
  }

}


MenuItem.propTypes = {
  exact: PropTypes.bool,
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

MenuItem.defaultProps = {
  exact: false,
};


export default withRouter(MenuItem);
