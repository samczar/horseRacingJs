import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { appState, activeRaceReducers } from "./reducers";

//add more reducers here
const rootReducer = combineReducers({
  appState,
  activerace: activeRaceReducers
});

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
