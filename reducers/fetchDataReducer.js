let initialState = {
  data1: {}, 
  data2:{}, 
  isLoading : true
};
export const datchData = (state = initialState, action) => {
  switch (action.type) {
    case "fetchGameData":
      return {
        ...state,
        data1:{ ...action.payload.data},
        data2: {...action.payload.data2},
        isLoading : false ,
      };
    case "loadGame" : 
    return{
      ...state , isLoading : true
    }
    default:
      return { ...state };
  }
};
