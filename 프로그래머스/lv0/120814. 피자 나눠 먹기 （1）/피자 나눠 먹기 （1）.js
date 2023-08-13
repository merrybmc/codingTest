function solution(n) {
  let count = 1;
  if (n <= 7) return 1;
  for (let i = 7; ; i += 7) {
    if (i >= n) break;
    if (i <= n) count++;
  }
  return count;
}