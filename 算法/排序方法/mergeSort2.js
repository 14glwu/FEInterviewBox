//非递归版
function merge(left, right) {
    let result = [];
    while (left.length && right.length) {
        if (left[0] < right[0])
            result.push(left.shift());
        else
            result.push(right.shift());
    }
    return result.concat(left, right);
}
function mergeSort(a) {
    if (a.length === 1)
        return a;
    let work = [],len=a.length;
    for (let i = 0; i < len; i++)
        work.push([a[i]]);
    work.push([]); // 如果数组长度为奇数
    let last=0;
    for (let lim = len; lim > 1; lim = (lim + 1)>>1) {
        for (let j = 0, k = 0; k < lim; j++, k += 2) {
            work[j] = merge(work[k], work[k + 1]);
            last=j;
        }
        work[last+1] = []; // 如果数组长度为奇数
    }
    return work[0];
}
console.log(mergeSort([1,2,3,4,5,6,5,4,3,1]));
