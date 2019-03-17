import {
  LOAD_DATA_FAILURE,
  LOAD_DATA_REQUEST,
  LOAD_DATA_SUCCESS,
  SELECT_RACE
} from "./action";

const initialState = {
  isLoading: false,
  data: [],
  filter: [],
  error: false
};
//Race Reducer
export function appState(state = initialState, action) {
  switch (action.type) {
    case LOAD_DATA_REQUEST:
      return { ...state, isLoading: true };
    case LOAD_DATA_SUCCESS:
      return { ...state, data: action.payload, isLoading: false };
    case LOAD_DATA_FAILURE:
      return { ...state, error: true, isLoading: false };
    case SELECT_RACE:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}
//Active Race Reducer
//Responsible for creating and listing the racetype state
export function activeRaceReducers() {
  return [
    { race_type: "D", discription: "Filter button: Dogs" },
    { race_type: "G", discription: "Filter button: Gallop" },
    { race_type: "J", discription: "Filter button: Jump" },
    { race_type: "T", discription: "Filter button: Trot" }
  ];
}
