function solution(my_string, n) {
  let answer = '';
  my_string.split('').forEach((data) => (answer += data.repeat(n)));
  return answer;
}