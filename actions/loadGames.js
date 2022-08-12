import axios from "axios";
import { popularGamesURL } from "../api";
import { upcomingGamesURL } from "../api";
import { newGamesURL } from "../api";
export const loadGames = () => {
  return async (dispatch) => {
    const popularGamesDispatch = await axios.get(popularGamesURL());
    const upcomingGamesDispatch = await axios.get(upcomingGamesURL());
    const newGamesDispatch = await axios.get(newGamesURL());
    dispatch({
      type: "fetchgames",
      payload: {
        popular: popularGamesDispatch.data.results,
        upcoming: upcomingGamesDispatch.data.results,
        new: newGamesDispatch.data.results,
      },
    });
  };
};
