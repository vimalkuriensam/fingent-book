const bookReducerDefaultState = [];

const bookReducer = (state = bookReducerDefaultState, { type, payload }) => {
  switch (type) {
    case "ADD_BOOK":
      return { ...state, payload };
    default:
      return state;
  }
};

export default bookReducer;
