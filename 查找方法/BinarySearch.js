function BinarySearch(a,key){//非递归版本
    let left=0,right=a.length-1,mid=-1;
    while(left<=right){
        mid=(left+right)>>1;
        if(a[mid]==key) return mid;
        if(a[mid]>key) right=mid-1;
        if(a[mid]<key) left=mid+1;
    }
    return mid;
}
let a=[1,3,4,5,8,10,16,19];
console.log(BinarySearch(a,16));
