function solution(order) {
  let answer = 0;
  order = String(order);
  for (let i = 0; i < order.length; i++) {
    order[i] === "3" && answer++;
    order[i] === "6" && answer++;
    order[i] === "9" && answer++;
  }
  return answer;
}