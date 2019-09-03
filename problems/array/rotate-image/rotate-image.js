export default function rotateImage(matrix) {
  // Not in-place search
  // ----------------

  const rotated = [];    
  for (let i = 0; i < matrix.length; i++) {
    let col = matrix.map((row) => row[i]).reverse();
    rotated.push(col);
  }
  return rotated;
}