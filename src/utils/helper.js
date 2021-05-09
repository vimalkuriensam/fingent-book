export const textCapitalize = (text) =>
  text[0].toUpperCase() + text.substring(1).toLowerCase();

export const lowerCase = (text) => text.toLowerCase();

export const textReplace = (content, text, value) =>
  content.replace(text, value);
