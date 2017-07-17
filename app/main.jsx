'use strict';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/store';

// CONNIE: Why are the routes in the redux folder? They should likely have been
// defined in `./components/Root`
import Routes from './store/redux/routes';

// CONNIE: just a formatting pet-peeve, but keep your code clean! Don't mix use
// of tabs and spaces, and always make sure your indentation/spacing is correct.
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
