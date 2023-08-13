function solution(array, n) {
  let answer = 0;
  array.forEach((data) => {
    data === n && answer++;
  });
  return answer;
}