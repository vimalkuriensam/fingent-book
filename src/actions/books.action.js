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
