function solution(n) {
  let answer = 0;

  for (let i = 1; ; i++) {

    if (i * i > n) {
      answer = 2;
      break;
    }

    if (i * i === n) {
      answer = 1;
      break;
    }
  }
  
  return answer;
}