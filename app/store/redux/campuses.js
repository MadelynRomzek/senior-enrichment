import axios from 'axios';

const GET_CAMPUSES = 'GET_CAMPUSES';

export function getCampuses (campuses) {
  const action = {
    type: GET_CAMPUSES, campuses
  };
  return action;
}

export function fetchCampuses() {
console.log('fetching campuses')
  return function thunk (dispatch) {
    return axios.get('/api/campuses')
    .then(res => res.data)
    .then(campuses => {
      const action = getCampuses(campuses)
      dispatch(action);
    });
  };
}

const campusesReducer = function(state = [], action) {
  switch (action.type) {

    case GET_CAMPUSES:
      return action.campuses;

    default:
      return state;
  }
};

export default campusesReducer;
