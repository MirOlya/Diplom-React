"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import PagesRouter from './src/pages/PagesRouter';
import PagesLinks from './src/pages/PagesLinks';

ReactDOM.render( 
  <BrowserRouter>
    <div>
      <PagesLinks />
      <PagesRouter />
    </div>
  </BrowserRouter>
, document.getElementById('container') );
