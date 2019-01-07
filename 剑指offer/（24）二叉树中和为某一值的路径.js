function FindPath(root, expectNumber) {
  // write code here
  const list = [],
    listAll = [];
  return findpath(root, expectNumber, list, listAll);
}
function findpath(root, expectNumber, list, listAll) {
  if (root === null) {
    return listAll;
  }
  list.push(root.val);
  const x = expectNumber - root.val;
  if (root.left === null && root.right === null && x === 0) {
    listAll.push(Array.of(...list));
  }
  findpath(root.left, x, list, listAll);
  findpath(root.right, x, list, listAll);
  list.pop();
  return listAll;
}
