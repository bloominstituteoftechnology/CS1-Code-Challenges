const breadthFirstSearch = (tree, searchTerm) => {
  let queue = Object.values(tree);
  while (queue.length > 0) {
    value = queue.shift();
    if (value === searchTerm) return true;
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      queue = queue.concat(Object.values(value));
    }
  }
  return false;
};
