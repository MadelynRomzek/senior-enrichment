const GET_CAMPUS = 'GET_CAMPUS';

export function getCampus (selectedCampus) {
  const action = {
    type: GET_CAMPUS, selectedCampus
  };
  return action;
}

const singleCampusReducer = function(state = {}, action) {
  switch (action.type) {

    case GET_CAMPUS:
      return action.selectedCampus;

    default:
      return state;
  }
};

export default singleCampusReducer;
