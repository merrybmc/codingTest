function solution(before, after) {
  let beforeArr = before.split('');
  let afterArr = after.split('');

  for (let i = 0; i < beforeArr.length; i++) {
    for (let k = 0; k < afterArr.length; k++) {
      if (beforeArr[i] === afterArr[k]) {
        beforeArr[i] = '';
        afterArr[k] = '';
      }
    }
  }
  beforeArr = beforeArr.join('');
  afterArr = afterArr.join('');

  if (beforeArr.length === 0 && afterArr.length === 0) return 1;
  else return 0;
}