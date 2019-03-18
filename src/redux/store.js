import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { appState, activeRaceReducers, reducer_active_race } from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native

import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
//add more reducers here
const rootReducer = combineReducers({
  appState,
  activerace: activeRaceReducers
});

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(thunk, logger)
);
export const persistor = persistStore(store);
