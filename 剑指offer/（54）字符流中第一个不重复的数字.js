let map={};
//Init module if you need
function Init()
{
    map={};
}
//Insert one char from stringstream
function Insert(ch)
{
    if(map[ch]){
        map[ch]+=1;
    }else{
        map[ch] =1;
    }
}
//return the first appearence once char in current stringstream
function FirstAppearingOnce()
{
    for(let i in map){
        if (map[i] === 1){
            return i;
        }
    }
    return "#";
}