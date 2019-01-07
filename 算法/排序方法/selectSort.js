/**
 * Created by lin on 2018/8/7.
 */
function selectSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      minIndex = arr[j] < arr[minIndex] ? j : minIndex;
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
}
const arr = [3, 4, 5, 2, 6];
selectSort(arr);
console.log(arr);
