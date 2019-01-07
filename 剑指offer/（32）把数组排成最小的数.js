function PrintMinNumber(numbers) {
  numbers.sort(function(s1, s2) {
    const c1 = `${s1}${s2}`;
    const c2 = `${s2}${s1}`;
    return c1 > c2;
  });
  let min = '';
  numbers.forEach((i) => min += i);
  return min;
}
