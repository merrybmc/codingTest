function solution(n) {
  let answer = 0;

  for (let i = 4; i <= n; i++) {
    let count = 0;
    for (let k = 1; k <= n; k++) {
      i % k === 0 && count++;
      if (count >= 3) {
        answer++;
        break;
      }
    }
  }
  return answer;
}