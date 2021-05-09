const bookReducerDefaultState = [];

const bookReducer = (state = bookReducerDefaultState, { type, payload }) => {
  switch (type) {
    case "ADD_BOOK":
      if (state.findIndex((val) => val.ebno === payload.ebno) === -1)
        return [...state, payload];
    default:
      return state;
  }
};

export default bookReducer;
