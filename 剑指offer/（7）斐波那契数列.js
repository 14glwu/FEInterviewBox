function Fibonacci(n) {
  // write code here、
  let f = 0,
    g = 1;
  while (n--) {
    g += f;
    f = g - f;
  }
  return f;
}
