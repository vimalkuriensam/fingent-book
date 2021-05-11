export const addBooks = ({ ebno, title, author, date, pageContent }) => ({
  type: "ADD_BOOK",
  payload: {
    ebno,
    title,
    author,
    date,
    pages: {
      1: pageContent,
    },
  },
});

export const addSelected = ({ selected }) => ({
  type: "ADD_SELECTED",
  payload: selected,
});

export const resetSelected = () => ({ type: "RESET_SELECTED" });
