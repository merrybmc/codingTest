function solution(my_string) {
  for (let i = 0; ; i++) {
    if (my_string.includes('a')) my_string = withoutText(my_string, 'a');
    if (my_string.includes('e')) my_string = withoutText(my_string, 'e');
    if (my_string.includes('i')) my_string = withoutText(my_string, 'i');
    if (my_string.includes('o')) my_string = withoutText(my_string, 'o');
    if (my_string.includes('u')) my_string = withoutText(my_string, 'u');

    if (
      !my_string.includes('a') &&
      !my_string.includes('e') &&
      !my_string.includes('i') &&
      !my_string.includes('o') &&
      !my_string.includes('u')
    )
      break;
  }
  return my_string;
}

const withoutText = (my_string, text) => {
  let strIndex = my_string.indexOf(text);
  return (my_string = my_string
    .split('')
    .filter((data, index) => strIndex !== index)
    .join(''));
};