function solution(sides) {
  let max = Math.max(...sides);
  let maxIndex = sides.indexOf(max);
  let newArray = sides.filter((data, index) => maxIndex !== index);
  let sum = newArray.reduce((a, b) => (a += b));

  return max < sum ? 1 : 2;
}