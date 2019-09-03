const letters = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z']
};

export default function letterCombinations(digits) {
  if (!digits || !digits.length) {
    return [];
  }
  if (digits.length === 1) {
    return letters[digits[0]];
  }

  let combos = [];
  let curLetterCombos = letters[digits[0]];
  let remainingCombos = letterCombinations(digits.slice(1));

  for (let i = 0; i < curLetterCombos.length; i++) {
    for (let j = 0; j < remainingCombos.length; j++) {
      combos.push(curLetterCombos[i] + remainingCombos[j]);
    }
  }

  return combos;
}
