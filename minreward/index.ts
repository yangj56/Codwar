export function minRewards(scores: number[]) {
  const rewards = scores.map((_) => 1);
  rewards;
  for (let i = 1; i < scores.length; i++) {
    let j = i - 1;
    if (scores[i] > scores[j]) {
      rewards[i] = rewards[j] + 1;
    } else {
      while (j >= 0 && scores[j] > scores[j + 1]) {
        rewards[j] = Math.max(rewards[j], rewards[j + 1] + 1);
        j--;
      }
    }
  }
  console.log(rewards);
  return rewards.reduce((a, b) => a + b);
}
console.log(minRewards([2, 1, 4, 3, 6, 5, 8, 7, 10, 9]));

