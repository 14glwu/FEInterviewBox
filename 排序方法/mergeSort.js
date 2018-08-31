//递归版
function merge(left,right){
    let tmp=[];
    while(left.length&&right.length){//合并左右数组
        if(left[0]<right[0])
            tmp.push(left.shift());
        else
            tmp.push(right.shift());
    }
    return tmp.concat(left,right);
}
function mergeSort(a){
    if(a.length==1)//终止条件
        return a;
    let mid=a.length>>1,
        left=a.slice(0,mid),
        right=a.slice(mid);
    return merge(mergeSort(left),mergeSort(right))
}
console.log(mergeSort([1,2,3,3,2,1]));