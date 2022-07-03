// with memoization
const fibWithMemo = (n, memo = {}) => {
  if (n <= 2) memo[n] = 1;
  if (n in memo) return memo[n];
  memo[n] = fibWithMemo(n - 1, memo) + fibWithMemo(n - 2, memo);
  return memo[n];
};

// without memoization
const fibNoMemo = (n) => {
  if (n <= 2) return n;
  return fibNoMemo(n - 1) + fibNoMemo(n - 2);
};

console.log(fibWithMemo(50));
