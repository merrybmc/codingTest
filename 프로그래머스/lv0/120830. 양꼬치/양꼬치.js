function solution(n, k) {
  let answer = 0;
  answer = n * 12000 + k * 2000;
  let service = Math.floor(n / 10) * 2000;
  answer = answer - service;
  return answer;
}
