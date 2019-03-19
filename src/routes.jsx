import React from 'react';

import RandomCatPic from './ducks/cat/containers/RandomCatPic';
import NotFound from './containers/NotFound';
import MemeList from './ducks/memes/containers/Memes';


const routes = [
  {
    path: '/',
    component: RandomCatPic,
    exact: true,
  },
  {
    path: '/memes/',
    component: MemeList,
    exact: true,
  },
  {
    component: NotFound
  },
];


export default routes;
