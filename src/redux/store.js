import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { appState, activeRaceReducers, reducer_active_race } from "./reducers";

//add more reducers here
const rootReducer = combineReducers({
  appState,
  activerace: activeRaceReducers,
  selected_race: reducer_active_race
});

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
