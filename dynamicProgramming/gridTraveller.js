// with memoization
// O(m * n) time complexity
// O(m + n) space complexity
const gridTravellerWithMemo = (m, n, memo = {}) => {
  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;

  const key = m + ',' + n;
  if (key in memo) return memo[key];

  memo[key] =
    gridTravellerWithMemo(m - 1, n, memo) +
    gridTravellerWithMemo(m, n - 1, memo);
  return memo[key];
};

// without memoization
// O(2 ** (m + n)) time complexity
// O(m + n) space complexity
const gridTraveller = (m, n) => {
  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;
  return gridTraveller(m - 1, n) + gridTraveller(m, n - 1);
};

console.log(gridTravellerWithMemo(1, 1));
console.log(gridTravellerWithMemo(2, 3));
console.log(gridTravellerWithMemo(6, 6));
console.log(gridTravellerWithMemo(18, 18));
