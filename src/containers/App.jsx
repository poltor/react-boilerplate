import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter } from 'react-router-dom';

import routes from '../routes';
import { history } from '../store/configureStore';
import Menu from '../components/Menu';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Random Cat Pic</title>
          </Helmet>

          <Menu />

          <Switch>
            {routes.map((route, i) => (
              <Route
                key={i.toString()}
                {...route}
              />
            ))}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

}


export default App;
