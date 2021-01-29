const initialState = { game: {}, screen: {} };

const detailReducer = (state = initialState, aciton) => {
  switch (aciton.type) {
    case "GET_DETAIL":
      return {
        ...state,
        game: aciton.payload.game,
        screen: aciton.payload.screen,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;
