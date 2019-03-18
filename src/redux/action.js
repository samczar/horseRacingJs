import { baseLink } from "../components/apis/datasource";

export const SHOW_ALL = "SHOW_ALL";
export const SELECT_RACE = "SELECT_RACE";
export const DISPLAY_TIME = "DISPLAY_TIME";
export const ACTIVE = "ACTIVE";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
export const LOAD_DATA_SUCCESS = "LOAD_DATA_SUCCESS";
export const LOAD_DATA_REQUEST = "LOAD_DATA_REQUEST";
export const LOAD_DATA_FAILURE = "LOAD_DATA_FAILURE";

//Ace ActionCreator
export function loadData(params) {
  return dispatch => {
    dispatch({ type: LOAD_DATA_REQUEST });
    baseLink
      .get("/public/data/data.json")
      // fetch("http://localhost:8080/public/data/data.json")
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: LOAD_DATA_SUCCESS,
          payload: data.data
        });
        console.log(data.data);
      })
      .catch(err => dispatch({ type: LOAD_DATA_FAILURE }));
  };
}

export function selectRace(race) {
  return function(dispatch, getStore) {
    const { filter } = getStore().appState;
    let hold = [];
    if (filter.includes(race)) {
      hold = filter.filter(el => el !== race);
    } else {
      hold = [...new Set([...filter, race])];
    }
    return dispatch({
      type: SELECT_RACE,
      payload: hold
    });
  };
}

export function active(activate) {}
