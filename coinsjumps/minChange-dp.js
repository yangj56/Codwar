function miniChange(coins, amount) {
  const numAmount = new Array(amount + 1).fill(Infinity);
  numAmount[0] = 0;
  for (const coin of coins) {
    coin;
    for (let incAmount = 0; incAmount < numAmount.length; incAmount++) {
      if (incAmount >= coin) {
        numAmount[incAmount] = Math.min(
          numAmount[incAmount],
          numAmount[incAmount - coin] + 1
        );
      }
    }
  }
  numAmount;
  return numAmount[amount] !== Infinity ? numAmount[amount] : -1;
}

console.log(miniChange([1, 10, 5], 7));
