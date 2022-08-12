import { combineReducers } from "redux";
import { fetchGames } from "./fetchGames";
import { fetchGameData } from "./fetchGameData";
export const reducers = combineReducers({
  gamesData: fetchGames,
  gameDetails : fetchGameData
});
