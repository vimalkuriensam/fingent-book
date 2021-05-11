import moment from "moment";

export const filter = (contents, text, type) =>
  contents
    .filter((content) => {
      const titleMatch = content?.title?.includes(text);
      const authorMatch = content?.author?.includes(text);
      return titleMatch || authorMatch;
    })
    .sort((a, b) => {
      if (type === "Date")
        return moment(b.date).valueOf() - moment(a.date).valueOf();
      return b.author - a.author;
    });
