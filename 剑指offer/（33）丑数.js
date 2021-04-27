function GetUglyNumber_Solution(index) {
  if (index < 7) return index;
  const res = [];
  res[0] = 1;
  let t2 = 0,
    t3 = 0,
    t5 = 0;
  for (let i = 1; i < index; i++) {
    res[i] = Math.min(res[t2] * 2, res[t3] * 3, res[t5] * 5);
    if (res[i] === res[t2] * 2) t2++;
    if (res[i] === res[t3] * 3) t3++;
    if (res[i] === res[t5] * 5) t5++;
  }
  return res[index - 1];
}
