export const formatUTCDate = (d) => {
  if (!d) return;
  return d
    .split('T') // split on the "T"   -> ["2015-11-09", "10:..."]
    .shift() // get the first part -> "2015-11-09"
    .split('-') // split again on "-" -> ["2015", "11", "09"]
    .reverse() // reverse the array  -> ["09", "11", "2015"]
    .join('/'); // join with "/"      -> "09/11/2015"
};

// change flicker image size
export const getMinyImage = (url) => {
  return url && url.substring(0, url.search('.jpg') - 1) + 'c.jpg';
};

// change Image size
export const getImage = (urlFromArray = [], url) => {
  return urlFromArray.length > 0
    ? getMinyImage(urlFromArray[0])
    : getMinyImage(url);
};
