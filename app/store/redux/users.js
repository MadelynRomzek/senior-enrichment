import axios from 'axios';

const GET_USERS = 'GET_USERS';

export function getUsers (users) {
  const action = {
    type: GET_USERS, users
  };
  return action;
}

export function fetchUsers() {
console.log('fetching users')
  return function thunk (dispatch) {
    return axios.get('/api/users')
    .then(res => res.data)
    .then(users => {
      const action = getUsers(users);
      dispatch(action);
    });
  };
}

const usersReducer = function(state = [], action) {
  switch (action.type) {

    case GET_USERS:
      return action.users;

    default:
      return state;
  }
}

export default usersReducer;
