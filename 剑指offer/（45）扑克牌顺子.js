function IsContinuous(numbers) {
  let max = 0,
    min = 14,
    flag = 0;
  if (numbers.length !== 5) return false;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 13 || numbers[i] < 0) return false;
    if (numbers[i] === 0) continue;
    if ((flag >> numbers[i] & 1) === 1) return false;
    flag = flag | 1 << numbers[i];
    if (numbers[i] > max) max = numbers[i];
    if (numbers[i] < min) min = numbers[i];
  }
  if (max - min >= 5) return false;
  return true;
}
