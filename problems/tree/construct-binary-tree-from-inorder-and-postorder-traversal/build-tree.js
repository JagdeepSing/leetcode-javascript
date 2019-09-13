
function buildTree(inorder, postorder) {
  if (postorder.length === 0) {
    return null;
  }
  if (postorder.length === 1) {
    return new TreeNode(postorder[0]);
  }

  let rootVal = postorder.pop();
  let rootIdxInOrder = inorder.indexOf(rootVal);
  
  let root = new TreeNode(rootVal);
  root.left = buildTree(inorder.slice(0, rootIdxInOrder), postorder.slice(0, rootIdxInOrder));
  root.right = buildTree(inorder.slice(rootIdxInOrder + 1), postorder.slice(rootIdxInOrder));

  return root;
}

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}