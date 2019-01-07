function jumpFloor(number) {
  // write code here
  let f = 1,
    g = 2;
  while (--number) {
    g += f;
    f = g - f;
  }
  return f;
}
