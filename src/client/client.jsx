import React                              from 'react';
import { render }                         from 'react-dom';
import { Router, Route, browserHistory }  from 'react-router';

import reactRoutes                        from '../shared/reactRoutes';
import style                              from './styling/index';

render(
  <Router history={ browserHistory } routes={ reactRoutes } />,
  document.getElementById('content')
);