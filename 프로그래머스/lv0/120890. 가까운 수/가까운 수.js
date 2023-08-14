function solution(array, n) {
  let nearbyArr = [];

  nearbyArr = array.map((data) => Math.abs(data - n));

  let min = Math.min(...nearbyArr);
  let minIndex = nearbyArr.indexOf(min);

  let check = [];
  nearbyArr.forEach((data, index) => {
    data === min && check.push(index);
  });

  let sameArr = check.map((data) => array[data]);

  if (check.length <= 1) return array[minIndex];
  if (check.length > 1) return Math.min(...sameArr);
}