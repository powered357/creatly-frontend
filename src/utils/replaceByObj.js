export const replaceByObj = (str, obj) => {
  const regexp = new RegExp(Object.keys(obj).join('|'), 'gi');

  return str.replace(regexp, (matched) => obj[matched]);
};
