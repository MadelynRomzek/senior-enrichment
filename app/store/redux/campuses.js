import axios from 'axios';

const GET_CAMPUSES = 'GET_CAMPUSES';
const POST_CAMPUS = 'POST_CAMPUS';

/*

CONNIE: personally finding the naming scheme of these action types and thunks a
bit confusing. GET and POST are strongly correlated with HTTP requests, but it
seems they are used a pure action object types here. I would possibly go with
something along the lines of RECEIVE_CAMPUSES and CREATE_CAMPUS. You can also
use the CRUD words, which are much more generic compared to GET, POST, and PUT.

As for the thunks, 'fetch' is generally good for get requests, but I don't have
as strong an opinion for other types of requests. 'make' seems sensible, but maybe
I have a slight preference for 'post', simply because it seems slightly more
context-relevant.

*/

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
    // CONNIE: don't forget to handle your errors
  };
}

export const makeCampus = ({name, description}) => dispatch => {
  axios.post('/api/campuses', {name, description})
    .then(res => dispatch(postCampus(res.data)))
    .catch(console.error(`Creating user: unsuccesful`));
    // ^CONNIE: this will cause the error message to always log - do you see why?
};

const campusesReducer = function(state = [], action) {
  switch (action.type) {

    case GET_CAMPUSES:
      return action.campuses;

    case POST_CAMPUS:
      // CONNIE: this is going to replace all campuses with just the singular
      // campus that was created. This is what's causing your view to dysfunction
      // when you submit a new campus!
      return action.newCampus;

    default:
      return state;
  }
};

export default campusesReducer;
