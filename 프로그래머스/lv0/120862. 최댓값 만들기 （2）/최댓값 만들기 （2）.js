function solution(numbers) {
  let plus = numbers.filter((data) => data >= 0).sort((a, b) => a - b);
  let minus = numbers.filter((data) => data <= 0).sort((a, b) => b - a);
  let multiPlus = 0;
  let multiMinus = 0;

  if (plus.length > 1) multiPlus = plus[plus.length - 1] * plus[plus.length - 2];

  if (minus.length > 1) multiMinus = minus[minus.length - 1] * minus[minus.length - 2];

  if (plus.length === 1 && minus.length === 1) return plus[0] * minus[0];
  if (multiPlus >= multiMinus) return multiPlus;
  if (multiPlus <= multiMinus) return multiMinus;
}