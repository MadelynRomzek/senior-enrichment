import axios from 'axios';

const GET_CAMPUS = 'GET_CAMPUS';
const POST_CAMPUS = 'POST_CAMPUS';

export function getCampus (selectedCampus) {
  const action = {
    type: GET_CAMPUS, selectedCampus
  };
  return action;
}

export function postCampus (newCampus) {
  const action = {
    type: GET_CAMPUS
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
