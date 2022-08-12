let initialState = {
  popularGames: [],
  upcomingGames : [], 
  newGames : [], 
  searchedGamed : []
};
export const fetchGames = (state = initialState, action) => {
  switch (action.type) {
    case "fetchgames":
      return {
        ...state,
        popularGames: action.payload.popular,
        upcomingGames: action.payload.upcoming,
        newGames: action.payload.new,
      };
    default:
      return { ...state };
  }
};
