function solution(sides) {
  let answer = 0;
  let max = Math.max(...sides);
  let maxIndex = sides.indexOf(max);
  let withoutMax = Number(sides.filter((_, index) => maxIndex !== index).join());

  let rest = sides[0] + sides[1];

  for (let i = 1; i <= max; i++) {
    withoutMax + i > max && answer++;
  }

  for (let i = max; i < rest - 1; i++) {
    answer++;
  }
  return answer;
}