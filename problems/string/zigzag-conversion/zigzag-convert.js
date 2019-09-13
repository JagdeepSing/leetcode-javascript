function convert(s, numRows) {
  if (numRows === 1) {
    return s;
  }

  const matrix = [];
  for (let i = 0; i < Math.min(numRows, s.length); i++) {
    matrix[i] = '';
  }

  let row = 0;
  let add = -1;

  for (let i = 0; i < s.length; i++) {
    matrix[row] += s[i];

    if (row === 0 || row === numRows - 1) {
      add *= -1;
    }
    row += add;
  }

  return matrix.join('');
}
