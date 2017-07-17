import { combineReducers } from 'redux';
import usersReducer from './users';
import campusesReducer from './campuses';
import singleCampusReducer from './singleCampus';
import singleUserReducer from './singleUser';

/*

CONNIE: it's not being used, so probably best to just get rid of the `initialState`
and `rootreducer`. Always good to clear out extraneous code! Also, these files
that do not use JSX shouldn't have a .jsx extension. Functionally, there is no
difference, but it is misleading. This applies to many other files in this folder

*/

const initialState = {}

const rootReducer = function(state = initialState, action) {
  switch (action.type) {
    default: return state;
  }
};

export default combineReducers({
  users: usersReducer,
  campuses: campusesReducer,
  selectedCampus: singleCampusReducer,
  selectedUser: singleUserReducer
});
