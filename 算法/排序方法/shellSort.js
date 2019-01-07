function shellSort(a) {
  const len = a.length;
  for (let fraction = ~~(len / 2); fraction > 0; fraction = ~~(fraction / 2)) {
    // fraction为希尔排序中的增量
    for (let i = fraction; i < len; i++) {
      for (let j = i - fraction; j >= 0 && a[j] > a[fraction + j]; j -= fraction) {
        [a[j], a[fraction + j]] = [a[fraction + j], a[j]]; // 交换间隔为增量的两个数
      }
    }
  }
}
