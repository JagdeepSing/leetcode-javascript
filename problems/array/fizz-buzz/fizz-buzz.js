/**
 * Returns array of string representation of numbers from 1 to n.
 * 
 * For multiples of 3, the representation is 'Fizz' and for the multiples of 5 the representation is 'Buzz'. For multiples of 5 and 3, representation is 'FizzBuzz'.
 *
 * @export
 * @param {*} n
 * @returns
 */
export default function fizzBuzz(n) {
  const fizzBuzzArray = [];
  for (let i = 1; i <= n; i++) {
    let addVal = '';
    if (i % 3 === 0) {
      addVal += 'Fizz';
    }
    if (i % 5 === 0) {
      addVal += 'Buzz';
    }
    fizzBuzzArray.push(addVal === '' ? `${i}` : addVal);
  }
  return fizzBuzzArray;
}
