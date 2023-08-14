function solution(array) {
  let trans = Array.from(new Set(array));
  let afterArray = [];
  let after = 0;

  for (let i = 0; i <= trans.length; i++) {
    if (i !== 0) {
      afterArray.push(after);
    }
    after = 0;
    for (let k = 0; k <= array.length; k++) {
      if (trans[i] === array[k]) {
        after++;
      }
    }
  }

  let max = Math.max(...afterArray);
  let maxIndex = afterArray.indexOf(max);
  let result = parseInt(trans[maxIndex]);
  let check = 0;

  afterArray.forEach((data) => {
    if (data === max) {
      return check++;
    } else {
      return;
    }
  });

  if (check > 1) {
    return -1;
  } else {
    return result;
  }
}