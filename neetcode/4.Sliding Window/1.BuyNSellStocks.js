/**
 * Best Time To Buy And Sell Stocks
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 */

var maxProfit = function (prices) {
  let profit = 0;
  let l = 0;
  let r = 1;

  while (r < prices.length) {
    if (prices[l] < prices[r]) {
      const currentProfit = prices[r] - prices[l];
      profit = Math.max(profit, currentProfit);
    } else {
      l = r;
    }
    r++;
  }
  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([2, 4, 1]));
console.log(maxProfit([1, 2, 4, 2, 5, 7, 2, 4, 9, 0, 9]));
