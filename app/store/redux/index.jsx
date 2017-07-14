import { combineReducers } from 'redux';
import usersReducer from './users';
import campusesReducer from './campuses';

const initialState = {}

const rootReducer = function(state = initialState, action) {
  switch (action.type) {
    default: return state;
  }
};

export default combineReducers({
  users: usersReducer,
  campuses: campusesReducer,
});
