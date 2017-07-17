'use strict';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/store';
import Routes from './store/redux/routes'

	render(
			<Provider store={store}>
        <Routes />
			</Provider>
    , document.getElementById('main')
);

// 'use strict'
// import React from 'react'
// import {render} from 'react-dom'
// import { Provider } from 'react-redux'

// import store from './store/store'
// import Root from './components/Root'

// render (
//   <Provider store={store}>
//     <Root/>
//   </Provider>,
//   document.getElementById('main')
// )
