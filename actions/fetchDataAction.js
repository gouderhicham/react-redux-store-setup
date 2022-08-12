import axios from "axios"

export const fetchDataAction = (custum_input_from_frontend) => {
    let url = `somerandomshit${custum_input_from_frontend}`
    return async (dispatch) => {
      const fetchedData = await axios.get(url);
      dispatch({
        type: "fetchData",
        payload: {
            data : fetchedData,
        }
      });
    };
  };
