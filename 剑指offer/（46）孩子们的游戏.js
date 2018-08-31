function LastRemaining_Solution(n, m)
{
    if(n==0||m==0) return -1;
    let child=[],del=0;
    for(let i=0;i<n;i++){
        child[i]=i;
    }
    while(child.length>1){
        let k=m-1;
        del=(del+k)%child.length;
        child.splice(del,1);
    }
    return child[0];
}