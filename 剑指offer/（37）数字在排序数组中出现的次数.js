function GetNumberOfK(data, k) {
  if (getEnd(data, k) === -1 && getBegin(data, k) === -1) return 0;
  return getEnd(data, k) - getBegin(data, k) + 1;
}
function getBegin(data, k) {
  let [left, right] = [0, data.length - 1];
  let mid = left + right >> 1;
  while (left <= right) {
    if (data[mid] > k) {
      right = mid - 1;
    } else if (data[mid] < k) {
      left = mid + 1;
    } else if (mid - 1 >= 0 && data[mid - 1] === k) {
      right = mid - 1;
    } else return mid;
    mid = left + right >> 1;
  }
  return -1;
}
function getEnd(data, k) {
  let [left, right] = [0, data.length - 1];
  let mid = left + right >> 1;
  while (left <= right) {
    if (data[mid] > k) {
      right = mid - 1;
    } else if (data[mid] < k) {
      left = mid + 1;
    } else if (mid + 1 < data.length && data[mid + 1] === k) {
      left = mid + 1;
    } else return mid;
    mid = left + right >> 1;
  }
  return -1;
}
