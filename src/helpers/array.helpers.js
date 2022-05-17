/**
 * groupBy - aggregates items by key using passed callback
 *
 *@param {Array} array to group
 *@param {Function} cb Callback to get key per item
 *@returns {Record<string, Array>} groups of items
 */
export const groupBy = (array, cb) => {
  const groups = {};

  const insertIntoGroup = (item, key) => {
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(item);
  };
  for (const item of array) {
    const key = cb(item);
    if (Array.isArray(key)) {
      key.forEach((k) => insertIntoGroup(item, k));
    } else {
      insertIntoGroup(item, key);
    }
  }
  return groups;
};
