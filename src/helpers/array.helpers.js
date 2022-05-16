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
