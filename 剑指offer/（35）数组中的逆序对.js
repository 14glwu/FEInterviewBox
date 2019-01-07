function InversePairs(data) {
  if (!data || data.length < 2) return 0;
  const copy = data.slice();
  let count = 0;
  count = mergeCount(data, copy, 0, data.length - 1);
  return count % 1000000007;
}
function mergeCount(data, copy, start, end) {
  if (start === end) return 0;
  const mid = end - start >> 1,
    left = mergeCount(copy, data, start, start + mid), // 注意参数，copy作为data传入
    right = mergeCount(copy, data, start + mid + 1, end); // 注意参数，copy作为data传入
  let [p, q, count, copyIndex] = [start + mid, end, 0, end];
  while (p >= start && q >= start + mid + 1) {
    if (data[p] > data[q]) {
      copy[copyIndex--] = data[p--];
      count = count + q - start - mid;
    } else {
      copy[copyIndex--] = data[q--];
    }
  }
  while (p >= start) {
    copy[copyIndex--] = data[p--];
  }
  while (q >= start + mid + 1) {
    copy[copyIndex--] = data[q--];
  }
  return count + left + right;
}
