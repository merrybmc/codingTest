function solution(num, k) {
  num = String(num);
  return num.includes(String(k)) ? num.indexOf(k) + 1 : -1;
}