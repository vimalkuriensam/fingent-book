export const addBooks = ({ title, author, date, pageContent }) => ({
  type: "ADD_BOOK",
  payload: {
    title,
    author,
    date,
    pages: {
      1: pageContent,
    },
  },
});
