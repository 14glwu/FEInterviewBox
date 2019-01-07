const arr = [];
function Serialize(pRoot) {
  // write code here
  if (pRoot === null) {
    arr.push('a');
  } else {
    arr.push(pRoot.val);
    Serialize(pRoot.left);
    Serialize(pRoot.right);
  }
}
function Deserialize() {
  // write code here
  let node = null;
  if (arr.length < 1) {
    return null;
  }
  const number = arr.shift();
  if (typeof number === 'number') {
    node = new TreeNode(number);
    node.left = Deserialize();
    node.right = Deserialize();
  }
  return node;
}
