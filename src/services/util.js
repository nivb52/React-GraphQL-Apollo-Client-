export const formatUTCDate = (d) => {
  return d
    .split('T') // split on the "T"   -> ["2015-11-09", "10:..."]
    .shift() // get the first part -> "2015-11-09"
    .split('-') // split again on "-" -> ["2015", "11", "09"]
    .reverse() // reverse the array  -> ["09", "11", "2015"]
    .join('/'); // join with "/"      -> "09/11/2015"
};

// change flicker image size
export const getMinyImage = (url) => {
  return url.substring(0, url.search('.jpg') - 1) + 'c.jpg';
};
