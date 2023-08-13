function solution(numer1, denom1, numer2, denom2) {
  let answer = [];
  let result = [];
  result.push(numer2 * denom1 + numer1 * denom2);
  result.push(denom1 * denom2);
  answer = [...result];

  for (let i = 2; i <= result[0]; i++) {
    if (result[0] % i === 0 && result[1] % i === 0) {
      answer = [result[0] / i, result[1] / i];
    }
  }

  return answer;
}