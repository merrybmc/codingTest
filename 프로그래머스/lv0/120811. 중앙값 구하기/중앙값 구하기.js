function solution(array) {
  let answer = 0;
  array = array.sort((a, b) => a - b);
  answer = array[Math.floor(array.length / 2)];
  return answer;
}