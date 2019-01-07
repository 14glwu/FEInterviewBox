const array = [];
function Insert(num) {
  array.push(num);
  for (let i = array.length - 2; array[i] > num; i--) {
    [array[i], array[i + 1]] = [array[i + 1], array[i]];
  }
}
function GetMedian() {
  if (array.length & 1 === 1) {
    return array[(array.length - 1) / 2];
  }
  return (array[array.length / 2] + array[array.length / 2 - 1]) / 2;
}
