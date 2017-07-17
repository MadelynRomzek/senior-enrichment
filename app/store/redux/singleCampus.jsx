import axios from 'axios';

const GET_CAMPUS = 'GET_CAMPUS';
const POST_CAMPUS = 'POST_CAMPUS';

export function getCampus (selectedCampus) {
  const action = {
    type: GET_CAMPUS, selectedCampus
  };
  return action;
}


// CONNIE: this seems to be something that doesn't belong in this reducer
// it seems to be handled by campuses reducer already
export function postCampus (newCampus) {
  const action = {
    type: GET_CAMPUS // this seems wrong?
    // what about the payload newCampus?
  };
  return action;
}

const singleCampusReducer = function(state = {}, action) {
  switch (action.type) {

    case GET_CAMPUS:
      return action.selectedCampus;

    case POST_CAMPUS:
      return action.newCampus;

    default:
      return state;
  }
};

export default singleCampusReducer;
