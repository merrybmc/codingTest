function solution(num_list) {
  let result1 = 0;
  let result2 = 0;
  num_list.forEach((data) => (data % 2 === 0 ? result1++ : result2++));
  return [result1, result2];
}