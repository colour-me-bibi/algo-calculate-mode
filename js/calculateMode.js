/**
 * This function returns a map of elements and their frequency in the given array.
 *
 * @param {Array} arr The array to count the items in
 * @returns {Object} An object with the item counts of the array
 */
const createCounter = (arr) => {
  const counter = new Map(); // using map to have non-string keys

  for (const item of arr) {
    if (counter.has(item)) {
      counter.set(item, counter.get(item) + 1);
    } else {
      counter.set(item, 1);
    }
  }

  return counter;
};

/**
 * This function returns the mode of an array of elements.
 *
 * @param {Array} arr The array to find the mode of
 * @returns {Any} The mode of the array
 */
const calculateMode = (arr) => {
  if (arr.length === 0) return null;

  const counter = createCounter(arr);
  const max = Math.max(...counter.values());

  return Array.from(counter.keys()).filter((key) => counter.get(key) === max);
};

module.exports = { calculateMode };
