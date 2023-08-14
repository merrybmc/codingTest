function solution(my_string) {
  my_string = my_string.toLowerCase();
  my_string = my_string.split('');
  return my_string.sort((a, b) => a.localeCompare(b)).join('');
}