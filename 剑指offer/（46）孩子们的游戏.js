function LastRemainingSolution(n, m) {
  if (n === 0 || m === 0) return -1;
  const child = [];
  let del = 0;
  for (let i = 0; i < n; i++) {
    child[i] = i;
  }
  while (child.length > 1) {
    const k = m - 1;
    del = (del + k) % child.length;
    child.splice(del, 1);
  }
  return child[0];
}
