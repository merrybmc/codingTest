function solution(money) {
  var answer = [];
  for (let i = 1; ; i++) {
    if (money / (5500 * i) >= 1) continue;
    if (money / (5500 * i) < 1) {
      answer.push(i - 1);
      answer.push(money - 5500 * (i - 1));
      break;
    }
  }
  return answer;
}