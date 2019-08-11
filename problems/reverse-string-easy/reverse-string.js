/**
 * Problem:
 *    Write a function that reverses a string.
 *
 *    You can assume all the characters consist of printable ascii characters.
 */
// ----------------------------------------------------------------------------

/**
 * Reverses a string in O(n) time and space, where n is the size of the string
 *
 * @export
 * @param {String} inputString
 * @returns {String} reverse of inputString
 */
export default function reverseString(inputString) {
  if (typeof inputString !== 'string') {
    return inputString;
  }

  const stringArray = inputString.split('');

  for (let i = 0; i < stringArray.length / 2; i++) {
    const temp = stringArray[i];
    stringArray[i] = stringArray[stringArray.length - 1 - i];
    stringArray[stringArray.length - 1 - i] = temp;
  }

  return stringArray.join('');
}
