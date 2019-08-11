/**
 *  Maximum depth of binary tree.
 *
 * @export
 * @param {Tree Node} root
 * @param {number} [depth=0]
 * @returns {number} max depth of tree or zero
 */
export default function maxDepthOfBinaryTree(root, depth = 0) {
  if (!root) {
    return 0;
  }

  depth++;

  const leftDepth = root.left ? maxDepthOfBinaryTree(root.left, depth) : depth;
  const rightDepth = root.right ? maxDepthOfBinaryTree(root.right, depth) : depth;

  return Math.max(leftDepth, rightDepth);
}
