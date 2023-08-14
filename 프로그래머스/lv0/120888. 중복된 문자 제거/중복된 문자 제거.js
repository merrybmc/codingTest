function solution(my_string) {
  my_string = my_string.split('');
  for (let i = 0; i < my_string.length; i++) {
    for (let k = 0; k < 110; k++) {
      if (my_string.indexOf(my_string[i], i + 1) > 0) {
        let sameIndex = my_string.indexOf(my_string[i], i + 1);
        my_string[sameIndex] = '';
      }

      if (my_string.indexOf(my_string[i], i + 1) < 0) break;
    }
  }

  return my_string.join('');
}