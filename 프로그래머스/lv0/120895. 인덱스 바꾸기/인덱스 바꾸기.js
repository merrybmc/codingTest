function solution(my_string, num1, num2) {
  my_string = my_string.split('');

  let left = my_string[num1];
  let right = my_string[num2];

  my_string[num1] = right;
  my_string[num2] = left;

  return my_string.join('');
}