const utilsReducerDefaultState = {
  loader: false,
};

const utilsReducer = (state = utilsReducerDefaultState, { type, loader }) => {
  switch (type) {
    case "SET_LOADER":
      return { ...state, loader };
    default:
      return state;
  }
};

export default utilsReducer;
