/**
 * @param {String} string
 */
const capitalizeFirstLetters = (string) => {
  if (!string.length) return null;

  return string
    .split(" ")
    .map((el) => el[0].toLocaleUpperCase() + el.slice(1))
    .join(" ");
};

module.exports = capitalizeFirstLetters;
