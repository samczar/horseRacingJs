import { base } from "../components/apis/datasource";

export const SHOW_ALL = "SHOW_ALL";
export const SELECT_RACE = "SELECT_RACE";
export const LOAD_DATA_SUCCESS = "LOAD_DATA_SUCCESS";
export const LOAD_DATA_REQUEST = "LOAD_DATA_REQUEST";
export const LOAD_DATA_FAILURE = "LOAD_DATA_FAILURE";
export const NEXT_RACE = "NEXT_RACE";

//Race ActionCreator

export function loadData(params) {
  return dispatch => {
    dispatch({ type: LOAD_DATA_REQUEST });
    return fetch(`${base}/public/data/data.json`)
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: LOAD_DATA_SUCCESS,
          payload: data.data
        });
      })
      .catch(err => dispatch({ type: LOAD_DATA_FAILURE }));
  };
}

/**
 *
 * @param {String} race
 * Creates a filter state which is an array
 * On click of the gametype filter it creates
 * a state array and stores the values there.
 */
export function selectRace(race) {
  return function(dispatch, getStore) {
    const { filter } = getStore().appState;
    let hold = [];
    if (filter.includes(race)) {
      hold = filter.filter(el => el !== race);
      console.log("hold", hold);
    } else {
      hold = [...new Set([...filter, race])];
      console.log("unholdhold", hold);
    }
    return dispatch({
      type: SELECT_RACE,
      payload: hold
    });
  };
}

//state for nextRace
export function nextRace(race) {
  return function(dispatch, getStore) {
    const { getRace } = getStore().appState;
    var racehold = [];
    var container = [];
    var ts = Math.round(new Date().getTime() / 1000);
    race.map(el => {
      if (el >= ts) {
        container.push(el);
        racehold.splice(1, 0, container[0]);
        return racehold;
      }
    });
    return dispatch({
      type: NEXT_RACE,
      payload: racehold
    });
  };
}
