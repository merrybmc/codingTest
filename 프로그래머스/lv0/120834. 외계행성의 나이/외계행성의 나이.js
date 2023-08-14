function solution(age) {
  age = String(age);
  let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  let answer = '';
  for (let i = 0; i < age.length; i++) {
    answer += alphabet[Number(age[i])];
  }
  return answer;
}