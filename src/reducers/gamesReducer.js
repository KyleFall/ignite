const initState = {
  popular: [],
  newGames: [],
  upcomingGames: [],
  searched: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        newGames: action.payload.newGames,
      };
    default:
      return { ...state };
  }
};

//Action -> object that describes what is going to happen
//Action creator -> an action that returns you a function

export default gamesReducer;
