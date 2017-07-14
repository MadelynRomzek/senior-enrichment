import { combineReducers } from 'redux';
import usersReducer from './users';
import campusesReducer from './campuses';
import singleCampusReducer from './singleCampus';
import singleUserReducer from './singleUser';

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
