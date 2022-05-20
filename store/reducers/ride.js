import { STARTING_RIDE, FINISHED_RIDE } from "../actions/ride";

const initialState = {
  startingDate: null,
  bikeId: null,
  price: 0,
  total: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STARTING_RIDE:
      return action.value;
    case FINISHED_RIDE:
      return initialState;
    default:
      return state;
  }
};
