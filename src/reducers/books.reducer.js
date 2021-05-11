const bookReducerDefaultState = {
  selectedPage: 1,
  selected: null,
  book: [],
};

const bookReducer = (state = bookReducerDefaultState, { type, payload }) => {
  switch (type) {
    case "ADD_BOOK":
      if (state.book.findIndex((val) => val.ebno === payload.ebno) === -1)
        return { ...state, book: [...state.book, payload] };
    case "ADD_SELECTED":
      return { ...state, selected: payload };
    case "RESET_SELECTED":
      return { ...state, selected: null };
    default:
      return state;
  }
};

export default bookReducer;
