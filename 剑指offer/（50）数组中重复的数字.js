// 第一种
function duplicate(numbers, duplication) {
  for (let i = 0; i < numbers.length; i++) {
    while (i !== numbers[i]) {
      if (numbers[i] === numbers[numbers[i]]) {
        duplication[0] = numbers[i];
        return true;
      }
      let temp = numbers[i];
      [numbers[i], numbers[temp]] = [numbers[temp], numbers[i]]; // 交换
    }
  }
  return false;
}

// 第二种
function duplicate2(numbers, duplication) {
  for (let i = 0; i < numbers.length; i++) {
    let index = numbers[i];
    if (index >= numbers.length) {
      index -= numbers.length;
    }
    if (numbers[index] >= numbers.length) {
      duplication[0] = index;
      return true;
    }
    numbers[index] = numbers[index] + numbers.length;
  }
  return false;
}
