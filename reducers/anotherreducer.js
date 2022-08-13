let initialState = {
  data1: [],
  data2 : [], 
  data3 : [], 
  data4 : []
};
export const fetchData = (state = initialState, action) => {
  switch (action.type) {
    case "fetchMe":
      return {
        ...state,
        data1: action.payload.data,
      };
    default:
      return { ...state };
  }
};
