function solution(num_list, n) {
  var answer = [];
  let indexCount = 0;

  for (let i = 0; i < num_list.length; i += n) {
    answer = [...answer, []];

    for (let k = 0; k < n; k++) {
      answer[indexCount].push(num_list[k + i]);
    }
    indexCount++;
  }

  return answer;
}