function solution(numbers) {
  let max = Math.max(...numbers);
  let maxIndex = numbers.indexOf(max);
  let withOutMax = numbers.filter((data, index) => index !== maxIndex);
  let max2 = Math.max(...withOutMax);
  return max * max2;
}