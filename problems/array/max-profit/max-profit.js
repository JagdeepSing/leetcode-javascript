/**
 *  Max profit possible from buying and selling stock, 
 *  given daily stock prices as an array.
 *
 * @export
 * @param {Array} prices
 * @returns {Number} max profit
 */
export default function maxProfit(prices) {
  let lowestSoFar = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    lowestSoFar = Math.min(lowestSoFar, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - lowestSoFar);
  }
  return maxProfit;
}
