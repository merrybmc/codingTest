function solution(dot) {
  const firstBool = dot[0] > 0;
  const secondBool = dot[1] > 0;
  if (firstBool && secondBool) return 1;
  if (!firstBool && secondBool) return 2;
  if (!firstBool && !secondBool) return 3;
  if (firstBool && !secondBool) return 4;
}