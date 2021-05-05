export const cutString = (str, max) => {
  if (str?.length > max) {
    return `${str.substring(0, max - 3)}...`;
  }

  return str;
};
