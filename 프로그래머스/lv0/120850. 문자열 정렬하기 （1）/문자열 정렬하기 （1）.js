function solution(my_string) {
  my_string = my_string.split('');
  my_string = my_string.filter((data) => {
    if (data === '0') return data;
    if (Number(data)) return data;
  });
  my_string = my_string.sort((a, b) => a - b);
  my_string = my_string.map((data) => Number(data));

  return my_string;
}