function solution(box, n) {
  let index1 = Math.floor(box[0] / n);
  let index2 = Math.floor(box[1] / n);
  let index3 = Math.floor(box[2] / n);
  return index1 * index2 * index3;
}