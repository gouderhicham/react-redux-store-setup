import {gameDetailsURL, gameScreenshotURL} from "../api"
import axios from "axios"
export const fetchGameDetails = (game_id) => {
    return async (dispatch) => {
      const gameDetailsData = await axios.get(gameDetailsURL(game_id));
      const gameDetailsScreenShots = await axios.get(gameScreenshotURL(game_id));
      dispatch({
        type: "fetchGameData",
        payload: {
            gameData : gameDetailsData.data,
            images : gameDetailsScreenShots.data.results, 
        }
      });
    };
  };