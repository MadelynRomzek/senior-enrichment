'use strict';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store/store';
import Root from './components/Root';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './store/redux/routes'

	render(
			<Provider store={store}>
        <Routes />
			</Provider>
    , document.getElementById('main')
)

