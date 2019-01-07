function reOrderArray(array) {
  // oddBegin主要是用作奇数的索引，oddCount是用作偶数的索引,newArray用来存储，以空间换时间，复杂度为O(n)
  let oddBegin = 0,
    oddCount = 0;
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] & 1) {
      oddCount++;
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] & 1) {
      newArray[oddBegin++] = array[i];
    } else {
      newArray[oddCount++] = array[i];
    }
  }
  return newArray;
}
