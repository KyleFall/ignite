const initialState = {
  popular: [],
  newGames: [],
  upcomingGames: [],
  searched: [],
};

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state };
    default:
      return { ...state };
  }
};

//Action -> object that describes what is going to happen
//Action creator -> an action that returns you a function

export default gamesReducer;
