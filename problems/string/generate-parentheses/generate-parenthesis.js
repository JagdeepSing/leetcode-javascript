export default function generateParenthesis(n) {
  if (n <= 0) {
    return [];
  }
  if (n === 1) {
    return ['()'];
  }
  
  let combos = new Set();
  let remaining = generateParenthesis(n - 1);

  for (let i = 0; i < remaining.length; i++) {
    combos.add('(' + remaining[i] + ')');
    combos.add('()' + remaining[i]);
    combos.add(remaining[i] + '()');
  }
  return Array.from(combos);
}
