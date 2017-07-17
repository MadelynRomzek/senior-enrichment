import axios from 'axios';

const GET_USERS = 'GET_USERS';
const POST_USER = 'POST_USER';

export function getUsers (users) {
  const action = {
    type: GET_USERS, users
  };
  return action;
}

export function postUser (newUser) {
  const action = {
    type: POST_USER, newUser
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

export const makeUser = ({name, email, gradYear}) => () => {
  axios.post('/api/users', {name, email, gradYear})
    .then(res => res.data)
    .catch(err => console.error('Failed to create user', err));
};

const usersReducer = function(state = [], action) {
  switch (action.type) {

    case GET_USERS:
      return action.users;

    default:
      return state;
  }
}

export default usersReducer;
