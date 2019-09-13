function distributeCoins(root) {
  let moves = 0;
  dfs(root);
  return moves;
  
  function dfs(node) {
    if (!node) {
      return 0;
    }

    const left = node.left ? dfs(node.left) : 0;
    const right = node.right ? dfs(node.right) : 0;
    
    moves += Math.abs(left) + Math.abs(right);
    return node.value + left + right - 1;
  }
}
