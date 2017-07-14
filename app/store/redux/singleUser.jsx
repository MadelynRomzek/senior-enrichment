const GET_USER = 'GET_USER';

export function getUser (selectedUser) {
  const action = {
    type: GET_USER, selectedUser
  };
  return action;
}

const singleUserReducer = function(state = {}, action) {
  switch (action.type) {

    case GET_USER:
      return action.selectedUser;

    default:
      return state;
  }
};

export default singleUserReducer;
