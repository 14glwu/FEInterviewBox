function FindContinuousSequence(sum)
{
    let a=0,res=[],half=sum>>1;
    while(half--){
        a++;
        let i=1;
        while((i+1)*(2*a+i)<2*sum){
            i++;
        }
        if((i+1)*(2*a+i)==2*sum){
            let tmp=[];
            tmp.push(a);
            tmp.push(i);
            res.push(tmp);
        }
    }
    for(let i=0;i<res.length;i++){
        let num=res[i][1],k=1,tmp=[];
        tmp.push(res[i][0]);
        while(num--){
            tmp.push(res[i][0]+k);
            k++;
        }
        res[i]=tmp;
    }
    return res;
}