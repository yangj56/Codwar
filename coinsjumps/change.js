function minCoins(coins, m, amount) {
  console.log(amount);

  // Base case
  if (amount == 0) return 0;

  // Initialize result
  let res = Number.MAX_VALUE;

  // Try every coin that has smaller
  // value than amount
  for (let i = 0; i < m; i++) {
    console.log(i);
    if (coins[i] <= amount) {
      console.log(amount);
      console.log(coins[i]);
      let sub_res = minCoins(coins, m, amount - coins[i]);
      res;
      sub_res;
      // Check for INT_MAX to avoid overflow and
      // see if result can minimized
      if (sub_res != Number.MAX_VALUE && sub_res + 1 < res) {
        res = sub_res + 1;
      }
    }
  }
  if (res === Number.MAX_VALUE) {
    return -1;
  } else {
    return res;
  }
}

// Driver code
let coins = [1, 2];
let m = coins.length;
let amount = 2;

console.log(minCoins(coins, m, amount));
