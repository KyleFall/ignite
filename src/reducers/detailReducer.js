const initialState = {
  game: { platforms: [] },
  screen: { results: [] },
  isLoading: true,
};

const detailReducer = (state = initialState, aciton) => {
  switch (aciton.type) {
    case "GET_DETAIL":
      return {
        ...state,
        game: aciton.payload.game,
        screen: aciton.payload.screen,
        isLoading: false,
      };
    case "LOADING_DETAIL":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;
