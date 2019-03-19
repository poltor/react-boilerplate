import React from 'react';

import RandomCatPic from './ducks/cat/containers/RandomCatPic';
import NotFound from './containers/NotFound';


const routes = [
  {
    path: '/',
    component: RandomCatPic,
    exact: true,
  },
  {
    component: NotFound
  },
];


export default routes;
