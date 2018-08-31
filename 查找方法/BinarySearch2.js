function BinarySearch(a,left,right,key){//递归版本
    let mid=(left+right)>>1;
    if(a[mid]==key) return mid;
    if(a[mid]>key) return BinarySearch(a,left,mid-1,key);
    if(a[mid]<key) return BinarySearch(a,mid+1,right,key);
}
let a=[1,3,4,5,8,10,16,19];
console.log(BinarySearch(a,0,7,10));
