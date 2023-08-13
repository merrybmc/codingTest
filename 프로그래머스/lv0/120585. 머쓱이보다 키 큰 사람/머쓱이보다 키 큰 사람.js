function solution(array, height) {
  let answer = 0;
  array.forEach((data) => {
    data > height && answer++;
  });
  return answer;
}