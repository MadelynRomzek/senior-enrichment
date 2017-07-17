import axios from 'axios';

const GET_CAMPUSES = 'GET_CAMPUSES';
const POST_CAMPUS = 'POST_CAMPUS';

export function getCampuses (campuses) {
  const action = {
    type: GET_CAMPUSES, campuses
  };
  return action;
}

export function postCampus (newCampus) {
  console.log('action creator')
  const action = {
    type: POST_CAMPUS, newCampus
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

export const makeCampus = ({name, description}) => dispatch => {
  axios.post('/api/campuses', {name, description})
    .then(res => dispatch(postCampus(res.data)))
    .catch(console.error(`Creating user: unsuccesful`));
};

const campusesReducer = function(state = [], action) {
  switch (action.type) {

    case GET_CAMPUSES:
      return action.campuses;

    case POST_CAMPUS:
      return action.newCampus;

    default:
      return state;
  }
};

export default campusesReducer;
