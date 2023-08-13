function solution(numbers, k) {
  let length = numbers.length;
  let location = 0;

  for (let i = 1; i <= k; i++) {
    location += 2;
    if (location === length) location = 0;
    if (location > length) location = 1;
  }

  if (location >= 2) location -= 2;
  if (location - 2 === -1) location = length-1;
  if (location - 2 === -2) location = length - 2;

  return numbers[location];
}
