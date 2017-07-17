import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import history from './../history';
import Root from '../../components/Root';
import { fetchUsers } from './users';
import { fetchCampuses } from './campuses'
import AllCampuses from '../../components/AllCampuses';
import AllUsers from '../../components/AllUsers';
import SingleCampusContainer from '../../components/SingleCampus';
import SingleUserContainer from '../../components/SingleUser';
import Home from '../../components/Home'

/* -----------------    COMPONENT     ------------------ */

class Routes extends Component {

   componentDidMount () {
    // store.dispatch(fetchUsers());
    // store.dispatch(fetchCampuses());
    this.props.fetchInitialData();
  }

  render () {
    return (
      <Router history={history}>
        <div>
          <Root />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/campuses" component={AllCampuses} />
            <Route exact path="/students" component={AllUsers} />
            <Route exact path="/students/:studentId" component={SingleUserContainer} />
            <Route exact path="/campuses/:campusId" component={SingleCampusContainer} />
            <Route exact path="/campuses/:campusId/students" component={AllUsers} />
          </Switch>
          </div>
      </Router>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapProps = null;

const mapDispatch = dispatch => ({
  fetchInitialData: () => {
    dispatch(fetchUsers());
    dispatch(fetchCampuses());
    // what other data might we want to fetch on app load?
  }
});

export default connect(mapProps, mapDispatch)(Routes);


// import React, { Component } from 'react';
// import { Route, Switch, Redirect } from 'react-router-dom';
// import store from '../store/store';
// //import { fetchUsers } from '../store/redux/users';
// import { fetchCampuses } from '../store/redux/campuses'
// import AllCampuses from './AllCampuses';

// export default class Smart extends Component {

  // componentDidMount () {
  //   //store.dispatch(fetchUsers());
  //   store.dispatch(fetchCampuses());
  // }

//   render () {
//     return (
//       <div>
//         < AllCampuses />
//       </div>
//     );
//   }
// }
