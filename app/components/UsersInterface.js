import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import store from '../store/store';
import { fetchUsers } from '../store/redux/users';
import { fetchCampuses } from '../store/redux/campuses'
import AllUsers from './AllUsers';
import AllCampuses from './AllCampuses';

export default class Smart extends Component {

  componentDidMount () {
    store.dispatch(fetchUsers());
    store.dispatch(fetchCampuses());
  }

  render () {
    return (
      <div>
          < AllUsers />
          < AllCampuses />
      </div>
    );
  }
}
