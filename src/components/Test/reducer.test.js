import {
  LOAD_DATA_SUCCESS,
  LOAD_DATA_FAILURE,
  LOAD_DATA_REQUEST,
  SELECT_RACE,
  selectRace
} from "../../redux/action";
import { appState } from "../../redux/reducers";

describe(" Check Reducers data", () => {
  it("Should return default state", () => {
    const newState = appState({ data: [] }, {});
    expect(newState).toEqual({ data: [] });
  });
  //Data Loads Successfully
  it("Should return new State if recieve type", () => {
    const race = {
      data: [{ race_id: 1 }, { race_id: 1 }, { race_id: 1 }, { race_id: 1 }],
      isLoading: false
    };
    const newState = appState(
      {},
      {
        type: LOAD_DATA_SUCCESS,
        payload: race.data
      }
    );
    expect(newState).toEqual(race);
  });

  //Error Not Loading Test
  it("Should return Failed State", () => {
    const race = {
      error: true,
      isLoading: false
    };
    const newState = appState(
      {},
      {
        type: LOAD_DATA_FAILURE,
        payload: race.error
      }
    );
    expect(newState).toEqual(race);
  });

  //Loading State Test
  it("Should return Loading State", () => {
    const race = {
      isLoading: true
    };
    const newState = appState(
      {},
      {
        type: LOAD_DATA_REQUEST,
        payload: race.isLoading
      }
    );
    expect(newState).toEqual(race);
  });
  //Test For Selected State
  it("Should return Is Selected", () => {
    const filter = ["T"];
    const newState = appState(
      {},
      {
        type: SELECT_RACE,
        payload: filter
      }
    );
    expect(newState).toEqual({ filter: ["T"] });
  });
});
