function solution(n) {
  let array = String(n).split('');
  let answer = 0;
  array.forEach((data) => (answer += Number(data)));
  return answer;
}