function rectCover(number) {
  // write code here
  if (number === 0) return 0;
  let f = 1,
    g = 2;
  while (--number) {
    g += f;
    f = g - f;
  }
  return f;
}
