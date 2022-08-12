let initialState = {
  gameData: {}, 
  gameImages:{}, 
  isLoading : true
};
export const fetchGameData = (state = initialState, action) => {
  switch (action.type) {
    case "fetchGameData":
      return {
        ...state,
        gameData:{ ...action.payload.gameData},
        gameImages: {...action.payload.images},
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
