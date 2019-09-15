function closestValue(root, target) {
  let closest = root.val;

  while (root) {
    if (Math.abs(root.val - target) < Math.abs(closest - target)) {
      closest = root.val;
    }
    root = root.val < target ? root.right : root.left;
  }

  return closest;
}
