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
            <Route exact path="/" component={AllCampuses} />
            <Route exact path="/campuses" component={AllCampuses} />
            <Route exact path="/students" component={AllUsers} />
            {/* <Route path="/signup" component={Signup} />
            <Route exact path="/users" component={UserList} />
            <Route path="/users/:id" component={UserDetail} />
            <Route exact path="/stories" component={StoryList} />
            <Route path="/stories/:id" component={StoryDetail} />
            <Route component={Home} /> */}
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
