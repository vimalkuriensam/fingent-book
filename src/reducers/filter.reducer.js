const filterReducerDefaultState = {
  text: "",
  sorting: "date",
};

const filterReducer = (
  state = filterReducerDefaultState,
  { type, text, sorting }
) => {
  switch (type) {
    case "ADD_TEXT_FILTER":
      return { ...state, text };
    case "ADD_SORT_FILTER":
      return { ...state, sorting };
    default:
      return state;
  }
};

export default filterReducer;
