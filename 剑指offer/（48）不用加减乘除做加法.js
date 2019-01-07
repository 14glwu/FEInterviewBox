function Add(num1, num2) {
  while (num2 !== 0) {
    const tmp1 = num1 ^ num2;
    num2 = (num1 & num2) << 1;
    num1 = tmp1;
  }
  return num1;
}
