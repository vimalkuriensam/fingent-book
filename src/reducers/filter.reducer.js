const filterReducerDefaultState = {
  text: "",
  sort: "date",
};

const filterReducer = (
  state = filterReducerDefaultState,
  { type, text, sort }
) => {
  switch (type) {
    default:
      return state;
  }
};

export default filterReducer;
