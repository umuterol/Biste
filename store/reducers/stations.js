import { SET_STATIONS } from "../actions/stations";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_STATIONS:
      return action.value;
    default:
      return state;
  }
};
