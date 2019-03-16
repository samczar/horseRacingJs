import {
  LOAD_DATA_FAILURE,
  LOAD_DATA_REQUEST,
  LOAD_DATA_SUCCESS
} from "./action";

const initialState = {
  isLoading: false,
  data: [],
  error: false
};

export function appState(state = initialState, action) {
  switch (action.type) {
    case LOAD_DATA_REQUEST:
      return { ...state, isLoading: true };
    case LOAD_DATA_SUCCESS:
      return { ...state, data: action.payload, isLoading: false };
    case LOAD_DATA_FAILURE:
      return { ...state, error: true, isLoading: false };
    default:
      return state;
  }
}

export function activeRaceReducers(state = initialState, action) {
  return [{ title: "A" }, { title: "B" }, { title: "c" }];
}
