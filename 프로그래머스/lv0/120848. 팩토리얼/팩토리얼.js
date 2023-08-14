function solution(n) {
  let count = 1;
  let sum = 1;

  for (let i = 1; ; i++) {
    sum *= count;
    if (sum === n) break;
    if (sum > n) {
      count--;
      break;
    }
    count++;
  }
  return count;
}